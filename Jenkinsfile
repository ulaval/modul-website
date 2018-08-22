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

        POST_RECIPIENTS = 'martin.simard@dti.ulaval.ca'

        // env.BRANCH_NAME=='master' || env.BRANCH_NAME=='develop'
    }

    stages {
        stage('Build') {
            when {
                expression {
                    env.BRANCH_NAME == 'feature/jenkins-webhook'
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
                sh 'npm pack'
            }
        }
    }

    post {
        always {
            script {
                emailext subject: '$DEFAULT_SUBJECT',
                        body: '$DEFAULT_CONTENT',
                        replyTo: '$DEFAULT_REPLYTO',
                        to: "${POST_RECIPIENTS}"
                recipientProviders:
                [[$class: 'DevelopersRecipientProvider']]
            }
        }
    }
}
