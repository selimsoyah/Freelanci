# 🗄️ Database Setup Guide

## Option 1: Local PostgreSQL (Recommended for Development)

### Install PostgreSQL on Linux

```bash
# Update package list
sudo apt update

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Check status
sudo systemctl status postgresql
```

### Create Database and User

```bash
# Switch to postgres user
sudo -u postgres psql

# In PostgreSQL shell, run:
CREATE DATABASE freetun_db;
CREATE USER freetun_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE freetun_db TO freetun_user;

# Grant schema privileges (PostgreSQL 15+)
\c freetun_db
GRANT ALL ON SCHEMA public TO freetun_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO freetun_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO freetun_user;

# Exit
\q
```

### Update `.env` File

```bash
cd /home/salim/Desktop/freelanci/backend
nano .env
```

Update these values:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=freetun_db
DB_USER=freetun_user
DB_PASSWORD=your_secure_password
```

### Test Connection

```bash
# Test from command line
psql -h localhost -U freetun_user -d freetun_db

# Or test with backend
cd /home/salim/Desktop/freelanci/backend
npm run dev
```

---

## Option 2: Railway.app (Free Cloud Database)

### Steps:

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**
4. Select **"Provision PostgreSQL"**
5. Wait for database to deploy
6. Click on **PostgreSQL** service
7. Go to **"Connect"** tab
8. Copy connection details

### Update `.env` File

Copy the values from Railway:

```env
DB_HOST=containers-us-west-xxx.railway.app
DB_PORT=5432
DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=xxx_your_password_xxx
```

### Test Connection

```bash
cd /home/salim/Desktop/freelanci/backend
npm run dev
```

---

## Option 3: Render.com (Free PostgreSQL)

### Steps:

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click **"New +"** → **"PostgreSQL"**
4. Enter database name: `freetun_db`
5. Select **"Free"** plan
6. Click **"Create Database"**
7. Wait for provisioning
8. Copy **"External Connection"** details

### Update `.env` File

```env
DB_HOST=dpg-xxx.oregon-postgres.render.com
DB_PORT=5432
DB_NAME=freetun_db
DB_USER=freetun_user
DB_PASSWORD=xxx_your_password_xxx
```

---

## Verify Database Setup

### 1. Check Environment Variables

```bash
cd /home/salim/Desktop/freelanci/backend
cat .env | grep DB_
```

### 2. Start Backend

```bash
npm run dev
```

You should see:
```
✅ Database connection established successfully.
✅ Database models synchronized
🚀 FreeTun Backend Server running on port 5000
```

### 3. Check Tables Created

```bash
# Local PostgreSQL
psql -h localhost -U freetun_user -d freetun_db -c "\dt"

# Should show:
# users
# profiles
```

---

## Database Models Created

### 1. Users Table
- `id` (UUID, Primary Key)
- `email` (Unique)
- `phone` (Unique, optional)
- `password_hash`
- `role` (freelancer, client, admin)
- `google_id` (optional)
- `tunisian_id` (optional)
- `verification_status` (pending, verified, rejected)
- `created_at`, `updated_at`

### 2. Profiles Table
- `id` (UUID, Primary Key)
- `user_id` (Foreign Key → users.id)
- `full_name`
- `bio`
- `skills` (JSON array)
- `hourly_rate` (decimal)
- `portfolio_links` (JSON array)
- `profile_picture_url`
- `language_preference` (french, arabic)
- `address`, `city`
- `created_at`, `updated_at`

---

## Next Steps

Once database is set up:

1. ✅ Test backend connection
2. ⏳ Implement authentication endpoints
3. ⏳ Create auth routes
4. ⏳ Build login/register pages

---

## Troubleshooting

### Error: "database does not exist"
```bash
sudo -u postgres psql
CREATE DATABASE freetun_db;
```

### Error: "password authentication failed"
```bash
# Reset password
sudo -u postgres psql
ALTER USER freetun_user WITH PASSWORD 'new_password';
```

### Error: "connection refused"
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Start if not running
sudo systemctl start postgresql
```

### Error: "peer authentication failed"
Edit PostgreSQL config:
```bash
sudo nano /etc/postgresql/14/main/pg_hba.conf

# Change:
local   all   all   peer

# To:
local   all   all   md5

# Restart PostgreSQL
sudo systemctl restart postgresql
```

---

## Database Management Tools

### pgAdmin (GUI)
```bash
# Install
sudo apt install pgadmin4

# Or use web version
https://www.pgadmin.org/
```

### DBeaver (GUI)
Download from: https://dbeaver.io/

### VS Code Extension
Install: **PostgreSQL** by Chris Kolkman

---

**Your database is ready! Start the backend to create tables automatically.** 🚀
