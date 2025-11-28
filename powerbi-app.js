// Power BI Learning Platform - JavaScript

// Initialize localStorage with demo users if not exists
function initializeApp() {
    if (!localStorage.getItem('users')) {
        const demoUsers = {
            'student': {
                password: 'demo123',
                name: 'Demo Student',
                email: 'student@example.com',
                progress: {}
            },
            'john': {
                password: 'password',
                name: 'John Doe',
                email: 'john@example.com',
                progress: {}
            }
        };
        localStorage.setItem('users', JSON.stringify(demoUsers));
    }
}

// Call initialization
initializeApp();

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users'));

        if (users[username] && users[username].password === password) {
            // Login successful
            localStorage.setItem('currentUser', username);
            window.location.href = 'powerbi-dashboard.html';
        } else {
            // Login failed
            const errorMsg = document.getElementById('errorMessage');
            errorMsg.textContent = 'Invalid username or password';
            errorMsg.style.display = 'block';
        }
    });
}

// Registration Modal Handler
const registerLink = document.getElementById('registerLink');
const registerModal = document.getElementById('registerModal');
const closeModal = document.querySelector('.close');
const registerForm = document.getElementById('registerForm');

if (registerLink) {
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'block';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const email = document.getElementById('regEmail').value;
        const name = document.getElementById('regName').value;

        const users = JSON.parse(localStorage.getItem('users'));

        if (users[username]) {
            alert('Username already exists!');
            return;
        }

        users[username] = {
            password: password,
            name: name,
            email: email,
            progress: {}
        };

        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        registerModal.style.display = 'none';
        registerForm.reset();
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Logout Handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'powerbi-app.html';
    });
}

// Check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const isLoginPage = window.location.pathname.includes('powerbi-app.html') ||
                       window.location.pathname === '/';

    if (!currentUser && !isLoginPage) {
        window.location.href = 'powerbi-app.html';
    }
}

// Run auth check on protected pages
if (window.location.pathname.includes('dashboard') ||
    window.location.pathname.includes('course')) {
    checkAuth();
}

// Get current user data
function getCurrentUser() {
    const username = localStorage.getItem('currentUser');
    if (!username) return null;

    const users = JSON.parse(localStorage.getItem('users'));
    return { username, ...users[username] };
}

// Update user progress
function updateProgress(lessonId, completed) {
    const username = localStorage.getItem('currentUser');
    if (!username) return;

    const users = JSON.parse(localStorage.getItem('users'));
    if (!users[username].progress) {
        users[username].progress = {};
    }

    users[username].progress[lessonId] = {
        completed: completed,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('users', JSON.stringify(users));
}

// Get progress statistics
function getProgressStats() {
    const user = getCurrentUser();
    if (!user) return { total: 40, completed: 0, percentage: 0 };

    const progress = user.progress || {};
    const completedLessons = Object.keys(progress).filter(key => progress[key].completed);

    return {
        total: 40,
        completed: completedLessons.length,
        remaining: 40 - completedLessons.length,
        percentage: Math.round((completedLessons.length / 40) * 100)
    };
}

// Get weekly progress
function getWeeklyProgress() {
    const user = getCurrentUser();
    if (!user) return {};

    const progress = user.progress || {};
    const weeks = {};

    for (let week = 1; week <= 8; week++) {
        let completed = 0;
        for (let day = 1; day <= 5; day++) {
            const lessonId = `w${week}d${day}`;
            if (progress[lessonId] && progress[lessonId].completed) {
                completed++;
            }
        }
        weeks[week] = { completed, total: 5 };
    }

    return weeks;
}

// Initialize Dashboard
function initDashboard() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'powerbi-app.html';
        return;
    }

    // Update student name
    const studentNameEl = document.getElementById('studentName');
    if (studentNameEl) {
        studentNameEl.textContent = user.name;
    }

    // Update statistics
    const stats = getProgressStats();
    document.getElementById('totalLessons').textContent = stats.total;
    document.getElementById('completedLessons').textContent = stats.completed;
    document.getElementById('remainingLessons').textContent = stats.remaining;
    document.getElementById('progressPercentage').textContent = stats.percentage + '%';

    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    const progressLabel = document.getElementById('progressLabel');
    progressFill.style.width = stats.percentage + '%';
    progressLabel.textContent = stats.percentage + '% Complete';

    // Update weekly progress
    const weeklyProgress = getWeeklyProgress();
    const weeksGrid = document.getElementById('weeksGrid');
    weeksGrid.innerHTML = '';

    for (let week = 1; week <= 8; week++) {
        const weekData = weeklyProgress[week];
        const weekPercentage = (weekData.completed / weekData.total) * 100;

        const weekCard = document.createElement('div');
        weekCard.className = 'week-card';
        weekCard.innerHTML = `
            <h3>Week ${week}</h3>
            <div class="week-progress-bar">
                <div class="week-progress-fill" style="width: ${weekPercentage}%"></div>
            </div>
            <p>${weekData.completed} / ${weekData.total} lessons</p>
        `;
        weeksGrid.appendChild(weekCard);
    }

    // Update recent activity
    updateRecentActivity();
}

// Update recent activity
function updateRecentActivity() {
    const user = getCurrentUser();
    if (!user || !user.progress) return;

    const activityList = document.getElementById('activityList');
    const activities = Object.entries(user.progress)
        .filter(([_, data]) => data.completed)
        .sort((a, b) => new Date(b[1].timestamp) - new Date(a[1].timestamp))
        .slice(0, 5);

    if (activities.length === 0) {
        activityList.innerHTML = '<p class="no-activity">No recent activity. Start learning now!</p>';
        return;
    }

    activityList.innerHTML = activities.map(([lessonId, data]) => {
        const lessonEl = document.querySelector(`[data-lesson-id="${lessonId}"]`);
        const lessonTitle = lessonEl ? lessonEl.querySelector('.lesson-title').textContent : lessonId;
        const date = new Date(data.timestamp);
        const timeAgo = getTimeAgo(date);

        return `
            <div class="activity-item">
                <span class="activity-icon">✅</span>
                <div class="activity-content">
                    <p class="activity-title">${lessonTitle}</p>
                    <p class="activity-time">${timeAgo}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Get time ago string
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';

    return 'Just now';
}

// Initialize Course Page
function initCoursePage() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'powerbi-app.html';
        return;
    }

    const progress = user.progress || {};

    // Load saved progress
    document.querySelectorAll('.lesson-checkbox').forEach(checkbox => {
        const lessonId = checkbox.id;
        if (progress[lessonId] && progress[lessonId].completed) {
            checkbox.checked = true;
            checkbox.closest('.lesson-item').classList.add('completed');
        }

        // Add event listener
        checkbox.addEventListener('change', function() {
            const isCompleted = this.checked;
            updateProgress(lessonId, isCompleted);

            if (isCompleted) {
                this.closest('.lesson-item').classList.add('completed');
            } else {
                this.closest('.lesson-item').classList.remove('completed');
            }

            updateCourseStats();
        });
    });

    updateCourseStats();
}

// Update course statistics
function updateCourseStats() {
    const stats = getProgressStats();

    // Update header progress
    const courseProgressText = document.getElementById('courseProgressText');
    if (courseProgressText) {
        courseProgressText.textContent = `${stats.completed} of ${stats.total} lessons completed`;
    }

    const miniProgressFill = document.getElementById('miniProgressFill');
    if (miniProgressFill) {
        miniProgressFill.style.width = stats.percentage + '%';
    }

    // Update week progress badges
    const weeklyProgress = getWeeklyProgress();
    for (let week = 1; week <= 8; week++) {
        const weekData = weeklyProgress[week];
        const weekProgressEl = document.querySelector(`.week-progress[data-week="${week}"]`);
        if (weekProgressEl) {
            weekProgressEl.textContent = `${weekData.completed}/${weekData.total} completed`;
        }
    }
}
