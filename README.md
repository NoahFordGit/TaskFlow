# TaskFlow

TaskFlow is a full-stack task management application designed to help users organize, prioritize, and track their tasks.

The project is being built as a personal full-stack development project, with a focus on learning and applying modern frontend and backend development practices.

## Features

### Current Features

* Create tasks
* View all tasks
* View individual tasks
* Update tasks
* Delete tasks
* Mark tasks as completed
* Assign task priorities
  * Low
  * Medium
  * High
* Set task due dates
* Store task data in PostgreSQL
* REST API for task management
  
## Tech Stack

### Frontend

* **React** - UI library for building the application interface
* **TypeScript** - Static typing for JavaScript
* **Tailwind CSS** - Utility-first CSS framework for styling
* **Vite** - Frontend development server and build tool

### Backend

* **Python** - Backend programming language
* **FastAPI** - Web framework used to build the REST API
* **SQLAlchemy** - ORM used to interact with the database
* **Pydantic** - Data validation and API schemas

### Database

* **PostgreSQL** - Relational database used to store application data

### Development Tools

* **Git** - Version control
* **GitHub** - Source code hosting and project management
* **npm** - Frontend package management
* **Python virtual environments** - Backend dependency isolation

## API

The backend exposes a REST API for interacting with tasks.

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/tasks/`          | Get all tasks       |
| GET    | `/tasks/{task_id}` | Get a specific task |
| POST   | `/tasks/`          | Create a task       |
| PATCH  | `/tasks/{task_id}` | Update a task       |
| DELETE | `/tasks/{task_id}` | Delete a task       |

## Running Locally

### Prerequisites

* Python 3.11+
* Node.js
* PostgreSQL

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Vite will provide the URL for the frontend.

### Environment Variables

Create a `.env` file in `backend/`:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/taskflow
```


## License

This project is currently intended as a personal learning and portfolio project.
