# ASTURIAS WEATHER BOT API

API REST Service to GET, POST and DELETE municipalities and forecastings


## Information 🚀

### Architecture

![alt text](https://i.imgur.com/jxk19Yf.png)

- **AEMET API:** it's an API REST service for meteorology data from Spain
- **ASTURIAS-WEAHTER-BOT-GATHER:** microservice to request forecasting and municipality data
- **ASTURIAS-WEATHER-BOT-API:** microserive to manage CRUD operations
- **DATABASE:** storages data of forecastings and municipalities
- **ASTURIAS-WEATHER-BOT-SENDER:** microservice to create tweets about forecasting and munipality data

### Pre-requisitos 📋

Software requited to run this project:
- Git
- Mongodb v2.4.14
- NodeJS v10.16.0
- NPM v6.14.5
- *Nodemon (optional)*
- *PM2 (optional)*


### Installation & First Run 🔧

1. Clone the repo and navigate to the workspace folder:

```bash
git clone https://github.com/IgnacioRubio/asturias-weather-bot-api.git
cd asturias-weather-bot-api
```

2. Install project dependencies

```bash
npm install
```

3. Create and set up environment variables into *.env* file 

```bash
echo > .env
```

```
PORT_NUMBER=3000
MONGODB_HOST=localhost
MONGODB_DATABASE=AsturiasWeatherDB
MONGODB_USER=
MOGNODB_PASSWORD=
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_AUTH_USER=example@example.com
EMAIL_AUTH_PASS=example123
EMAIL_MSG_FROM=exmaple@example.com
EMAIL_MSG_TO=example@example.com
```

3. Run API service 

```
npm start
```

### What's included 📂

```
asturias-weather-bot-api
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src
    ├── forecastings
    │   ├── forecastings.controller.js
    │   ├── forecastings.model.js
    │   └── forecastings.route.js
    ├── municipalities
    │   ├── municipalities.controller.js
    │   ├── municipalities.model.js
    │   └── municipalities.route.js
    ├── services
    │   └── email.js
    └── util
        └── env.js
```

### Endpoints 🔖

#### Forecastings
> GET - /forecastings - find all forecastings

> GET - /forecastings/:code - find one forecasting

> POST - /forecastings - create new forecasting

> DELETE - /forecastings - delete all forecastings

#### Municipalities
> GET - /municipalities - find all municipalities

> GET - /municipalities/:count - number of municipalities

> GET - /municipalities/:code - find one municipality

> POST - /municipalities - create new municipality

> PATCH - /municipalities - update municipality

> DELETE - /municipalities - delete all municipalities

> DELETE - /municipalities/:code - delete one municipalities

## Deployment 📦

PM2 is used to make the deployment.

1. Run *package.json* script `npm run pm2`
2. List service `pm2 list`
3. Restart service after update `pm2 restart awb-api`
4. Stop service `pm2 stop awb-api`

## Built with 🛠️

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime
* [Express](https://maven.apache.org/) - Web application framework
* [mongoose](https://maven.apache.org/) - MongoDB ODM
* [nodemailer](https://maven.apache.org/) - Easy as cake e-mail sending
* [dotenv](https://www.npmjs.com/package/dotenv) - Storing configuration in the environment 