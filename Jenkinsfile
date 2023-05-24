pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ganak004/monetize' // Replace with your repository URL
            }
        }
        stage('Build') {
            steps {
                sh 'cd frontend'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:all'
            }
        }
    }
}
