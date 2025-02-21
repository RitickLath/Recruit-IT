# OVERVIEW

This job portal connects companies, HRs, and job seekers in a structured recruitment process. It ensures smooth hiring, job application tracking, and candidate management.

---

## USER ROLES & RESPONSIBILITIES

### 1️. ADMIN (COMPANY ADMIN)

- Registers himself.
- Registers a company profile.
- Adds HR managers to handle recruitment.
- Monitors job postings & hiring activities.

### 2️. HR (JOB MANAGER)

- Registers himself.
- Must be verified to create & manage job postings.
- Reviews and shortlists candidates.
- Updates application status (Pending → Reviewed → Accepted/Rejected).

### 3️. APPLICANT (JOB SEEKER)

- Registers and creates a detailed profile.
- Searches & applies for jobs.
- Tracks application progress and receives updates.

---

## WORKFLOW SUMMARY

1️. Admin creates a company & adds HRs.  
2️. HR (only if verified) posts job listings under the company.  
3️. Applicants browse & apply for jobs.  
4️. HR reviews applications & updates status.  
5️. Shortlisted applicants get notified.

---

## SCHEMA RELATIONSHIPS

- Admin → Manages → Company & HRs
- HR (verified) → Manages → Job Postings & Applicants
- Applicant → Applies → Jobs & Tracks Status
