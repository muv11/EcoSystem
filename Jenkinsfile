pipeline {
    agent any

    tools {
        jdk 'java-17'
        maven 'jenkins-maven'
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/muv11/EcoSystem'
                sh "mvn clean install -DskipTests"
            }
        }

        stage('Test') {
            steps {
                echo "Testing..."
            }
        }
    }

}