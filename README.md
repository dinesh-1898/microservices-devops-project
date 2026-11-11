\# Microservices DevOps Project



\## Author

Dinesh



\## GitHub Repository

https://github.com/dinesh-1898/microservices-devops-project



\## Project Overview

This project demonstrates an end-to-end DevOps implementation for a three-microservice application consisting of:



\- User Service

\- Product Service

\- Order Service



The project automates containerization, infrastructure provisioning, CI/CD, deployment, monitoring and troubleshooting using AWS and DevOps tools.



\## AWS Details



Region: us-east-1



EC2 Instance:

devops-server



IAM Role:

EC2-ECR-ROLE



AWS Account ID:

844632828058



\## Tools Used



\- GitHub

\- Jenkins

\- Docker

\- Docker Compose

\- Terraform

\- AWS EC2

\- AWS ECR

\- Prometheus

\- Grafana

\- Nginx



\## Infrastructure



Provisioned Resources:



\- EC2 Instance

\- Amazon ECR Repositories

&#x20; - user-service

&#x20; - product-service

&#x20; - order-service

\- Security Group

\- IAM Role



\## CI/CD Workflow



GitHub

→ Jenkins

→ Docker Build

→ Amazon ECR

→ EC2 Deployment



\## Docker Deployment



Services:



\- User Service

\- Product Service

\- Order Service



Deployment Tool:



\- Docker Compose



Reverse Proxy:



\- Nginx



\## Terraform



Terraform was used to:



\- Create Amazon ECR repositories

\- Manage infrastructure configuration

\- Generate reusable outputs



Commands used:



terraform init

terraform validate

terraform plan

terraform apply



\## Monitoring



Monitoring Stack:



\- Prometheus

\- Node Exporter

\- Grafana



Dashboard Metrics:



\- Service Availability

\- Server Status

\- System Metrics



\## Troubleshooting



Issue:



EC2 Instance Status Check Failed



Root Cause:



Out of memory condition caused by Jenkins Java process on a t3.micro instance.



Evidence:



Out of memory: Killed process (java)



Resolution:



\- Stopped unnecessary services

\- Restarted monitoring containers

\- Upgraded EC2 instance from t3.micro to t3.small

\- Verified service recovery



\## Project Status



Completed:



\- GitHub Repository Setup

\- Docker Container

