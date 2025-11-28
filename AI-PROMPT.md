# AI Prompt: Create Power BI Learning Platform

Copy and paste this entire prompt to any AI assistant (ChatGPT, Claude, etc.) to recreate this project.

---

## Project Request

Create a complete web-based learning management system for an 8-Week Power BI Master Course. The application should allow students to login with username and password, track their progress through 40 lessons, and view their completion statistics on a dashboard.

## Required Features

### 1. User Authentication System
- Login page with username and password fields
- User registration form for new students
- Store user data in browser localStorage
- Include these demo accounts:
  - Username: `student` | Password: `demo123`
  - Username: `john` | Password: `password`
- Session management (keep users logged in)
- Logout functionality

### 2. Student Dashboard
Display the following statistics:
- Total lessons (40)
- Completed lessons count
- Progress percentage
- Remaining lessons count
- Overall progress bar with visual percentage
- Weekly progress breakdown (8 weeks, 5 lessons each)
- Recent activity feed showing last 5 completed lessons with timestamps
- "Continue Learning" button to navigate to course content

### 3. Course Content Page
- Display all 40 lessons organized by 8 weeks
- Each lesson should have:
  - Checkbox to mark complete/incomplete
  - Lesson title
  - "Start Lesson" link to YouTube video timestamp
- Week headers showing completion status (e.g., "3/5 completed")
- Visual indication of completed lessons
- Progress tracking that updates in real-time

### 4. Progress Tracking
- Save completion status in localStorage
- Track timestamps for each completed lesson
- Update dashboard statistics automatically
- Persist data across browser sessions
- Calculate weekly and overall progress percentages

### 5. Design Requirements
- Use Power BI brand colors:
  - Primary: #F2C811 (Yellow)
  - Secondary: #252423 (Dark Gray)
  - Accent: #E97627 (Orange)
  - Success: #10B759 (Green)
- Modern, professional UI
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Navigation bar on dashboard and course pages
- Clean, organized layout

## Course Content - 8-Week Schedule

Here is the complete course schedule with all 40 lessons and their YouTube timestamp links:

### Week 1: Power BI Basics
1. Day 1: Intro & Setup - Install, Interface, Load CSV → https://youtu.be/FwjaHCVNBWA?t=0s
2. Day 2: First Dashboard - Cards, Bar Charts, Maps → https://youtu.be/FwjaHCVNBWA?t=35m00s
3. Day 3: Publishing - Power BI Service & Web Publishing → https://youtu.be/FwjaHCVNBWA?t=58m00s
4. Day 4: Column & Bar Charts - Stacked vs. Clustered → https://youtu.be/FwjaHCVNBWA?t=1h13m00s
5. Day 5: Line & Area Charts - Trends & Drill Down → https://youtu.be/FwjaHCVNBWA?t=1h32m00s

### Week 2: Visualizations
1. Day 1: Pie & Tree Maps - Proportions & Interactions → https://youtu.be/FwjaHCVNBWA?t=1h48m00s
2. Day 2: Mapping Data - Map, Filled Map, ArcGIS → https://youtu.be/FwjaHCVNBWA?t=2h05m00s
3. Day 3: Uncommon Charts - Ribbon, Waterfall, Gauge → https://youtu.be/FwjaHCVNBWA?t=2h17m00s
4. Day 4: Tables & Matrix - Conditional Formatting → https://youtu.be/FwjaHCVNBWA?t=2h30m00s
5. Day 5: KPI Cards - Multi-Row & New Card Visual → https://youtu.be/FwjaHCVNBWA?t=2h47m00s

### Week 3: Interactivity & Design
1. Day 1: Slicers - Filtering & Syncing Pages → https://youtu.be/FwjaHCVNBWA?t=2h57m00s
2. Day 2: Navigation - Buttons & Bookmarks → https://youtu.be/FwjaHCVNBWA?t=3h11m00s
3. Day 3: Project 1 - Dashboard Design & Layout → https://youtu.be/FwjaHCVNBWA?t=3h26m00s
4. Day 4: Drill Through - Creating Detail Pages → https://youtu.be/FwjaHCVNBWA?t=3h39m00s
5. Day 5: Portfolio - GitHub Setup & Sharing → https://youtu.be/FwjaHCVNBWA?t=3h49m00s

### Week 4: Power Query & Data Modeling
1. Day 1: Power Query Intro - Extract, Transform, Load → https://youtu.be/FwjaHCVNBWA?t=4h11m00s
2. Day 2: Folders - Combining Multiple Files → https://youtu.be/FwjaHCVNBWA?t=4h16m00s
3. Day 3: Data Quality - Profiling & Error Checking → https://youtu.be/FwjaHCVNBWA?t=4h34m00s
4. Day 4: Cleaning - Text Tools & Custom Columns → https://youtu.be/FwjaHCVNBWA?t=4h46m00s
5. Day 5: Modeling Intro - Fact vs. Dimension Tables → https://youtu.be/FwjaHCVNBWA?t=4h57m00s

### Week 5: Advanced Power Query
1. Day 1: Project 2 Data - Import & Relationships → https://youtu.be/FwjaHCVNBWA?t=5h02m00s
2. Day 2: Advanced Shape - Split Column & Unpivot → https://youtu.be/FwjaHCVNBWA?t=5h19m00s
3. Day 3: Logic - Conditional Columns (If/Then) → https://youtu.be/FwjaHCVNBWA?t=5h30m00s
4. Day 4: Appending - Stacking Tables (Union) → https://youtu.be/FwjaHCVNBWA?t=5h43m00s
5. Day 5: Merging - Joining Tables (Left Join) → https://youtu.be/FwjaHCVNBWA?t=5h49m00s

### Week 6: DAX Fundamentals
1. Day 1: M Language - Power Query Code View → https://youtu.be/FwjaHCVNBWA?t=6h10m00s
2. Day 2: DAX Intro - Calculated Columns → https://youtu.be/FwjaHCVNBWA?t=6h32m00s
3. Day 3: DAX Dates - Calendar & Date Tables → https://youtu.be/FwjaHCVNBWA?t=6h44m00s
4. Day 4: DAX Measures - CountRows & Average → https://youtu.be/FwjaHCVNBWA?t=6h57m00s
5. Day 5: Best Practices - Organizing Measures → https://youtu.be/FwjaHCVNBWA?t=7h04m00s

### Week 7: Advanced DAX
1. Day 1: Complex DAX - Ratios & Division → https://youtu.be/FwjaHCVNBWA?t=7h12m00s
2. Day 2: Context - Row vs. Filter Context → https://youtu.be/FwjaHCVNBWA?t=7h17m00s
3. Day 3: CALCULATE - The Most Important Function → https://youtu.be/FwjaHCVNBWA?t=7h24m00s
4. Day 4: Field Params - Dynamic Axis Switching → https://youtu.be/FwjaHCVNBWA?t=7h34m00s
5. Day 5: Numeric Params - What-If Sliders → https://youtu.be/FwjaHCVNBWA?t=7h44m00s

### Week 8: Final Project & Career
1. Day 1: Project 2 Layout - Themes & Setup → https://youtu.be/FwjaHCVNBWA?t=7h49m00s
2. Day 2: Building - Applying Advanced DAX → https://youtu.be/FwjaHCVNBWA?t=7h59m00s
3. Day 3: Final Polish - Tooltips & Web Publish → https://youtu.be/FwjaHCVNBWA?t=8h11m00s
4. Day 4: Documentation - README for Portfolio → https://youtu.be/FwjaHCVNBWA?t=8h16m00s
5. Day 5: Career - LinkedIn & Next Steps → https://youtu.be/FwjaHCVNBWA?t=8h21m00s

## Technical Specifications

### Files to Create:
1. **powerbi-app.html** - Login and registration page
2. **powerbi-dashboard.html** - Student dashboard with statistics
3. **powerbi-course.html** - Course content with all 40 lessons
4. **powerbi-app.js** - JavaScript for authentication and progress tracking
5. **powerbi-styles.css** - Complete styling with responsive design
6. **README.md** - Documentation file

### Technology Stack:
- Pure HTML5, CSS3, JavaScript (no frameworks required)
- localStorage for data persistence
- Responsive CSS Grid and Flexbox
- No backend server needed

### Data Structure:
Store in localStorage:
```javascript
users = {
  'username': {
    password: 'password',
    name: 'Full Name',
    email: 'email@example.com',
    progress: {
      'w1d1': { completed: true, timestamp: '2025-01-01T10:00:00.000Z' },
      'w1d2': { completed: false, timestamp: null }
      // ... all lessons w1d1 through w8d5
    }
  }
}
```

### Key Functions Needed:
- `initializeApp()` - Set up demo users
- `login()` - Authenticate user
- `register()` - Create new user
- `logout()` - Clear session
- `updateProgress(lessonId, completed)` - Save lesson status
- `getProgressStats()` - Calculate statistics
- `getWeeklyProgress()` - Calculate per-week stats
- `initDashboard()` - Load dashboard data
- `initCoursePage()` - Load course content

### UI Components:
- Navigation bar with logo and links
- Stat cards with icons
- Progress bars (overall and weekly)
- Lesson checkboxes with labels
- Activity feed with timestamps
- Modal for registration
- Responsive grid layouts

### Lesson ID Format:
Use format `w{week}d{day}` for all 40 lessons:
- Week 1, Day 1 = `w1d1`
- Week 8, Day 5 = `w8d5`

## Success Criteria

The application should:
1. Allow users to login and register
2. Display accurate progress statistics
3. Save progress automatically when checkboxes are clicked
4. Show recent activity with timestamps
5. Work on mobile, tablet, and desktop
6. Use Power BI brand colors
7. Be fully functional without a backend server
8. Persist data across browser sessions

## Additional Notes

- Make all links open in new tabs (target="_blank")
- Use emoji icons for visual appeal (📊, ✅, 📚, 📈, etc.)
- Add hover effects and transitions for better UX
- Include helpful error messages
- Make the design professional and modern
- Ensure the UI is intuitive and easy to navigate

---

**Please create all necessary files with complete, production-ready code.**
