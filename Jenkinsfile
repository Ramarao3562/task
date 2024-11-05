pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/username/task-tracker.git'
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
                bat 'scp -r ./build username@yourserver:/path/to/deploy'
                bat 'ssh username@yourserver "pm2 restart task-tracker"'
            }
        }
    }
}