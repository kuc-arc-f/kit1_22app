# kit1_22app

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/06/01

 update  : 2023/07/09 
 
***
### Summary

SvelteKit + Cloudflare D1, app sample, todo, plan, er-chart, task

* todo : todo app, markdown input
* plan : schedule input
* er-chart : mermaid.js use, Er Chart create
* task: project, task List add

***
### API Server

https://github.com/kuc-arc-f/d1-project8git

***
### Screen

* plan

![img](https://img-static-kuc.netlify.app/img/front_2023/svelte/ss-plan-0614.png)

* er-chart

![img](https://img-static-kuc.netlify.app/img/front_2023/svelte/ss-erchart-0614.png)


***
### Setup

```
npm install
```

***
### Setup: .env

* PUBLIC_SYSTEM_NAME
* PUBLIC_API_URL: API
* PUBLIC_API_KEY
* KV (option) PUBLIC_KV_URL,PUBLIC_KV_KEY
```
PUBLIC_SYSTEM_NAME = "systemName"
PUBLIC_API_URL=http://localhost:8787
PUBLIC_API_KEY="hoge123"
PUBLIC_KV_URL=https://hoge.com
PUBLIC_KV_KEY=""
```

***
* (option) send mail

```
# MAIL
PUBLIC_SMTP_HOST = "test.com"
PUBLIC_SMTP_PORT = 465
PUBLIC_SMTP_SECURE = true
PUBLIC_SMTP_AUTH_USER = "hoge"
PUBLIC_SMTP_AUTH_PASS = ""
PUBLIC_FROM_MAIL_ADDRESS = "from@test.com"
```

***
### Start server
* start :

```
yarn dev
```

* open: http://localhost:5173/

***
### build

```
yarn build
```

***
### Blog:

https://zenn.dev/knaka0209/books/a7dd4a9b5b636f

***

