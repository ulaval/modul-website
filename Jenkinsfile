pipeline {
    agent { docker 'node:8.2-alpine' }

    environment {
        // Pour éviter une erreur: EACCES: permission denied, mkdir '/.npm'
        npm_config_cache = 'npm-cache'
    }

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

                echo "Initializing npm..."
                sh 'npm install'

                echo "Building..."
                sh 'npm run build'

                echo "Packaging..."
                sh 'npm pack'

                stash includes: 'ulaval-modul-website-*.tgz', name: 'pack'
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