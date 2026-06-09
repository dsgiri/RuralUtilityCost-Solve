# Solve | Rural Utility Cost

**Solve** (solve.ruralutilitycost.com) is the IoT & Automation cost estimation hub for the **Rural Utility Cost** ecosystem. It provides decision-oriented calculation tools to estimate total cost of ownership (combining CapEx and OpEx) for agricultural automation, rural IoT deployments, and hardware connected via cellular or satellite networks.

## Features
- **IoT Calculator Hub:** Estimate physical infrastructure and recurring connectivity costs.
- **TCO Modeling:** Separate capital expenses from operational expenses over a 5–10 year hardware lifecycle.
- **Client-Side Processing:** All inputs and calculations are performed locally in your browser for data privacy.
- **Responsive Interface:** Minimalist, high-performance UI tailored for desktop and mobile tracking.

## Local Development

### Prerequisites
- Node.js 18+ (or compatible version)
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dsgiri/RuralUtilityCost-solve.git
   cd RuralUtilityCost-solve
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   If the application requires configuration in the future, copy `.env.example` to `.env` and fill in the required values. (Currently, the app relies purely on client-side logic without mandatory third-party credentials).

4. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:3000` (or another available port depending on your environment config).

## Build & Deployment

To generate a production-ready application:

```bash
npm run build
```

This will create an optimized, static output in the `dist` folder.

To preview the built app locally:
```bash
npm run preview
```

### Deployment
This repository is configured natively for generic static site hosting like Google Cloud Storage, Cloud Run (via static serving), Vercel, Netlify, or Firebase Hosting. Point your build settings to the `dist` directory and the `npm run build` command.

## Related Rural Utility Cost Links

The Rural Utility Cost platform consists of multiple specialized subdomains. 

- **Primary Platform:** [ruralutilitycost.com](https://ruralutilitycost.com)
- **Ecosystem Directory:** [ruralutilitycost.com/portfolio](https://ruralutilitycost.com/portfolio)
- **Solve Repository:** [github.com/dsgiri/RuralUtilityCost-solve](https://github.com/dsgiri/RuralUtilityCost-solve)

### Closely Related Subdomains
- **Predictor:** [predictor.ruralutilitycost.com](https://predictor.ruralutilitycost.com) (Predictive analytics for rural costs)
- **WhatIf:** [whatif.ruralutilitycost.com](https://whatif.ruralutilitycost.com) (Scenario modeling and what-if analysis)
- **Grid:** [grid.ruralutilitycost.com](https://grid.ruralutilitycost.com) (Power, energy, and electrical grid modeling)
- **Forecast:** [forecast.ruralutilitycost.com](https://forecast.ruralutilitycost.com) (Long-range financial planning)

---

*Part of the [Rural Utility Cost](https://ruralutilitycost.com) Ecosystem.*
