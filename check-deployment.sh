#!/bin/bash

# FreeTun - Quick Deployment Check & Fix Script

echo "🔍 FreeTun Vercel Deployment Checker"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: Run this script from the project root (freelanci/)"
    exit 1
fi

echo "✅ In correct directory"
echo ""

# Check if frontend builds successfully
echo "🏗️  Testing frontend build..."
cd frontend

if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi

echo ""
echo "📝 Deployment Checklist:"
echo ""
echo "1. ✅ Build works locally"
echo "2. ⏳ Vercel settings to check:"
echo "   - Framework Preset: Next.js"
echo "   - Root Directory: frontend"
echo "   - Node Version: 18.x or 20.x"
echo ""
echo "3. 🚀 To redeploy:"
echo "   - Vercel auto-deploys on git push"
echo "   - OR manually redeploy from dashboard"
echo "   - OR run: cd frontend && npx vercel --prod"
echo ""
echo "4. 📚 See VERCEL_DEPLOYMENT.md for detailed help"
echo ""
echo "✨ Your FreeTun landing page is ready to deploy!"
