#!/bin/bash
# Power BI Learning App - Quick Start Script

echo "🚀 Starting Power BI Learning Platform..."
echo ""
echo "Server will start on: http://localhost:8080"
echo "Open your browser and navigate to: http://localhost:8080/powerbi-app.html"
echo ""
echo "Demo Login:"
echo "  Username: student"
echo "  Password: demo123"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd /home/user/CV
python3 -m http.server 8080
