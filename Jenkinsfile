pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'tobi666'
        DOCKER_HUB_PASSWORD = credentials('dckr_pat_rNT9IAd05JYLwAovRwkZPHxM2pU')
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/tobijay666/DrugsRdrugs.git',
                        credentialsId: 'github-pat'
                    ]]
                ])
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    bat 'docker build -t tobi666/backend ./backend'
                    bat 'docker build -t tobi666/frontend ./frontend'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    bat 'echo %DOCKER_HUB_PASSWORD% | docker login -u %DOCKER_HUB_USERNAME% --password-stdin'
                    bat 'docker push tobi666/backend'
                    bat 'docker push tobi666/frontend'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
