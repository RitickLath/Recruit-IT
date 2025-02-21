# API ENDPOINTS PLAN

# **1. AUTHENTICATION & USER MANAGEMENT (BASIC SETUP)**  
- **POST** `/api/auth/register` → Register new users (Job Seekers, Employers, Admins)  
- **POST** `/api/auth/login` → Authenticate users and generate JWT  
- **POST** `/api/auth/logout` → Log out user and invalidate session  
- **POST** `/api/auth/forgot-password` → Request password reset link  
- **POST** `/api/auth/reset-password` → Reset password with token  

---

# **2. USER PROFILE MANAGEMENT**  
- **GET** `/api/users/{userId}` → Get user profile  
- **PUT** `/api/users/{userId}` → Update user profile  
- **DELETE** `/api/users/{userId}` → Delete user account  

---

# **3. JOB LISTINGS (CORE FEATURE)**  
- **GET** `/api/jobs` → Get all job listings (filters: location, category, salary, etc.)  
- **GET** `/api/jobs/{jobId}` → Get a single job listing details  
- **POST** `/api/jobs` → Create a new job listing (Employer only)  
- **PUT** `/api/jobs/{jobId}` → Update job listing (Employer/Admin only)  
- **DELETE** `/api/jobs/{jobId}` → Delete job listing (Employer/Admin only)  

---

# **4. JOB APPLICATIONS (JOB SEEKERS' INTERACTION)**  
- **POST** `/api/jobs/{jobId}/apply` → Apply for a job (Job Seeker)  
- **GET** `/api/jobs/{jobId}/applications` → Get applications for a job (Employer)  
- **GET** `/api/users/{userId}/applications` → Get all job applications of a user  
- **DELETE** `/api/applications/{applicationId}` → Withdraw job application  

---

# **5. RESUME & FILE MANAGEMENT**  
- **POST** `/api/resume/upload` → Upload resume (PDF, DOCX)  
- **GET** `/api/resume/{userId}` → Get user resume  
- **DELETE** `/api/resume/{userId}` → Delete resume  

---

# **6. EMPLOYER DASHBOARD**  
- **GET** `/api/employers/{employerId}/jobs` → Get all jobs posted by employer  
- **GET** `/api/employers/{employerId}/applications` → Get all applications received  
- **PUT** `/api/employers/{employerId}/status` → Update job status (Open/Closed)  

---

# **7. ADMIN PANEL (USER & JOB MANAGEMENT)**  
- **GET** `/api/admin/users` → Get all users (Job Seekers & Employers)  
- **GET** `/api/admin/jobs` → Get all job listings  
- **DELETE** `/api/admin/jobs/{jobId}` → Remove job listing  
- **DELETE** `/api/admin/users/{userId}` → Delete user account  

---

# **8. SEARCH & FILTERING (ENHANCED USER EXPERIENCE)**  
- **GET** `/api/search/jobs` → Search jobs with filters (keywords, category, location, salary, etc.)  
- **GET** `/api/search/companies` → Search employers/companies  

---

# ADVANCED ENDPOINTS

# **9. NOTIFICATIONS & MESSAGING (REAL-TIME INTERACTION)**  
- **GET** `/api/notifications` → Get user notifications  
- **POST** `/api/notifications` → Send a new notification  
- **GET** `/api/messages/{userId}` → Get messages between job seekers and employers  

---

# **10. SUBSCRIPTIONS & PAYMENTS (PREMIUM FEATURES)**  
- **POST** `/api/payments/subscribe` → Subscribe to premium job posting features  
- **GET** `/api/payments/status` → Get user’s subscription status  
- **POST** `/api/payments/cancel` → Cancel subscription  

---

# **11. COMPANY & EMPLOYER PROFILES**  
- **GET** `/api/companies` → Get list of companies  
- **GET** `/api/companies/{companyId}` → Get company profile  
- **POST** `/api/companies` → Register a new company profile  
- **PUT** `/api/companies/{companyId}` → Update company details  

---

# **12. REVIEWS & RATINGS (FEEDBACK SYSTEM)**  
- **POST** `/api/reviews` → Submit a review for an employer  
- **GET** `/api/reviews/{companyId}` → Get reviews for a company  

---

# **13. ANALYTICS & REPORTS (BUSINESS INTELLIGENCE)**  
- **GET** `/api/analytics/jobs` → Get job posting analytics  
- **GET** `/api/analytics/users` → Get user activity analytics  

