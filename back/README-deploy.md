# Self-deploy instructions (backend)

This file explains how to self-deploy the backend using Docker Compose (recommended) or using a VPS with Node + PM2.

Prerequisites
- Docker and Docker Compose installed on your machine or VPS (or Docker Desktop on Windows).
- Git clone of your repo and working in the `back` directory.

Quick start (Docker Compose)

1. Copy environment variables:

   - Create a `.env` file based on `.env.example` in this folder and set `JWT_SECRET` to a strong secret.

2. Start services (PowerShell):

```powershell
# from c:\path\to\your\repo\back
docker compose up -d --build
```

The API will be reachable at http://localhost:5000 by default.

Stopping services:

```powershell
docker compose down
```

Using MongoDB Atlas instead of local MongoDB
- If you prefer Atlas, set `MONGO_URI` in your `.env` to the Atlas connection string and remove the `mongo` service from `docker-compose.yml` or keep it but the `app` will connect to Atlas.

Alternative: PM2 on an Ubuntu VPS

1. Install Node.js (LTS) and PM2 on the server.
2. Clone the repo and install deps:

```bash
git clone https://github.com/<owner>/<repo>.git
cd repo/back
npm ci
```

3. Configure `.env` on the server (set MONGO_URI to your MongoDB server).

4. Start with PM2:

```bash
pm2 start server.js --name student-backend --env production
pm2 save
```

5. (Optional) Setup systemd startup for PM2:

```bash
pm2 startup systemd
# follow the printed instructions
```

Database seed
- If you have a `scripts/seed.js`, run `node scripts/seed.js` after services are up. Or use `mongoimport` to import CSV/JSON.

Notes and tips
- Ensure `JWT_SECRET` is kept secret.
- Use a managed MongoDB (Atlas) in production for reliability.
- Open port 5000 on your VPS firewall (or put a reverse proxy like Nginx in front and serve on 80/443).
- For production, run behind a reverse proxy (Nginx) and enable HTTPS via Let's Encrypt.
