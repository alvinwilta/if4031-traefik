# IF4031-Traefik

Demonstrasi mengenai implementasi Traefik sebagai API Gateway dengan reverse proxy, load balancing, dan auto-discovery

Pada repo ini terdapat beberapa hasil implementasi, yaitu:

1. Traefik dengan docker
   a. Traefik example (whoami)
   b. Traefik dengan containerized services (js dan ts)
2. Traefik dengan backend sederhana

Terdapat beberapa file folder pada repositori:

- add-sub (untuk implementasi 1b. service untuk addition dan subtraction)
- mult-div (untuk implementasi 1b, service untuk multiplication dan division)
- test_service (untuk implementasi 2, service dengan API get sederhana)
- traefik_docker_test (untuk implementasi 1a, untuk menjalankan example dari dokumentasi Traefik)
- traefik_test (untuk implementasi 2, file konfigurasi untuk traefik)

Pada root terdapat 2 docker-compose, keduanya akan digunakan untuk menjalankan hasil implementasi dari 1b. Command untuk menjalankan implementasi 1b terdapat pada bagian **#Using Docker Compose**

## Setup Docker Run

cd to service:

```
cd add-sub
```

build the image:

```
docker build -t alvinwilta/add-sub:latest .
```

or just pull the image from repo

```

docker pull alvinwilta/add-sub:latest

```

run the image:

```
npm run docker-run
```

(if needed) push the image to repository

```
docker push alvinwilta/add-sub:latest
```

## Using Docker Compose

Use this for running traefik 1b

```
docker-compose up

or

docker-compose -f docker-compose-autodisc.yaml up --scale add-sub=4 --scale mult-div=3

```

add -d flag for detached run

## Structure

**Request** &rarr; Routes &rarr; Controller &rarr; Services &rarr; **Response**

Controller untuk validasi body req/handle error res

Services untuk jalanin proses

## Servers

dashboard: http://localhost:3031

gateway: http://localhost:3030

add-sub: http://add.localhost:3030

mult-div: http://mult.localhost:3030
