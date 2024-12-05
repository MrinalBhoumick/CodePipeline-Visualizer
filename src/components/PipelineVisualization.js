import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

// Pipeline Steps
const pipelineSteps = [
  {
    name: 'Source',
    description: 'Code is pushed to version control systems like GitHub, BitBucket, or GitLab.',
    details: 'The Source stage listens for changes in your version control system (VCS). Once a commit or pull request is made, the pipeline is triggered automatically to fetch the latest code.',
    useCase: 'Used in almost all development environments where code is stored in a VCS like GitHub or GitLab.',
    tools: ['GitHub', 'BitBucket', 'GitLab'],
    icon: <FaGithub />,
  },
  {
    name: 'Build',
    description: 'Code is built using tools like AWS CodeBuild or Jenkins.',
    details: 'The Build stage takes the source code and compiles it. It might include compiling code, bundling resources, and creating artifacts for deployment.',
    useCase: 'Most commonly used in cloud-native applications and microservices, where the code must be packaged before being deployed.',
    tools: ['AWS CodeBuild', 'Jenkins', 'Travis CI', 'CircleCI'],
    icon: <FaCode />,
  },
  {
    name: 'Test',
    description: 'Automated tests are run to ensure the code is functional, secure, and of high quality.',
    details: 'The Test stage runs several types of tests: unit tests, integration tests, security tests, and performance tests.',
    useCase: 'Used to validate that the code works as expected and to catch bugs and vulnerabilities early.',
    tools: ['SonarQube', 'Trivy', 'Selenium', 'JUnit'],
    icon: <FaLaptopCode />,
  },
  {
    name: 'Deploy',
    description: 'The code is deployed to production or staging environments using tools like ECS, EKS, or CodeDeploy.',
    details: 'The Deploy stage handles the actual deployment of the build artifacts to cloud infrastructure.',
    useCase: 'Used to automate the deployment of applications, reducing the need for manual intervention and ensuring consistency across environments.',
    tools: ['AWS CodeDeploy', 'AWS ECS', 'AWS EKS', 'Kubernetes'],
    icon: <FaRocket />,
  },
];

const PipelineVisualization = () => {
  const [activeStage, setActiveStage] = useState(null);

  // Animated style for pipeline connection
  const lineAnimation = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 2000 },
  });

  // Handle clicking on a stage to show details
  const handleStageClick = (stage) => {
    setActiveStage(stage);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366' }}>CI/CD Pipeline Visualization</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>Understand the Flow of Code Through the Pipeline</p>

      {/* Displaying pipeline steps */}
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {pipelineSteps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.6, duration: 0.5 }}
            style={{
              width: '220px',
              margin: '20px',
              padding: '20px',
              backgroundColor: '#0073e6',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transform: 'scale(1)',
              transition: 'transform 0.2s ease-in-out',
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleStageClick(step)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{step.icon}</div>
            <h4 style={{ fontSize: '1.5rem' }}>{step.name}</h4>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animate the connection line */}
      <div style={{ marginTop: '40px', position: 'relative', height: '20px' }}>
        <animated.div
          style={{
            ...lineAnimation,
            height: '5px',
            backgroundColor: '#0073e6',
            position: 'absolute',
            top: '50%',
            left: '0',
            borderRadius: '5px',
          }}
        />
      </div>

      {/* Display detailed info about the current active stage */}
      {activeStage && (
        <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '2rem', color: '#003366' }}>Learn About the {activeStage.name} Stage</h3>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}><strong>Description:</strong> {activeStage.details}</p>
          <p style={{ fontSize: '1.2rem' }}><strong>Use Case:</strong> {activeStage.useCase}</p>
          <p style={{ fontSize: '1.2rem' }}><strong>Tools:</strong> {activeStage.tools.join(', ')}</p>
        </div>
      )}

      {/* Use Cases and Benefits */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#003366' }}>Real-World Use Cases for CI/CD Pipeline</h3>
        <ul style={{ textAlign: 'left', listStyleType: 'circle', marginTop: '20px', padding: '0 20px' }}>
          <li><strong>Continuous Integration:</strong> Automatically integrating code changes into the main branch, running tests, and detecting bugs early.</li>
          <li><strong>Continuous Delivery/Deployment:</strong> Ensuring that code changes can be automatically deployed to production or staging environments, reducing manual intervention.</li>
          <li><strong>Automated Testing:</strong> Running tests in every pipeline cycle, ensuring that the code is bug-free and secure before it is released.</li>
          <li><strong>Cloud-Native Applications:</strong> Ideal for managing deployments to cloud-based platforms like AWS ECS, EKS, and Lambda.</li>
        </ul>

        <h3 style={{ fontSize: '1.8rem', color: '#003366' }}>Benefits of Using CI/CD Pipeline</h3>
        <ul style={{ textAlign: 'left', listStyleType: 'circle', marginTop: '20px', padding: '0 20px' }}>
          <li><strong>Faster Releases:</strong> Automating the build, test, and deploy processes allows teams to release software more frequently and with higher confidence.</li>
          <li><strong>Improved Quality:</strong> Automated testing ensures that defects are detected early in the process, reducing the risk of bugs in production.</li>
          <li><strong>Consistency:</strong> Automation ensures that the same steps are followed for every deployment, reducing errors and improving reproducibility.</li>
          <li><strong>Cost Efficiency:</strong> By automating tasks, developers can focus more on coding and less on manual processes, improving overall productivity.</li>
        </ul>
      </div>
    </div>
  );
};

export default PipelineVisualization;
