// src/components/Concepts.js
import React from 'react';

function Concepts() {
  return (
    <div style={styles.container}>
      <h2>Key Concepts of Code Pipeline</h2>
      <p>
        A Code Pipeline is a fully automated CI/CD workflow that helps developers automatically move their code through build, test, and deployment phases.
        The following are the major concepts that form the backbone of a modern CI/CD pipeline.
      </p>
      <div style={styles.section}>
        <h3>Source</h3>
        <p>
          The Source stage is the first stage in a Code Pipeline. It is responsible for getting the latest code from a version control system.
          The pipeline can be triggered when a developer commits changes to the repository. The source can be any of the following:
        </p>
        <ul>
          <li><strong>GitHub:</strong> A popular web-based hosting service for Git repositories, enabling version control, issue tracking, and collaboration.</li>
          <li><strong>BitBucket:</strong> A Git-based source control platform offering both cloud-hosted and on-premise solutions for software teams.</li>
          <li><strong>GitLab:</strong> A web-based Git repository manager offering source control, CI/CD pipelines, and collaborative development.</li>
        </ul>
        <p>
          The Source stage essentially fetches the latest changes from the version control system to start the build process.
        </p>
      </div>

      <div style={styles.section}>
        <h3>Build</h3>
        <p>
          The Build stage is where the code is compiled, packaged, and prepared for deployment. The code is transformed into an artifact that can be deployed to different environments.
          Some of the key tools used during this stage are:
        </p>
        <ul>
          <li><strong>AWS CodeBuild:</strong> A fully managed build service that compiles source code, runs tests, and produces build artifacts.</li>
          <li><strong>Jenkins:</strong> An open-source automation server used to automate repetitive tasks such as building, testing, and deploying code.</li>
          <li><strong>Docker:</strong> A tool used to create, deploy, and run applications in containers, ensuring consistency across various environments.</li>
        </ul>
        <p>
          CodeBuild or Jenkins will take the code fetched from the source stage, run tests, and produce the necessary build artifacts such as a Docker image or a JAR file ready for deployment.
        </p>
      </div>

      <div style={styles.section}>
        <h3>Test</h3>
        <p>
          The Test stage is where the code is validated. It's a critical part of the pipeline to ensure that no errors are present and that the code is secure and performs as expected.
          The test tools used during this phase may include:
        </p>
        <ul>
          <li><strong>SonarQube:</strong> A tool for continuous inspection of code quality to detect bugs, vulnerabilities, and code smells.</li>
          <li><strong>Trivy:</strong> A security scanner for container images, checking for vulnerabilities in the dependencies and OS packages of the image.</li>
          <li><strong>Maven:</strong> A build automation tool used primarily for Java projects to manage project dependencies and perform unit tests.</li>
        </ul>
        <p>
          This stage ensures that the code meets quality standards, is secure, and is ready for deployment.
        </p>
      </div>

      <div style={styles.section}>
        <h3>Deploy</h3>
        <p>
          The final stage of the pipeline is the Deployment stage. In this stage, the code is deployed to production or other environments like staging or development.
          The deployment tools used can include:
        </p>
        <ul>
          <li><strong>AWS ECS (Elastic Container Service):</strong> A fully managed container orchestration service to deploy, manage, and scale Docker containers.</li>
          <li><strong>AWS EKS (Elastic Kubernetes Service):</strong> A managed Kubernetes service that makes it easy to run Kubernetes clusters on AWS.</li>
          <li><strong>AWS CodeDeploy:</strong> A fully managed deployment service that automates the deployment of applications to various services like EC2, Lambda, and ECS.</li>
        </ul>
        <p>
          After the code passes all tests and quality checks, it gets deployed automatically to the desired environment.
        </p>
      </div>

      <div style={styles.section}>
        <h3>Other Key Concepts</h3>
        <p>
          Besides the primary stages, other important concepts in a Code Pipeline are:
        </p>
        <ul>
          <li><strong>Artifact:</strong> A build artifact is a file or set of files produced by the build stage that can be deployed.</li>
          <li><strong>Trigger:</strong> A trigger is an event that initiates a pipeline. For example, a commit to a GitHub repository can trigger the pipeline to start.</li>
          <li><strong>Approval:</strong> Sometimes, manual approval is required before deployment can proceed. This is useful for critical production deployments.</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'left',
  },
  section: {
    marginBottom: '20px',
  },
};

export default Concepts;
