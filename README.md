# 💰 Monetize

A comprehensive personal finance management application that empowers users to take control of their financial future. Track your spending and income, set personalized budgets, and achieve your savings goals with an intuitive and user-friendly interface.

## ✨ Features

- **📊 Financial Tracking**: Monitor your income and expenditures with detailed categorization
- **🎯 Savings Goals**: Set and track progress toward your financial objectives
- **💳 Budget Management**: Create and maintain personalized spending budgets
- **📈 Interactive Dashboard**: Visualize your financial data with comprehensive charts and metrics
- **🚀 Guided Walkthrough**: Step-by-step setup process for new users
- **📱 Responsive Design**: Optimized for both desktop and mobile experiences

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js 13](https://nextjs.org/) with React 18
- **Language**: TypeScript
- **Styling**: [Material-UI (MUI)](https://mui.com/) with SCSS modules
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Testing**: Jest + Cypress for comprehensive testing coverage

### Backend
- Currently in development

### Development Tools
- **Linting**: ESLint with custom configuration
- **Git Hooks**: Husky for pre-commit and pre-push automation
- **CI/CD**: Jenkins pipeline with automated testing
- **Code Quality**: SonarQube integration for static analysis

## 🚀 Getting Started

### Prerequisites

- Node.js 20.0.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ganak004/monetize.git
   cd monetize
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Setup git hooks**
   ```bash
   chmod ug+x .husky/*
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Development

#### Frontend Development
```bash
cd frontend

# Start development server
npm run dev

# Run linting
npm run lint

# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:unit

# Run end-to-end tests
npm run cy:open  # Interactive mode
npm run cy:run   # Headless mode

# Run all tests (lint + unit + e2e)
npm run test:all

# Build for production
npm run build
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
monetize/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── pages/           # Next.js pages and routing
│   │   │   ├── dashboard/   # Main dashboard components
│   │   │   ├── walkthrough/ # User onboarding flow
│   │   │   └── api/         # API routes
│   │   ├── redux/           # State management
│   │   ├── utils/           # Utility functions and types
│   │   ├── styles/          # Global styles and themes
│   │   └── context/         # React context providers
│   ├── cypress/             # E2E test specifications
│   └── public/              # Static assets
├── backend/                 # Backend API (in development)
├── .husky/                  # Git hooks configuration
├── Jenkinsfile             # CI/CD pipeline configuration
└── sonar-project.properties # Code quality configuration
```

## 🧪 Testing

The project includes comprehensive testing coverage:

- **Unit Tests**: Jest with React Testing Library
- **End-to-End Tests**: Cypress for full user journey testing
- **Code Coverage**: Automated coverage reporting
- **Linting**: ESLint for code quality and consistency

Run the complete test suite:
```bash
cd frontend
npm run test:all
```

## 🔄 Development Workflow

### Git Hooks
Pre-push hooks automatically run:
- ESLint for code quality
- Jest unit tests
- Type checking

### CI/CD Pipeline
The Jenkins pipeline automatically:
1. Checks out the latest code
2. Installs dependencies
3. Runs the complete test suite
4. Builds the application
5. Performs SonarQube code analysis

## 🎯 Key Application Flows

1. **User Onboarding**: Interactive walkthrough to set up financial goals
2. **Income/Expenditure Tracking**: Easy input and categorization of transactions
3. **Savings Goal Management**: Create, track, and achieve financial objectives
4. **Dashboard Analytics**: Comprehensive view of financial health and progress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes all tests and follows the established coding standards.

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- [Project Repository](https://github.com/ganak004/monetize)
- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
