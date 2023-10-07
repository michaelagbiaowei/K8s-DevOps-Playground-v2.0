### **Project Overview**

This project involves the containerization of a Node.js Express web application using a Docker. I orchestrated this deployment using Terraform to deploy the application into a Kubernetes KIND (Kubernetes in Docker) cluster.

To ensure the application's availability and performance, I implemented robust monitoring and alerting mechanisms. Prometheus, Grafana, and Alertmanager have been integrated into the Kubernetes cluster to continuously monitor the application and infrastructure.

Ansible plays a crucial role in automating and streamlining the entire deployment process. It handles tasks such as configuring the Kubernetes cluster, deploying the Dockerized Node.js app, and setting up the monitoring and alerting stack.

The result is a highly scalable, containerized web application that runs on Kubernetes, with real-time monitoring and alerting to ensure optimal performance and reliability.

This project involves the deploying of a Node.js Express web application using a Docker, KIND, and Terraform. It utilizes Ansible for automation and integrates Prometheus, Grafana, and Alertmanager for robust monitoring and alerting within the Kubernetes environment, ensuring the application's reliability and performance.

**Run `make install `to install ansible on host machine**

**Run `make deploy` from ansible directory to deploy Application to remote machine(s)**