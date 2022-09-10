# Community Connect Prototype (skip all docker commands for now)

## Required Services
- [Git](https://git-scm.com/downloads)
- [Node v16.13.0](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Python](https://www.python.org/downloads/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/) only if you're using Linux
- [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/)
- [PostgreSQL 13+](https://www.postgresql.org/download/) (Open PG Admin and set the password to 'postgres')

## Structure of the project
- Postgres database
- [Django Rest Framework](https://www.django-rest-framework.org/) backend which is a rest api Note: it is different from default Django tools 
- [Nextjs](https://nextjs.org/docs) / [React](https://reactjs.org/docs/getting-started.html) Front-end
- Frontend and Backend are connected using a javascript library called [axios](https://axios-http.com/docs/instance)
- Docker is used to containerize and deploy

highly recommend to look throught the documentation and understand tools as a beginner 
### Service installation guides for:
| [MacOS](/docs/MacOS-Installation.md) | [Windows](/docs/Windows-Installation.md) | [Linux](/docs/Linux-Installation.md) |

## Running Project Locally
Once you've installed all of the required services, open a **Terminal Window** and follow these instructions:

#### 1. Clone the repository

```
HTTPS
$ git clone https://github.com/fiu-rdflab-communityconnect/Community-Connect.git

SSH
$ git clone git@github.com:fiu-rdflab-communityconnect/Community-Connect.git
```

#### 2. Navigate to the project's root directory (i.e. where package.json, docker-compose.yml, and .dockerignore files are located)

```
$ cd Community-Connect
```

#### 3. Install node dependencies for the Frontend

```
$ yarn front:i
```

### Windows Backend Installation Instructions
#### 4. Create a virtual environment for the backend.
```
$ cd backend
$ py -m venv VE
```

#### 5. Activate the virtual environment.
```
$ VE\Scripts\activate
```

#### 6. Install the dependencies in the environment.

```
$ py -m pip install -r requirements.txt
$ py -m pip install TK
```

If it tells you that you are missing a module, install that module using python.

#### 7. Migrate the database models.

```
$ py manage.py makemigrations
$ py manage.py migrate
```

#### Mac/Linux Backend Installation Instructions

#### 4. Create a virtual environment for the backend.

```
$ cd backend/
$ python3 -m venv VE
```

#### 5. Activate the virtual environment.

```
$ source VE/bin/activate
```

#### 6. Install the dependencies in the environment.

```
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install TK
```

If it tells you that you are missing a module, install that module using python.

#### 7. Migrate the database models.

```
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```

## Running the project locally (from the root directory, no environment)

### Running the frontend

```
$ cd frontend
$ npm run dev
```

### Running the backend

#### Windows
```
$ cd backend
$ VE\Scripts\activate
$ py manage.py runserver
```

#### Mac
```
$ cd backend/
$ source VE/bin/activate
$ python3 manage.py runserver
```

## Deployment through Ocelot using docker

This section was the old method of testing the backend, but it is now only in use for deployment.

#### 4. Build the docker image (skip for now)
```
$ docker-compose build
```

#### 5. Make and migrate database models
```
This builds the DB models:
$ docker-compose run web python manage.py makemigrations

After the top command finishes executing, run the following:
$ docker-compose run web python manage.py migrate
```

#### 6. Create an admin user for the Backend (skip for now)
```
$ docker-compose run web python manage.py createsuperuser
```
- You will be prompted to create an account with a username, email (not necessary), and password. 

#### 7. Change your Windows settings/MacOs settings in your host file (skip for now)
```
This change will change the web url community-connect.fiu.edu to your local machine

Run Notepad as an administrator

Windows directory: MainDrive (exmp C:):\Windows\System32\drivers\etc\hosts

Open it as a notepad and at the bottom of the file add:

127.0.0.1 community-connect.fiu.edu

MacOs directory: open terminal and type

$ sudo nano /etc/hosts

At the end of the file add 

127.0.0.1 community-connect.fiu.edu

then click control + X to save and press y and enter and then enter again to accept changes and save the file

```

#### 8. Run the project (skip docker commands)

```
To run with live logs: (skip)
$ docker-compose up

To run in detached mode (no logs): (skip)
$ docker-compose up -d

To run backend server:
    cd Community-Connect\backend python manage.py runserver

To run frontend:
    cd Community-Connect\frontend npm run dev
```

- Once completed, you should be able to go to http://localhost:3000 and view the website
- You can also go to http://localhost:8000/admin to access the admin page of the backend service

***Note:** It may take several seconds to load the first page.

#### 9. Shutting down the project
If you're running the project with the live logs, you can press `CTRL+C` to shutdown the project, followed by entering the following command:
```
This will remove all declared and anonymous volumes that were attached to the containers
$ docker-compose down -v
```
- If you're running in detached mode, just run command above in the root directory of the project

## Setting up the Backend Development Environment (Outdated)
This section is only necessary if you are working in the Backend so you can get IntelliSense support from the used libraries.

#### 1. Install pipenv
```
On Linux and Windows, run:
$ pip3 install pipenv

On MacOS, run:
$ brew install pipenv
```

#### 2. Enter the shell environment
```
$ pipenv shell
```

#### 3. Installing all required packages
```
$ pip3 install -r backend/requirements.txt
```
