# if4031-traefik

## Setup

Install:

```
npm i
```

Running:

```
npm start
```

## Setup Docker Run

cd to service:

```
cd add-sub
```

build the image:

```
docker build -t alvinwilta/add-sub:latest .
docker push alvinwilta/add-sub:latest
```

run the image:

```
npm run docker-run
```

## Using Docker Compose

```
docker-compose up

docker-compose -f docker-compose-autodisc.yaml up --scale add-sub=4 --scale mult-div=3

use -d for detached
```

## Structure

**Request** &rarr; Routes &rarr; Controller &rarr; Services &rarr; **Response**

Controller untuk validasi body req/handle error res

Services untuk jalanin proses

Interface digunakan untuk nentuin typing

## Servers

dashboard: http://localhost:3031

gateway: http://localhost:3030

add-sub: http://add.localhost:3030

mult-div: http://mult.localhost:3030
