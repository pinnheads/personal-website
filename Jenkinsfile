pipeline {
    agent any

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    environment {
        APP_NAME = 'personal-website'
        VERSION = "1.0.${env.BUILD_NUMBER}"
        CLOUDFLARE_API_TOKEN = credentials('CLOUDFLARE_API_TOKEN')
        CLOUDFLARE_ACCOUNT_ID = credentials('CLOUDFLARE_ACCOUNT_ID')
        CLOUDFLARE_PROJECT_NAME = 'personal-website'
        DEPLOY_ENV = "${env.BRANCH_NAME == 'main' ? 'production' : 'preview'}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Checking out ${env.APP_NAME} v${env.VERSION} on branch ${env.BRANCH_NAME}"
            }
        }
        stage('Install') {
            steps {
                script {
                    docker.image('node:22-alpine').inside {
                        sh 'npm ci'
                    }
                }
            }
        }
        stage('Quality Checks') {
          steps {
              echo 'Running npm security audit...'
              script {
                  docker.image('node:22-alpine').inside {
                      sh 'npm audit --audit-level=high || true'
                  }
              }
          }
        }
        stage('Build & Deploy') {
            steps {
                echo "Deploying ${env.APP_NAME} v${env.VERSION} to ${env.DEPLOY_ENV} (branch: ${env.BRANCH_NAME})..."
                script {
                    def wranglerArgs = "--project-name=$CLOUDFLARE_PROJECT_NAME --branch=${env.BRANCH_NAME}"
                    if (env.BRANCH_NAME == 'main') {
                        wranglerArgs += " --commit-dirty=true"
                    }
                    docker.image('node:22-alpine').inside("-e CLOUDFLARE_API_TOKEN=${env.CLOUDFLARE_API_TOKEN} -e CLOUDFLARE_ACCOUNT_ID=${env.CLOUDFLARE_ACCOUNT_ID}") {
                        sh "npm run build --if-present && npx wrangler pages deploy ./dist ${wranglerArgs}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo "${env.APP_NAME} v${env.VERSION} deployed to ${env.DEPLOY_ENV} successfully!"
        }
        failure {
            echo "Pipeline failed at build ${env.BUILD_NUMBER}"
        }
        always {
            cleanWs()
        }
    }
}
