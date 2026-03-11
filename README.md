# School'R

School'R is a collaborative learning platform prototype built during the early COVID-19 learning shift, when many families suddenly needed more tools to support learning at home.

Created as a student-led side project alongside coursework, School'R explored how parents and children could engage with educational projects together through a shared platform. The application combines project sharing, role-based user flows, and interactive educational games to support home learning more collaboratively.

## Project Type

Team Awesome collaboration  
Lambda School / Build Week-era side project developed during a temporary coursework pause

## Overview

School'R was designed around three main ideas:

- parents sharing educational projects and ideas
- children accessing a separate learning experience
- interactive tools supporting learning through play

The prototype includes:

- role-based routing
- parent and child dashboards
- project CRUD workflows
- news feed / project display
- interactive educational games

## My Role

This was a collaborative team project, and I served as the project organizer and frontend architecture lead.

My contributions included:

- organizing and maintaining the GitHub frontend codebase
- helping define the application structure and feature flow
- delegating work based on teammate strengths and interests
- pair programming to unblock development
- guiding teammates through Redux concepts and application state flow
- translating vanilla JavaScript game logic into React component logic using local state
- supporting integration of features into one shared React application

## Team Collaboration

This project also served as a learning environment for the team.

We used pair programming, shared documentation reading, and collaborative debugging sessions to deepen understanding of:

- React
- Redux
- Reactstrap
- styled-components
- component composition
- state-driven UI behavior

## Child Safety Design Considerations

Because the platform involved children, the prototype included an early structural safeguard.

Children were intended to be enrolled by a parent rather than independently joining the platform. The application also separated the children’s experience from the adult-facing project-sharing experience.

This was designed as an initial protective layer so that:

- children remained in a distinct learning space
- adult and child interaction was not mixed directly
- future development could build on stronger moderation and safety controls

## Technical Stack

- React
- React Router
- Redux
- Redux Thunk
- Axios
- Reactstrap
- Styled Components
- Bootstrap
- json-server / mock API workflows

## Features

- Parent dashboard
- Kids dashboard
- Protected routes
- Registration and login flows
- Project feed/news feed
- Add and edit project forms
- Flash card game
- Memory matching game
- Rock Paper Scissors game

## Running the Project Locally

### Prerequisites

- Node.js
- npm or yarn

## Install dependencies

Choose one:

**npm**
```bash
npm install
``` 
or

```
yarn
```

## Start the mock API
```
npm run mock:api
```
or
```
yarn mock:api
```

This starts the mock API used for CRUD operations through the local db.json workflow.

## Start the React app

In a separate terminal:
```
npm start
```
or
```
yarn start
```

## Notes

This repository represents the primary frontend application.

During development, CRUD behavior was supported through a mock API workflow.

Some planned backend structure was explored separately, but the strongest completed work in this project is the React frontend prototype.

## Technical Challenge

One of the most memorable challenges in the project was translating a vanilla JavaScript Rock Paper Scissors game into React.

While rebuilding the game logic in React, the scoreboard repeatedly rendered one step behind, even though console.log() output looked correct. That debugging process became an important learning moment in understanding React state timing, stale state, and render behavior.

## Why This Project Matters

School'R is an important portfolio project because it demonstrates:

-collaborative frontend architecture  
-role-based application design  
-concept translation through pair programming  
-early product thinking around learning, safety, and usability  
-hands-on growth in React state management and component structure  

### Credits

*School'R was created as a collaborative side project by members of Team Awesome during the Lambda School / BloomTech learning environment.*
