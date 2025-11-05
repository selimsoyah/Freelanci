# FreeTun - Project Structure

```
freelanci/
│
├── backend/                    # Node.js + Express.js + TypeScript API
│   ├── src/
│   │   ├── config/            # Database & app configuration
│   │   ├── controllers/       # Route controllers (business logic)
│   │   ├── middleware/        # Express middleware (auth, errors, etc.)
│   │   ├── models/            # Database models (Sequelize)
│   │   ├── routes/            # API route definitions
│   │   ├── services/          # Business logic services
│   │   ├── types/             # TypeScript interfaces & enums
│   │   ├── utils/             # Helper functions
│   │   └── server.ts          # Main application entry point
│   ├── tests/                 # Test files
│   ├── uploads/               # User uploaded files
│   ├── .env.example           # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md              # Backend documentation
│
├── frontend/                   # Next.js + React + TypeScript
│   ├── src/
│   │   ├── app/               # Next.js App Router pages
│   │   │   ├── (auth)/       # Authentication pages (login, register)
│   │   │   ├── (dashboard)/  # Dashboard pages
│   │   │   ├── layout.tsx    # Root layout
│   │   │   └── page.tsx      # Home page
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── forms/        # Form components
│   │   │   └── layout/       # Layout components (nav, footer)
│   │   ├── lib/              # Utility libraries
│   │   ├── hooks/            # Custom React hooks
│   │   ├── types/            # TypeScript types
│   │   └── styles/           # Global styles
│   ├── public/               # Static assets
│   │   ├── images/
│   │   └── locales/          # i18n translation files
│   ├── .env.example
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── package.json
│   └── README.md             # Frontend documentation
│
├── docs/                      # Project documentation
│
├── DEVELOPMENT_PLAN.md        # Detailed development roadmap
├── README.md                  # Main project README
└── .gitignore                # Root gitignore

```

## 📋 Quick Start

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev
```

## 🔗 URLs
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/health

## 🗄️ Database
PostgreSQL database must be set up before running the backend.

## 📚 Documentation
- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)
- [Development Plan](DEVELOPMENT_PLAN.md)

## 🚀 Free Services to Use

### Development
- **Database**: PostgreSQL (local or Railway.app free tier)
- **Backend Hosting**: Render.com or Railway.app (free tier)
- **Frontend Hosting**: Vercel (free tier - unlimited)
- **Email**: SendGrid (100 emails/day free) or Gmail SMTP
- **Error Tracking**: Sentry (free tier)

### Testing
- **Load Testing**: k6 (open source)
- **E2E Testing**: Playwright (open source)

## 🔒 Security Checklist
- [x] Environment variables separated
- [x] CORS configured
- [x] Rate limiting enabled
- [x] Helmet.js for security headers
- [ ] JWT authentication (to be implemented)
- [ ] Input validation (to be implemented)
- [ ] SQL injection protection (Sequelize ORM)

## 📝 Next Steps
1. ✅ Project structure created
2. ✅ Backend initialized with TypeScript
3. ✅ Frontend initialized with Next.js
4. ⏳ Set up PostgreSQL database
5. ⏳ Implement authentication system
6. ⏳ Create database models
7. ⏳ Build API endpoints
8. ⏳ Create frontend components
9. ⏳ Integrate frontend with backend

## 🤝 Team Collaboration
- Use feature branches for development
- Main branch for production-ready code
- Create pull requests for code review

## 📄 License
ISC - FreeTun Team
