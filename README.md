# School'R

School'R is a collaborative learning platform prototype built during the early COVID-19 learning shift, when many families suddenly needed more tools to support learning at home.

Created as a student-led side project alongside coursework, School'R explored how parents and children could engage with educational projects together through a shared platform. The application combines project sharing, role-based user flows, and interactive educational games to support home learning more collaboratively.

## Project Type

Team Awesome collaboration  
Student-led side project developed alongside coursework during a temporary pause in learning curriculum.

## Overview

School'R was designed around three main ideas:

- Parents Sharing Educational Projects and Ideas
- Children Accessing a Separate Learning Experience
- Interactive Tools Supporting Learning through Play

The prototype includes:

- Role-Based Routing
- Parent and Child Dashboards
- Project CRUD Workflows
- News Feed/Project Display
- Interactive Educational Games

## My Role

This was a collaborative team project, and I served as the project organizer and frontend architecture lead.

My contributions included:

- Organizing and Maintaining the GitHub Frontend Codebase
- Helping Define the Application Structure and Feature Flow
- Delegating Work Based on Teammate Strengths and Interests
- Pair Programming to Unblock Development
- Guiding Teammates Through Redux Concepts and Application State Flow
- Translating Vanilla JavaScript Game Logic Into React Component Logic Using Local State
- Supporting Integration of Features Into One Shared React Application

## Team Collaboration

This project also served as a learning environment for the team.

We used pair programming, shared documentation reading, and collaborative debugging sessions to deepen understanding of:

- React
- Redux
- Reactstrap
- Styled-Components
- Component Composition
- State-Driven UI Behavior

## Child Safety Design Considerations

Because the platform involved children, the prototype included an early structural safeguard.

Children were intended to be enrolled by a parent rather than independently joining the platform. The application also separated the children’s experience from the adult-facing project-sharing experience.

This was designed as an initial protective layer so that:

- Children remained in a distinct learning space
- Adult and child interaction was not mixed directly
- Future development could build on stronger moderation and safety controls

## Technical Stack

- React
- React Router
- Redux
- Redux Thunk
- Axios
- Reactstrap
- Styled Components
- Bootstrap
- json-server/Mock API Workflows

## Features

- Parent Dashboard
- Kids Dashboard
- Protected Routes
- Registration and Login Flows
- Project Feed/News Feed
- Add and Edit Project Forms
- Flash Card Game
- Memory Matching Game
- Rock Paper Scissors Game

## Running the Project Locally

### Prerequisites

- Node.js
- npm or yarn

### Install Dependencies

Choose one: `npm install` or `yarn`

### Start the Mock API

Run `npm run mock:api` or `yarn mock:api`

This starts the mock API used for CRUD operations through the local `db.json` workflow.

### Start the React App

In a separate terminal, run `npm start` or `yarn start`

### Notes

- If the UI loads but project data is missing, confirm the mock API is running.
- If a port conflict occurs, update the script in `package.json` or stop the conflicting process.
- If CRUD changes do not appear, verify that the local mock API process started successfully.

## Technical Challenge

One of the most memorable challenges in the project was translating a vanilla JavaScript Rock Paper Scissors game into React.

While rebuilding the game logic in React, the scoreboard repeatedly rendered one step behind, even though the `console.log()` output looked correct. That debugging process became an important learning moment in understanding React state timing, stale state, and render behavior.

## Why This Project Matters

School'R is an important portfolio project because it demonstrates:

- Collaborative Frontend Architecture  
- Role-Based Application Design  
- Concept Translation through Pair-Programming  
- Early Product Thinking around Learning, Safety, and Usability  
- Hands-On Growth in React State Management and Component Structure  

## Credits

*School'R was created as a collaborative side project by members of Team Awesome during the Lambda School / BloomTech learning environment.*
