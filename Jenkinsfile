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
        DOCKER_REPOSITORY = '<docker-repo>'
        DOCKER_REPOSITORY_URL = '<docker-repo-url>'

        POST_RECIPIENTS = '<recipients-email>'
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
