let fs = require('fs');

const javascriptRegExp = new RegExp('\\<modul-demo\\s*[^>]*>[\\s\\S]*?```javascript([\\s\\S]*?)\\```', 'g');
const EXTENSION = '.md';
const COMP_PATH_SRC = './src/app/meta/components/';
const COMP_PATH_DEST = './src/assets/md/';
const MD_SCRIPTS = 'md-scripts.ts';

let toComplete = {};

let stream = fs.createWriteStream(COMP_PATH_SRC + MD_SCRIPTS);
stream.on('error', console.error);

readFolders('./src/app/meta/components', (folder) => {
    readFiles('./src/app/meta/components/' + folder , (file, done) => {
        toComplete[file] = false;

        let errors = [];

        read(`${COMP_PATH_SRC}${folder}/${file}`, source => {
            let destContent = source;

            // Get Modul Demo component
            let modulDemo = undefined;
            do {
                modulDemo = javascriptRegExp.exec(source);

                if (modulDemo) {
                    write(modulDemo[1], err => {
                        // logError(err.message);
                    });
                }
            }
            while (modulDemo);

            done();
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
