// src/components/FAQ.js
import React from 'react';

function FAQ() {
  return (
    <div style={styles.container}>
      <h2>FAQ - Code Pipeline</h2>

      <div style={styles.faqItem}>
        <h3>What is a Code Pipeline?</h3>
        <p>
          A Code Pipeline is a series of steps that automate the process of moving your code from version control to production. It is an integral part of CI/CD (Continuous Integration and Continuous Deployment) that automates building, testing, and deploying your code.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>Why is it important to automate CI/CD?</h3>
        <p>
          Automating CI/CD pipelines ensures consistency, faster development cycles, and higher-quality code releases. It reduces human error, allows teams to deploy more frequently, and ensures that code is always tested before it reaches production.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>What are the common tools used in a Code Pipeline?</h3>
        <p>
          Code Pipelines use various tools for each stage. Here are some common ones:
          <ul>
            <li><strong>Version Control:</strong> GitHub, GitLab, Bitbucket</li>
            <li><strong>Build Tools:</strong> AWS CodeBuild, Jenkins, Docker</li>
            <li><strong>Testing Tools:</strong> SonarQube, Trivy, Maven</li>
            <li><strong>Deployment Tools:</strong> ECS, EKS, CodeDeploy</li>
          </ul>
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>What is the difference between CI and CD?</h3>
        <p>
          <strong>CI (Continuous Integration)</strong> is the practice of frequently merging all developer working copies to a shared mainline. It focuses on automatically building and testing the code to ensure changes don’t break anything.
          <br />
          <strong>CD (Continuous Deployment)</strong> is an extension of CI. Once the code passes all tests, it is automatically deployed to production without manual intervention.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>Can I use a Code Pipeline for multiple environments?</h3>
        <p>
          Yes, Code Pipelines can be configured to deploy to different environments such as development, staging, and production. You can add manual approval steps or conditional stages to manage the deployment process for different environments.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>What are artifacts in a pipeline?</h3>
        <p>
          An artifact is the output produced by the build stage that is passed on to the subsequent stages. This could be a compiled file, a Docker image, or any other build result. Artifacts are essential in CI/CD because they serve as the deliverables for testing and deployment stages.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h3>What are the benefits of using a Code Pipeline?</h3>
        <ul>
          <li>Automation: Reduces manual tasks and increases productivity.</li>
          <li>Consistency: Ensures the same steps are followed each time, reducing the likelihood of errors.</li>
          <li>Faster Delivery: Continuous integration and delivery enable faster releases.</li>
          <li>Quality Assurance: Automated testing and security scanning ensure better code quality.</li>
          <li>Scalability: Code Pipelines can scale to handle multiple environments and services.
          </li>
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
  faqItem: {
    marginBottom: '15px',
  },
};

export default FAQ;
