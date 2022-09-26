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

## Structure

**Request** &rarr; Routes &rarr; Controller &rarr; Services &rarr; **Response**

Controller untuk validasi body req/handle error res

Services untuk jalanin proses

Interface digunakan untuk nentuin typing

## Things to do:

[ ] setup database connection (pake db apa?)
[ ] Implement simple service function
[ ] setup docker untuk encapsulate tiap service, jangan lupa per service 1 db sendiri
[ ] Implement traefik
