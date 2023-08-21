pipeline {
    agent { docker { image 'maven:3.9.3-eclipse-temurin-17-alpine' } }

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