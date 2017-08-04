pipeline {
    agent { docker 'node:8.2-alpine' }

    stages {
        stage('Build') {

            /*agent {
                docker {
                    image 'node:8.2-alpine'
                }
            }*/
            steps {
                sh 'pwd'
                echo 'Clean up...'
                sh 'rm -rf dist'
                sh 'rm -rf node_modules'

                echo "npm install..."
                sh 'npm install'

                echo "npm run build..."
                sh 'npm run build'

                echo "npm run build..."
                sh 'npm run package'

                stash includes: 'modul-website-*.tgz', name: 'pack'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}