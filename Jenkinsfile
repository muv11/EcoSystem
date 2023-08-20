pipeline {
    agent any

    environment {
        mavenHome = tool 'jenkins-maven'
    }

    tools {
        jdk 'java-17'
    }

    stages {
        stage('Build') {
            steps {
                withMaven(
                    maven: 'jenkins-maven'
                ) {
                    sh "mvn clean install -DskipTests"
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