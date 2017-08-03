pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:7.10.1-alpine'
                }
            }

            steps {
                echo 'Building...'

                withNPM() {
                    echo "npm install..."
                    sh 'npm install'
                }
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