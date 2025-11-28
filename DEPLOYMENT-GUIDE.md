# How to Share Your Power BI Learning App with Students

This guide provides multiple ways to share your Power BI Learning Platform with students.

---

## 🌐 Option 1: GitHub Pages (FREE & RECOMMENDED)

Deploy your app to GitHub Pages for free hosting with a public URL.

### Step 1: Merge Your Changes to Main Branch

First, create a pull request and merge your work:

1. Go to your GitHub repository: https://github.com/Sachathuranga/CV
2. You'll see a banner suggesting to create a pull request for `claude/powerbi-course-schedule-014xzgWQAqdCZvnTjRtwJjEN`
3. Click **"Compare & pull request"**
4. Review the changes and click **"Create pull request"**
5. Click **"Merge pull request"** → **"Confirm merge"**

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/Sachathuranga/CV
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 3: Get Your Live URL

Your app will be available at:
```
https://sachathuranga.github.io/CV/
```

Students access the Power BI app at:
```
https://sachathuranga.github.io/CV/powerbi-app.html
```

### Step 4: Share with Students

Send students this link:
```
🔗 https://sachathuranga.github.io/CV/powerbi-app.html

📚 Power BI Learning Platform
Username: student
Password: demo123
```

---

## 🚀 Option 2: Netlify (FREE - Alternative)

Netlify offers free hosting with custom domains and automatic deploys.

### Steps:

1. Go to https://www.netlify.com/
2. Sign up with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub** and authorize Netlify
5. Choose your **CV** repository
6. Configure:
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: `/`
7. Click **Deploy site**
8. Your site will be live at: `https://random-name-123.netlify.app`
9. You can customize the URL in **Site settings** → **Domain management**

**Share URL:**
```
https://your-site-name.netlify.app/powerbi-app.html
```

---

## 📦 Option 3: Vercel (FREE - Alternative)

Similar to Netlify, great for static sites.

### Steps:

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your **CV** repository
5. Click **Deploy**
6. Your site will be live at: `https://cv-username.vercel.app`

**Share URL:**
```
https://cv-username.vercel.app/powerbi-app.html
```

---

## 📧 Option 4: Share Files Directly

If students want to run it locally:

### Steps:

1. Download all files from the repository
2. Send students a ZIP file containing:
   - `powerbi-app.html`
   - `powerbi-dashboard.html`
   - `powerbi-course.html`
   - `powerbi-app.js`
   - `powerbi-styles.css`
   - `start-powerbi-app.sh`
   - `POWERBI-README.md`

3. Students can:
   - Double-click `powerbi-app.html` to open
   - OR run `./start-powerbi-app.sh` to start a local server

---

## 🔗 Option 5: Cloud Storage (Google Drive, Dropbox)

### Google Drive:

1. Upload all files to Google Drive
2. Right-click → **Get link** → **Anyone with the link can view**
3. Share the link with students
4. Students download and open locally

### Limitations:
- Students must download files
- Cannot run directly in browser from Drive

---

## 🎓 Recommended Setup for Students

### Best Practice:

1. **Deploy to GitHub Pages** (your live demo)
2. **Create student accounts** by sharing:
   ```
   🌐 Website: https://sachathuranga.github.io/CV/powerbi-app.html

   📝 Demo Login:
   Username: student
   Password: demo123

   OR

   Username: john
   Password: password

   💡 Students can register their own accounts!
   ```

3. **Provide instructions:**
   ```
   Welcome to the Power BI Learning Platform!

   1. Click the link above
   2. Register a new account OR use demo credentials
   3. Start with Week 1, Day 1
   4. Check off lessons as you complete them
   5. Track your progress on the dashboard

   Happy Learning! 📊
   ```

---

## 🔒 Security Note

The current app uses localStorage (browser storage) for data. This means:
- ✅ Data is private to each student's browser
- ✅ No server costs
- ❌ Data is lost if browser cache is cleared
- ❌ Cannot sync across devices

For a production app with hundreds of students, consider adding a backend database (Firebase, Supabase, etc.).

---

## 📊 Tracking Student Progress (Advanced)

If you want to track student progress centrally:

### Option: Add Google Analytics
1. Sign up at https://analytics.google.com
2. Add tracking code to all HTML files
3. Monitor student usage and engagement

### Option: Add a Backend (Future Enhancement)
- Use Firebase/Supabase for real-time progress sync
- Students can log in from any device
- You can see all student progress
- Export reports and certificates

---

## ✅ Quick Start Checklist

- [ ] Merge changes to main branch
- [ ] Enable GitHub Pages in repository settings
- [ ] Test the live URL
- [ ] Share the link with students
- [ ] Provide demo credentials
- [ ] Share registration instructions

---

## 🎯 Recommended Sharing Message

Send this to your students:

```
📊 Power BI Master Course - 8 Week Program

I'm excited to share our new Power BI Learning Platform!

🔗 Access the platform here:
https://sachathuranga.github.io/CV/powerbi-app.html

🔐 Demo Login (or create your own account):
Username: student
Password: demo123

📚 What's included:
• 40 comprehensive lessons across 8 weeks
• Interactive progress tracking
• Personal dashboard
• Direct links to video lessons
• Track your learning journey

📝 How to start:
1. Visit the link above
2. Login or register a new account
3. Go to "Course Content"
4. Start with Week 1, Day 1
5. Check boxes as you complete lessons
6. Watch your progress grow!

Questions? Let me know!

Happy Learning! 🚀
```

---

## 🆘 Troubleshooting

### If GitHub Pages isn't working:
- Check that repository is public (Settings → Danger Zone)
- Verify GitHub Pages is enabled (Settings → Pages)
- Wait 2-3 minutes after enabling
- Clear browser cache and try again

### If students can't login:
- They may have blocked cookies/localStorage
- Try a different browser
- Disable privacy extensions temporarily
- Use Incognito/Private mode

### If progress isn't saving:
- Check browser localStorage isn't disabled
- Don't use Incognito mode (data lost when closed)
- Make sure JavaScript is enabled

---

**Need help? Check the main README files for more details!**
