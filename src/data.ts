import { Tool, Category } from './types';

export const categories: Category[] = [
  { id: 'iot-app-cost', name: 'IoT app cost', description: 'Estimate costs for custom Internet of Things software.' },
  { id: 'automation-project', name: 'Automation project cost', description: 'Budget for end-to-end automation deployments.' },
  { id: 'sensor-device', name: 'Sensor / device budgeting', description: 'Plan capital expenditures for hardware fleets.' },
  { id: 'integration', name: 'Integration cost', description: 'Forecast costs for connecting systems and APIs.' },
  { id: 'cloud-connectivity', name: 'Cloud / connectivity cost', description: 'Model ongoing data and server expenses.' },
  { id: 'maintenance', name: 'Maintenance / support cost', description: 'Anticipate long-term operating costs.' },
  { id: 'tco', name: 'Total cost of ownership', description: 'Calculate the comprehensive lifespan cost.' },
  { id: 'build-vs-buy', name: 'Build vs buy', description: 'Compare custom development against commercial solutions.' }
];

export const tools: Tool[] = [
  {
    id: 'iot-app-cost-calculator',
    title: 'IoT App Cost Calculator',
    description: 'Estimate software development costs for farm and rural IoT applications.',
    category: 'IoT app cost',
    primaryOutcome: 'Estimated Build Cost'
  },
  {
    id: 'automation-budget-estimator',
    title: 'Automation Project Budget Estimator',
    description: 'Structure your financial plan for major automation deployments.',
    category: 'Automation project cost',
    primaryOutcome: 'Project Budget Baseline'
  },
  {
    id: 'sensor-network-cost',
    title: 'Sensor Network Cost Calculator',
    description: 'Calculate the upfront capital required for sensors, gateways, and field hardware.',
    category: 'Sensor / device budgeting',
    primaryOutcome: 'Hardware Cost Estimate'
  },
  {
    id: 'connectivity-cloud-cost',
    title: 'Connectivity and Cloud Cost Estimator',
    description: 'Forecast recurring monthly costs for cellular/LoRaWAN plans and cloud servers.',
    category: 'Cloud / connectivity cost',
    primaryOutcome: 'Monthly OPEX'
  },
  {
    id: 'maintenance-cost-planner',
    title: 'Maintenance Cost Planner',
    description: 'Plan for break-fix, spare parts, and technician labor over time.',
    category: 'Maintenance / support cost',
    primaryOutcome: 'Annual Maintenance Run Rate'
  },
  {
    id: 'build-vs-buy-comparison',
    title: 'Build vs Buy Comparison Tool',
    description: 'Objectively compare building your own solution versus licensing a SaaS platform.',
    category: 'Build vs buy',
    primaryOutcome: 'Optimal Strategy Recommendation'
  },
  {
    id: 'tco-calculator',
    title: 'Total Cost of Ownership Calculator',
    description: 'Understand the true 5-to-10 year cost of your technology investments.',
    category: 'Total cost of ownership',
    primaryOutcome: '5-Year Lifecycle Cost'
  },
  {
    id: 'smart-farm-roi',
    title: 'Smart Farm ROI Estimator',
    description: 'Project financial returns from yield improvements and labor reduction.',
    category: 'Automation project cost',
    primaryOutcome: 'Estimated Payback Period'
  }
];
