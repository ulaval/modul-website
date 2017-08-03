#!groovy
pipeline {

    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
    }

    environment {
        //APP_VERSION = readMavenPom().getVersion()
        DOCKER_REPOSITORY = 'docker-local.maven.at.ulaval.ca/ena2'
        DOCKER_REPOSITORY_URL = 'https://docker-local.maven.at.ulaval.ca/v2'
        BUILD_ID = $ { env.BUILD_ID }
        BUILD_URL = $ { env.BUILD_URL }
        NODE_NAME = $ { env.NODE_NAME }
    }

    stages {

        stage('Build') {
            agent {
                docker "node:7.10.1-alpine"
            }
            steps {
                echo "Building application..."

                /*withNPM() {

                }
                // ID correspondant au fichier de configuration dans jenkins
                withMaven(mavenSettingsConfig: 'global-maven-settings') {
                    sh '''
                        mvn clean -Dmaven.test.skip=true deploy -U \
                            -Djenkins.build.id=${BUILD_URL} \
                            -Djenkins.build.url=${BUILD_URL} \
                            -Djenkins.node.name=${NODE_NAME}
                     '''
                }

                stash includes: '**/target/*.jar', name: 'jarfiles'*/
            }
        }
/*
        stage('Construire les images docker') {

            steps {

                parallel(

                        "ena2-exemple": {

                            unstash name: 'jarfiles'

                            sh '''
                                docker build . \
                                    --tag ${DOCKER_REPOSITORY}/ena2-exemple:${APP_VERSION} \
                                    --build-arg JAR_FILE=ena2-exemple/ena2-exemple-impl/target/ena2-exemple-impl-${APP_VERSION}.jar \
                                    --no-cache
                            '''
                        },

                        "ena2-forums": {

                            unstash name: 'jarfiles'

                            sh '''
                                docker build . \
                                    --tag ${DOCKER_REPOSITORY}/ena2-forums:${APP_VERSION} \
                                    --build-arg JAR_FILE=ena2-forums/ena2-forums-impl/target/ena2-forums-${APP_VERSION}.jar \
                                    --no-cache
                            '''
                        }
                )

            }
        }

        stage('Publier les images docker dans le repo') {

            steps {

                parallel(

                        "ena2-exemple": {
                            withDockerRegistry(url: DOCKER_REPOSITORY_URL, credentialsId: 'artifactory-docker-registry-credential') {
                                sh 'docker push ${DOCKER_REPOSITORY}/ena2-exemple:${APP_VERSION}'
                            }
                        },

                        "ena2-forums": {
                            withDockerRegistry(url: DOCKER_REPOSITORY_URL, credentialsId: 'artifactory-docker-registry-credential') {
                                sh 'docker push ${DOCKER_REPOSITORY}/ena2-forums:${APP_VERSION}'
                            }
                        }
                )

            }
        }

        stage('Déployer les apps dans OpenShift') {
            steps {
                script {
                    openshift.withCluster( 'pca.exp.ulaval.ca' ) {
                        openshift.withProject( 'ena2-exemple' ) {
                            def dcSelector = openshift.selector( 'deploymentconfig/develop' )
                            def result = dcSelector.deploy('--latest')
                            echo "Operation output status: ${result.out}"
                            dcSelector.rollout().status("-w")
                        }
                    }
                }
            }
        }


        stage('Execution des tests') {
            agent {
                docker "maven:3.5.0-jdk-8"
            }
            steps {
                echo "Building application..."

                // ID correspondant au fichier de configuration dans jenkins
                withMaven(mavenSettingsConfig: 'global-maven-settings') {
                    sh '''
                    mvn test \
                 '''
                }
            }
        }

        stage('Analyse de sonar') {
            agent {
                docker "maven:3.5.0-jdk-8"
            }
            steps {
                echo "Analysing..."

                withMaven(mavenSettingsConfig: 'global-maven-settings') {

                    withSonarQubeEnv('SonarQube DTI') {
                        sh 'mvn sonar:sonar '
                    }
                }
            }
        }
*/
    }
    post {
        always {
            envoyerNotifications currentBuild.result
        }
    }
}