pipeline {
    agent any

    environment {
        mavenHome = tool 'jenkins-maven'
    }

    tools {
        jdk 'java-17'
        maven 'jenkins-maven'
    }

    stages {
        stage('Build') {
            steps {
                withMaven(
                    maven: 'jenkins-maven'
                ) {
                    bat "mvn clean install -DskipTests"
                }
            }
        }

        stage('Test') {
            steps {
                echo "Testing..."
            }
        }
    }

}