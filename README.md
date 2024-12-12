This is ProFile:

This project is a Portfolio Web Application designed to allow users to create personalized portfolios by filling in templates for work experience, skills, projects, and more. The application is built with modern web technologies and aims to deliver a seamless and secure user experience across both desktop and mobile platforms.

Features

User Authentication (WIP)

Future implementation includes two-factor authentication for enhanced security.

Portfolio Creation

Users can input personal information such as name, age, contact details, and other customizable fields.

Input boxes are dynamically adjustable to accommodate user needs.

Routing and Navigation

Configured using Angular’s app-routing.module.ts to allow seamless navigation between pages:

Home: Default landing page.

Portfolio Creation: Page to create and manage portfolios.

Import/Export: Page to import/export portfolio data.

Data Export

Postman is used for API testing, and XAMPP is used for database control.

Mobile Compatibility

Planned optimization for responsive views on both desktop and mobile devices.

Backend and Database

Database set up using XAMPP, with connections under development to address blank field issues.

PDF Generation

PDF Export functions 

Technologies Used

Frontend

AngularJS

HTML/CSS

JavaScript

Backend

Node.js (framework setup in progress)

XAMPP (for database control)

Tools

Postman (API testing)

GitHub (version control and code hosting)

Project Milestones

Sprint 1: Initial setup and basic functionality

Established Angular project environment.

Implemented routing and navigation.

Began database integration and API testing.

Sprint 2: Demo and additional features

Target demo completion: 11/5/24.

Focus on resolving current delays and enhancing export functionality.

Final Sprint: Completion and deployment

Project completion target: 12/10/24.

Includes mobile compatibility, two-factor authentication, and PDF generation.

Challenges

Troubleshooting database connection to ensure fields save properly.

Learning new technologies and balancing schedules outside of the project.

Project Management

Communication: Regular meetings every Tuesday and Thursday via Discord.

Progress Tracking: Gantt chart used to manage task completion.

How to Run the Application

Clone the repository:

git clone <repository-url>

Navigate to the project directory and install dependencies:

cd <project-folder>
npm install

Start the Angular development server:

ng serve

Access the application at http://localhost:4200/.

Future Plans

Complete backend integration and resolve database issues.

Finalize two-factor authentication and PDF export features.

Optimize the application for mobile devices.

Contributors

Collin: Team Leader

Chen: UI/UX Developer 

Paul: Front End Developer

Michael: Authentication/Export

API/Database: Danielle 
