# Switter
Switter is a basic Twitter like application where a user can check the sweets posted on switter. A user has to signup and login before posting any sweets on this application. In addition, the user can search for any other registered user with switter and can also view their own profile page.

## Technology Stack (MERN)
- <b> FrontEnd: </b> React, JavaScript, Bootstrap, CSS
- <b> BackEnd: </b> Node.Js, Express
- <b> Database: </b> MongoDB

## Steps to run on local machine
- git clone the repository
- install dependencies with `npm i`
- run the command `npm run dev`

## Docker Image

### Build a docker image
- Build Docker image with `docker build -t <username>/switter:v1 .`
- To view your image, run `docker image ls <username>/switter:v1`
- Run with `docker run -p 3000:3000 <username>/switter:v1`
- To view the docker container running, `docker container ls`
- To stop a docker container `docker stop <container id>`
- Push your docker image with docker `push <username>/switter:v1`
- Run your image off of dockerhub `docker run -p 3000:3000 <username>/switter:v1`

### To run on AWS EC2 instance

- Install docker on ec2 with `sudo snap install docker`
- Run the docker image on ec2 with `sudo docker run -p 3000:3000 <username>/switter:v1`
