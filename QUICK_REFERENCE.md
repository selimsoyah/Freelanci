# FreeTun - Quick Reference Card

## 🚀 Start Development

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

## 🔗 URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API: http://localhost:5000/api/v1
- Health: http://localhost:5000/health

## 📂 Key Directories

```
backend/src/
├── controllers/  # API business logic
├── models/       # Database models
├── routes/       # API endpoints
├── middleware/   # Auth, validation, errors
├── services/     # Business services
└── types/        # TypeScript definitions

frontend/src/
├── app/          # Next.js pages
├── components/   # React components (create)
├── lib/          # Utilities (create)
└── hooks/        # Custom hooks (create)
```

## 🔑 Environment Files

- `backend/.env` - Database, JWT secrets, API keys
- `frontend/.env.local` - API URL, public keys

## 📝 Common Commands

### Backend
```bash
npm run dev      # Development
npm run build    # Build
npm start        # Production
```

### Frontend
```bash
npm run dev      # Development
npm run build    # Build
npm start        # Production
npm run lint     # Lint code
```

## 🗄️ Database Setup

### Local PostgreSQL
```bash
sudo -u postgres psql
CREATE DATABASE freetun_db;
CREATE USER freetun_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE freetun_db TO freetun_user;
```

### Cloud (Free)
- Railway.app - PostgreSQL free tier
- Render.com - PostgreSQL free tier

## 🔐 Security Checklist

- [x] Environment variables in .env (gitignored)
- [x] CORS configured
- [x] Helmet.js security headers
- [x] Rate limiting enabled
- [ ] JWT authentication (implement)
- [ ] Password hashing (implement)
- [ ] Input validation (implement)

## 📦 Install Additional Packages

### Backend
```bash
# Testing
npm install -D jest @types/jest supertest

# API docs
npm install swagger-ui-express

# Logging
npm install winston
```

### Frontend
```bash
# State management
npm install zustand

# HTTP client
npm install axios

# Forms
npm install react-hook-form zod

# Socket.io
npm install socket.io-client

# i18n
npm install next-i18next
```

## 🧪 Testing

### Backend API
```bash
# Health check
curl http://localhost:5000/health

# With Postman
# Import endpoints and test
```

### Frontend
```bash
# Open browser
open http://localhost:3000
```

## 🐛 Troubleshooting

### Port in use
```bash
# Kill process on port
lsof -ti:5000 | xargs kill -9  # Backend
lsof -ti:3000 | xargs kill -9  # Frontend
```

### Database connection
```bash
# Test connection
psql -h localhost -U freetun_user -d freetun_db

# Check PostgreSQL status
sudo systemctl status postgresql
```

### Clean install
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules .next package-lock.json
npm install
```

## 📚 Documentation Files

1. **README.md** - Project overview
2. **GETTING_STARTED.md** - Detailed setup guide ⭐
3. **SETUP_COMPLETE.md** - What's been done ⭐
4. **DEVELOPMENT_PLAN.md** - 17-week roadmap
5. **PROJECT_STRUCTURE.md** - Architecture details
6. **QUICK_REFERENCE.md** - This file

## 🎯 Next Steps

1. Set up PostgreSQL database
2. Create User model (`backend/src/models/User.ts`)
3. Implement auth endpoints (`backend/src/controllers/authController.ts`)
4. Create auth routes (`backend/src/routes/authRoutes.ts`)
5. Build login page (`frontend/src/app/(auth)/login/page.tsx`)
6. Build register page (`frontend/src/app/(auth)/register/page.tsx`)

## 🆓 Free Services

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| Vercel | Frontend | Unlimited |
| Render.com | Backend | 750 hrs/mo |
| Railway.app | Database | $5 credit/mo |
| SendGrid | Email | 100/day |
| Sentry | Errors | 5K events/mo |

## 💡 Git Workflow

```bash
# Create feature branch
git checkout -b feature/authentication

# Stage changes
git add .

# Commit (use conventional commits)
git commit -m "feat(auth): implement user registration"

# Push
git push origin feature/authentication
```

## 📞 Need Help?

- Check GETTING_STARTED.md for detailed instructions
- Review DEVELOPMENT_PLAN.md for roadmap
- Check SETUP_COMPLETE.md for overview

---

**Keep this file handy while developing! 📌**
