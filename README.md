CI/CD Pipeline for Flask and Express Applications
📘 Overview

This project demonstrates the setup of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins for two applications — a Flask backend and an Express frontend.
The goal is to automate deployment so that every time new code is pushed to GitHub, Jenkins automatically pulls the changes, installs dependencies, and restarts both applications.

🎯 Objective

To automate the deployment of Flask and Express applications using Jenkins and PM2 on an AWS EC2 instance.

⚙️ Setup and Configuration
1. Install Jenkins

Jenkins was installed on an AWS EC2 Ubuntu instance.

Essential plugins installed:

Git Plugin (for source code integration)

NodeJS Plugin (for managing Node.js environments)

Python Plugin (for running Flask app-related commands)

2. Configure Jenkins Pipelines

Two pipelines were created in Jenkins:

Flask Backend Pipeline

Express Frontend Pipeline

Each pipeline uses its own Jenkinsfile, stored in the project repository.

3. Pipeline Stages

Both pipelines follow a similar structure:

Flask Pipeline

Checkout Code – Pulls the latest version from the GitHub repository.

Install Dependencies – Creates and activates a Python virtual environment and installs required packages from requirements.txt.

Restart Application – Uses PM2 to stop and restart the Flask service running via Gunicorn.

Express Pipeline

Checkout Code – Fetches the latest Express app code from GitHub.

Install Dependencies – Runs npm install to install required Node.js modules.

Restart Application – Uses PM2 to restart the Express server.

4. CI/CD Automation

A GitHub Webhook was configured to automatically trigger Jenkins pipelines whenever code is pushed to the repository.

This ensures continuous integration and deployment without manual intervention.

🧰 Tools & Technologies Used

AWS EC2 – Hosting environment for Jenkins and applications

Jenkins – CI/CD automation tool

PM2 – Process manager for Node.js and Python (Gunicorn) apps

GitHub – Version control and webhook integration

Python & Flask – Backend web framework

Node.js & Express – Frontend web framework

✅ Results

Both Flask and Express pipelines successfully automated deployment.

Jenkins builds completed with “SUCCESS” status.

Flask and Express applications were restarted automatically using PM2 after every Git push.

📝 Deliverables

Two Jenkins pipelines (for Flask and Express)

Jenkinsfiles for both applications

Working CI/CD automation proof (build logs and deployment success messages)

This README documentation