#!/bin/bash

# FreeTun Development Environment Setup Verification Script

echo "🚀 FreeTun - Setup Verification"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo "📦 Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js installed: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js not found. Please install Node.js v18+${NC}"
    exit 1
fi

# Check npm
echo "📦 Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm installed: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
fi

# Check PostgreSQL
echo "🗄️  Checking PostgreSQL..."
if command -v psql &> /dev/null; then
    PG_VERSION=$(psql --version)
    echo -e "${GREEN}✓ PostgreSQL installed: $PG_VERSION${NC}"
else
    echo -e "${YELLOW}⚠ PostgreSQL not found. Install with: sudo apt install postgresql${NC}"
fi

echo ""
echo "📁 Checking Project Structure..."

# Check backend
if [ -d "backend" ]; then
    echo -e "${GREEN}✓ Backend directory exists${NC}"
    if [ -f "backend/package.json" ]; then
        echo -e "${GREEN}✓ Backend package.json exists${NC}"
    fi
    if [ -d "backend/node_modules" ]; then
        echo -e "${GREEN}✓ Backend dependencies installed${NC}"
    else
        echo -e "${YELLOW}⚠ Backend dependencies not installed. Run: cd backend && npm install${NC}"
    fi
    if [ -f "backend/.env" ]; then
        echo -e "${GREEN}✓ Backend .env file exists${NC}"
    else
        echo -e "${YELLOW}⚠ Backend .env not found. Copy from .env.example${NC}"
    fi
else
    echo -e "${RED}✗ Backend directory not found${NC}"
fi

# Check frontend
if [ -d "frontend" ]; then
    echo -e "${GREEN}✓ Frontend directory exists${NC}"
    if [ -f "frontend/package.json" ]; then
        echo -e "${GREEN}✓ Frontend package.json exists${NC}"
    fi
    if [ -d "frontend/node_modules" ]; then
        echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
    else
        echo -e "${YELLOW}⚠ Frontend dependencies not installed. Run: cd frontend && npm install${NC}"
    fi
    if [ -f "frontend/.env.local" ]; then
        echo -e "${GREEN}✓ Frontend .env.local exists${NC}"
    else
        echo -e "${YELLOW}⚠ Frontend .env.local not found. Copy from .env.example${NC}"
    fi
else
    echo -e "${RED}✗ Frontend directory not found${NC}"
fi

echo ""
echo "================================"
echo "✅ Setup verification complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Set up PostgreSQL database"
echo "2. Configure .env files"
echo "3. Run: cd backend && npm run dev"
echo "4. Run: cd frontend && npm run dev"
echo ""
