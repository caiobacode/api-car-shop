<h1 align="center">🚗  Car Shop  🚗</h1>

<div align='center'>
<img width='300' alt="carshop-img" src="./car.jpg">
</div>

## Description
<p>The Car Shop project is an API developed for a vehicle dealership. It was built with TypeScript and Mongoose(MongoDB ODM). 
  Through the API, it is possible to manage information about vehicles in a secure and scalable way.</p>

## 💻 Tecnologies used
> [![Typescript][Typescript]][Typescript-url]
[![Node.js][Node.js]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![DOCKER][DOCKER]][DOCKER-url]
[![mongo][mongo]][mongo-url]
[![mongoose][mongoose]][mongoose-url]
[![Mocha][Mocha]][Mocha-url]
[![Chai][Chai]][Chai-url]
[![SOLID][SOLID]][SOLID-url]
[![OOP][OOP]][OOP-url]

## 🛠️ Instructions

### Notes
>This project run in port 3000.<br/>
>You can run this API with Docker or Node, you choose!

### 📚 Requirements to run this project:
- Git.
- Node.js - v >= 16.0 (if you wanna run with Node).
- MongoDB - (if you wanna run with Node).
- NPM - v >= 7.0 (if you wanna run with Node).
- Docker - (if you wanna run with Docker).


<details>
    <summary><strong>🐳 Run with Docker(Recommended) 🐳</strong></summary>
    
```bash
# Clone the repo
git clone https://github.com/caiobacode/api-car-shop

# Enter in repo
cd api-car-shop

# Run DockerCompose
docker-compose up -d
```
</details>

<details>
    <summary><strong>🟢 Run with Node.JS ⬢</strong></summary>

```bash
# Clone the repo
git clone https://github.com/caiobacode/api-car-shop

# Enter in repo
cd api-car-shop

# Install dependencies
npm install
```
Now, you need to config your MySQL database
- First, define environment variables in your .env file;

```bash
# Create databse
npm run restore

# Start the application
npm start
```

</details>

### <strong>🧪 Test the application</strong>

```bash
npm run test:coverage
```

## 🔎 Additional details


<details>
    <summary><strong>🌐 API routes</strong></summary>

<br/>

> <strong>Cars Route</strong><br/>
- POST "/cars" - Register a new car with the properties passed by the request.<br/>
- GET "/cars" - Returns all cars
- GET "/cars/:id" - Returns the car that has the id passed by the request.
- PUT "/cars/:id" - Edit a car properties to new properties passed by the request.

> <strong>Motorcycle Route</strong><br/>
- POST "/motorcycles" - Register a new motorcycle with the properties passed by the request.<br/>
- GET "/motorcycles" - Returns all motorcycles
- GET "/motorcycles/:id" - Returns the motorcycle that has the id passed by the request.
- PUT "/motorcycles/:id" - Edit a motorcycles properties to new properties passed by the request.

</details>

  <details>
    <summary><strong>✏️ What i learned</strong></summary>

+ Object-Oriented APIs
+ ODM (Object-Document Mapping)
+ NoSQL database
+ How to do database queries using mongoose
  
  </details>


[Typescript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[EXPRESS]: https://img.shields.io/badge/Express-111111?style=for-the-badge&logo=express&logoColor=white
[EXPRESS-url]: https://expressjs.com

[Mocha]: https://img.shields.io/badge/MOCHA-6D4A31?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org

[Chai]: https://img.shields.io/badge/chai-974942?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com

[mongo]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=black
[mongo-url]: https://www.mongodb.com/

[mongoose]: https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=black
[mongoose-url]: https://mongoosejs.com/

[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com

[SOLID]: https://img.shields.io/badge/SOLID-344e41?style=for-the-badge
[SOLID-url]: https://www.baeldung.com/solid-principles

[OOP]: https://img.shields.io/badge/OOP-3a0ca3?style=for-the-badge
[OOP-url]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
