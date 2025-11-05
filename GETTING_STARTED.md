# 🚀 FreeTun - Getting Started Guide

Welcome to FreeTun development! This guide will help you set up your local development environment.

## ✅ Current Status

Your project is successfully initialized with:
- ✅ Backend (Node.js + Express + TypeScript)
- ✅ Frontend (Next.js 14 + TypeScript + Tailwind CSS)
- ✅ All dependencies installed
- ✅ Environment files created

## 📋 What You Have

### Backend (`/backend`)
- **Framework**: Express.js with TypeScript
- **Features**: 
  - JWT authentication ready
  - Rate limiting configured
  - Security middleware (Helmet, CORS)
  - File upload support (Multer)
  - Email support (Nodemailer)
  - Real-time ready (Socket.IO)
- **Port**: 5000
- **API Base**: http://localhost:5000/api/v1

### Frontend (`/frontend`)
- **Framework**: Next.js 14 with App Router
- **Features**:
  - TypeScript configured
  - Tailwind CSS ready
  - ESLint + React Compiler enabled
  - Turbopack for faster builds
- **Port**: 3000
- **URL**: http://localhost:3000

## 🏃 Quick Start

### 1. Start Backend Server

```bash
cd backend
npm run dev
```

You should see:
```
🚀 FreeTun Backend Server running on port 5000
📍 Environment: development
🌐 Frontend URL: http://localhost:3000
```

Test the API:
```bash
curl http://localhost:5000/health
```

### 2. Start Frontend (in a new terminal)

```bash
cd frontend
npm run dev
```

You should see:
```
▲ Next.js 16.0.1
- Local: http://localhost:3000
```

Open http://localhost:3000 in your browser.

## 🗄️ Database Setup (Required for Full Functionality)

### Option 1: Local PostgreSQL

Install PostgreSQL:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

Create database:
```bash
sudo -u postgres psql
CREATE DATABASE freetun_db;
CREATE USER freetun_user WITH PASSWORD 'securepassword123';
GRANT ALL PRIVILEGES ON DATABASE freetun_db TO freetun_user;
\q
```

Update `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=freetun_db
DB_USER=freetun_user
DB_PASSWORD=securepassword123
```

### Option 2: Free Cloud Database (Railway.app)

1. Go to [railway.app](https://railway.app)
2. Sign up (free)
3. Create new project → Add PostgreSQL
4. Copy connection details to `backend/.env`

### Option 3: Free Cloud Database (Render.com)

1. Go to [render.com](https://render.com)
2. Sign up (free)
3. New → PostgreSQL
4. Copy connection details to `backend/.env`

## 📝 Next Development Steps

### Phase 1: Database Models (Week 1)

Create database models in `backend/src/models/`:

1. **User Model** (`User.ts`)
   - email, password, role, verification status

2. **Profile Model** (`Profile.ts`)
   - bio, skills, portfolio, hourly rate

3. **Project Model** (`Project.ts`)
   - title, description, budget, status

4. **Proposal Model** (`Proposal.ts`)
   - cover letter, proposed amount, delivery time

5. **Payment Model** (`Payment.ts`)
   - amount, payment method, status

Start with:
```bash
cd backend/src/models
# Create User.ts first
```

### Phase 2: Authentication API (Week 1-2)

Create in `backend/src/`:

1. **Auth Controller** (`controllers/authController.ts`)
   - register, login, verify email

2. **Auth Routes** (`routes/authRoutes.ts`)
   - POST /api/v1/auth/register
   - POST /api/v1/auth/login

3. **Auth Middleware** (`middleware/auth.ts`)
   - JWT verification
   - Role-based access

### Phase 3: Frontend Auth Pages (Week 2)

Create in `frontend/src/app/`:

1. **Login Page** (`(auth)/login/page.tsx`)
2. **Register Page** (`(auth)/register/page.tsx`)
3. **Auth Forms** (`components/forms/`)

## 🛠️ Development Tools

### Backend Commands

```bash
cd backend

# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Run production
npm start

# Run tests (when added)
npm test
```

### Frontend Commands

```bash
cd frontend

# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🧪 Testing the Setup

### Test Backend Health
```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "success",
  "message": "FreeTun API is running",
  "timestamp": "2025-11-05T..."
}
```

### Test Frontend
Open http://localhost:3000 - you should see the Next.js welcome page.

## 📦 Additional Dependencies to Install (As Needed)

### Backend
```bash
cd backend

# For API documentation
npm install swagger-ui-express swagger-jsdoc

# For testing
npm install --save-dev jest @types/jest supertest @types/supertest

# For image processing
npm install sharp

# For logging
npm install winston
```

### Frontend
```bash
cd frontend

# State management
npm install zustand

# API client
npm install axios

# Forms
npm install react-hook-form zod @hookform/resolvers

# UI components (optional)
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# Socket.io client
npm install socket.io-client

# Internationalization
npm install next-i18next
```

## 🌍 Environment Variables

### Backend (`.env`)
Key variables to configure:
- `DB_*`: Database credentials
- `JWT_SECRET`: Change to a random secure string
- `EMAIL_*`: For sending emails
- `FLOUCI_*`, `D17_*`: Payment gateway credentials (get from providers)

### Frontend (`.env.local`)
Key variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL (default: http://localhost:5000/api/v1)
- `NEXT_PUBLIC_APP_URL`: Frontend URL (default: http://localhost:3000)

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is already in use: `lsof -i :5000`
- Check `.env` file exists and is configured
- Check Node.js version: `node -v` (should be v18+)

### Frontend won't start
- Check if port 3000 is already in use: `lsof -i :3000`
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Database connection fails
- Check PostgreSQL is running: `sudo systemctl status postgresql`
- Verify credentials in `.env`
- Test connection: `psql -h localhost -U freetun_user -d freetun_db`

## 📚 Recommended Learning Resources

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Express.js
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)

### PostgreSQL
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Sequelize ORM Docs](https://sequelize.org/docs/v6/)

## 🎯 Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/user-authentication
   ```

2. **Make changes and test**
   - Backend: Run `npm run dev` and test with Postman/curl
   - Frontend: Run `npm run dev` and test in browser

3. **Commit with descriptive messages**
   ```bash
   git add .
   git commit -m "feat: implement user registration API"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/user-authentication
   ```

## 🎉 You're Ready!

Your development environment is set up and ready to go!

**Next Action**: 
1. Set up your database (see Database Setup section)
2. Start creating the User model in `backend/src/models/User.ts`
3. Implement authentication endpoints

Check [DEVELOPMENT_PLAN.md](../DEVELOPMENT_PLAN.md) for the detailed development roadmap.

---

**Need Help?**
- Check the [Backend README](../backend/README.md)
- Check the [Frontend README](../frontend/README.md)
- Review the [Development Plan](../DEVELOPMENT_PLAN.md)

**Happy Coding! 🚀🇹🇳**
