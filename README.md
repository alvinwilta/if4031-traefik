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
docker build -t add-sub .
```

run the image (set according to environment variable):

```
docker run -it -p 8080:3000 -e SERVER_HOSTNAME=localhost -e SERVER_PORT=30 add-sub:latest
```

## Structure

**Request** &rarr; Routes &rarr; Controller &rarr; Services &rarr; **Response**

Controller untuk validasi body req/handle error res

Services untuk jalanin proses

Interface digunakan untuk nentuin typing
