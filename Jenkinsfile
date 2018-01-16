#!/usr/bin/env groovy

pipeline {
    agent any

    options {
        // Discarter après 10 builds
        buildDiscarder(logRotator(numToKeepStr: '10'))

        // Ajouter les timestamps dans le log
        timestamps()
    }

    environment {
        // Pour éviter une erreur: EACCES: permission denied, mkdir '/.npm'
        npm_config_cache = 'npm-cache'
        DOCKER_REPOSITORY = 'docker-local.maven.at.ulaval.ca/modul'
        DOCKER_REPOSITORY_URL = 'https://docker-local.maven.at.ulaval.ca'
    }

    stages {
        stage('Build') {
            when {
                expression {
                    branch 'master' || branch 'develop'
                }
            }

            agent {
                docker {
                    image 'node:9.4.0-alpine'
                }
            }

            steps {
                sh 'rm -rf dist node_modules'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Build status'
            step([$class: 'Mailer', recipients: ['martin.simard@dti.ulaval.ca', emailextrecipients([[$class: 'CulpritsRecipientProvider'], [$class: 'RequesterRecipientProvider']])].join(' ')])
        }
    }
}
