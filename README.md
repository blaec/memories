# Using file as db
- `npm install -g json-server` _install server_
- `json-server --watch config/db.json --host 127.0.0.1 --port 3033` _start server_ [link](https://medium.com/how-to-react/how-to-use-json-file-as-a-server-for-fake-api-in-react-js-6b72606023b7)

---

# Deployment
`json-server` can run only on local-ip<br/>
`axios-server` forward to public ip<br/>
add 2 rules for port-forwarding in router
- port 3003 -> 10.100.102.5:3003
- port 3033 -> 10.100.102.5:3033

---

# Running
### develop
- **DON'T COMMIT THIS CHANGE.** In `package.json` prepend this `set PORT=3003 && ` to scripts > start.
- `npm start` in project root
- `json-server --watch config/db.json --host localhost --port 3033` in project root

### develop Dockerfile
- `docker build -t memories .` in project root
- `docker run -d -p 3003:3003 --name memories memories` from anywhere
- `docker build -t json-server .` in `config` folder
- `docker run -d -p 3033:3033 --name json-server json-server` from anywhere

### develop docker-compose
- `docker-compose build` in project root
- `docker-compose up -d` in project root

### production docker-compose
- clone project: `git clone <project link>`
- checkout to master branch: `git checkout master`
- set external ip in both Dockerfiles: `Dockerfile-prod` and `/config/Dockerfile-prod`
- set release version by modifying image tag in `docker-compose-prod`
- `docker compose -f docker-compose-prod.yml build` in project root
- `docker compose -f docker-compose-prod.yml up` in project root
- on update - run `git pull --no-rebase` and repeat required steps above