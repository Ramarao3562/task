pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
               git url: 'https://github.com/Ramarao3562/task.git', branch: 'main', credentialsId: 'github-token'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Use 'bat' if on Windows
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'scp -r ./build achut@192.168.1.81:/var/www/myapp/'
                bat 'ssh achut@192.168.1.81 "pm2 restart task-tracker"'
            }
        }
    }
}
