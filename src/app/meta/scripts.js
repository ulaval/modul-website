let fs = require('fs');

const slotRegExp = new RegExp('\\<slot\\s+[^>]*(name=("|\')script("|\')){1}\\s*[^>]*>([\\s\\S]*?)</slot>', 'g');
const EXTENSION = '.md';
const COMP_PATH = './src/app/meta/components/';
const MD_SCRIPTS = 'mdscripts';

let toComplete = {};

let uuid = Math.random().toString(36).substr(2, 5);
let stream = fs.createWriteStream(`${COMP_PATH}${MD_SCRIPTS}-${uuid}.ts`);
stream.on('error', console.error);

readFolders('./src/app/meta/components', (folder) => {
    readFiles('./src/app/meta/components/' + folder , (file, done) => {
        toComplete[file] = false;

        let errors = [];

        read(`${COMP_PATH}${folder}/${file}`, source => {
            let slot = undefined;
            do {

                slot = slotRegExp.exec(source);
                // console.log(slot)
                if (slot) {

                    write(slot[4], err => {
                        logError(err.message);
                    });
                }
            }
            while (slot);

            done();
            // Object.keys(meta.attributes).forEach(attribute => {
            //     errors.push(`${attribute} is not a component property`);
            // })
    // console.log('fin', errors);
            // done(errors);
        }, err => {
            logError(err.message);
        });

    });
});



function readFolders(folder, cb) {
    let toComplete = {};
    fs.readdir(folder, (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(file => {
            if (fs.statSync(folder + '/' + file).isDirectory()) {
                cb(file);
            }
        });
    });
};

function readFiles(folder, cb, done) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(file => {
            if (!fs.statSync(folder + '/' + file).isDirectory()
                && file.indexOf(EXTENSION)>=0) {

                let done = () => {
                    delete toComplete[file];

                    if (Object.keys(toComplete).length === 0) {
                        stream.end();
                    }
                };

                cb(file, done);
            }
        });
    });
};

function read(file, cb, cbError) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            cbError(err);
        } else {
            cb(data);
        }
    });
}

function write(script, cbError) {
    stream.write(script + '\n');
}

function internalLog(indent, colorCode, char, ...params) {
    let c = indent ? '    ' + char : char;
    console.log(`\x1b[${colorCode}m%s\x1b[0m`, c, ...params);
}

function logSuccess(...params) {
    internalLog(false, 32, '✓', ...params);
}

function logError(...params) {
    internalLog(false, 31, 'x', ...params);
}

function logErrorIndent(...params) {
    internalLog(true, 31, 'x', ...params);
}
