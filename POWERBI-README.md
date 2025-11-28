# Power BI Learning Platform

A comprehensive web-based learning management system for the 8-Week Power BI Master Course. Students can track their progress through 40 lessons across 8 weeks of training.

## Features

### 🔐 User Authentication
- Secure login system with username and password
- User registration for new students
- Session management using localStorage
- Demo accounts available for testing

### 📊 Progress Dashboard
- Real-time progress tracking
- Visual statistics showing:
  - Total lessons (40)
  - Completed lessons
  - Overall progress percentage
  - Remaining lessons
- Weekly progress breakdown (8 weeks × 5 lessons)
- Recent activity feed
- Interactive progress bars

### 📚 Course Content
- Complete 8-week curriculum with 40 lessons
- Direct links to YouTube video timestamps
- Checkbox system to mark lessons as complete
- Progress tracking per week
- Organized by weeks and topics:
  - Week 1: Power BI Basics
  - Week 2: Visualizations
  - Week 3: Interactivity & Design
  - Week 4: Power Query & Data Modeling
  - Week 5: Advanced Power Query
  - Week 6: DAX Fundamentals
  - Week 7: Advanced DAX
  - Week 8: Final Project & Career

### 🎨 Modern UI/UX
- Responsive design for all devices
- Clean and professional interface
- Power BI brand colors (Yellow, Orange, Dark Gray)
- Smooth animations and transitions
- Mobile-friendly navigation

## Demo Credentials

You can test the application using these demo accounts:

- **Username:** `student` | **Password:** `demo123`
- **Username:** `john` | **Password:** `password`

Or register a new account to create your own profile.

## File Structure

```
powerbi-app.html         - Login page
powerbi-dashboard.html   - Student dashboard
powerbi-course.html      - Course content with all lessons
powerbi-app.js          - JavaScript logic (authentication, progress tracking)
powerbi-styles.css      - CSS styling
```

## How to Use

### For Students:

1. **Login**
   - Open `powerbi-app.html` in your browser
   - Enter your username and password
   - Or register a new account

2. **View Dashboard**
   - See your overall progress
   - Check weekly completion status
   - View recent activity

3. **Access Course Content**
   - Click "Course Content" in the navigation
   - Browse all 40 lessons organized by week
   - Click "Start Lesson" to open YouTube videos at specific timestamps

4. **Track Progress**
   - Check the box next to each lesson as you complete it
   - Your progress is automatically saved
   - Return to the dashboard to see updated statistics

5. **Continue Learning**
   - Use the "Continue Learning" button on the dashboard
   - Pick up where you left off
   - Track your journey through all 8 weeks

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Storage:** localStorage (browser-based)
- **Design:** Responsive CSS Grid and Flexbox
- **Icons:** Unicode Emoji

## Features Explained

### Authentication System
- Uses localStorage to store user credentials
- Password-protected access to content
- Session persistence (stays logged in)
- Multiple user support

### Progress Tracking
- Each lesson can be marked complete/incomplete
- Progress is saved in real-time
- Synced across dashboard and course pages
- Weekly and overall statistics

### Data Persistence
All user data is stored locally in the browser using localStorage:
- User credentials
- Lesson completion status
- Timestamps for recent activity
- No server required - works offline after first load

## Browser Compatibility

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

Potential features for future versions:
- Backend database integration
- User profile customization
- Certificate generation
- Discussion forums
- Quiz/assessment system
- Video playback integration
- Mobile app version
- Email notifications
- Social sharing features
- Analytics and insights

## Course Source

This platform is built around the comprehensive Power BI course available on YouTube. All lesson links direct to specific timestamps in the master video tutorial.

## Local Development

1. Clone or download all files to a local directory
2. Open `powerbi-app.html` in your web browser
3. No build process or server required
4. All functionality works locally

## Support

For issues or questions about the platform, please refer to the course materials or create a new account to track your progress through the 8-Week Power BI Master Course.

---

**Start your Power BI journey today!** 📊📈
