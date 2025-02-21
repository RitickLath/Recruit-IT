# API's

## AUTHENTICATION

- POST `/api/auth/register` – Register a new user (Admin, HR, or Applicant).
- POST `/api/auth/login` – Authenticate a user and return a JWT token.
- POST `/api/auth/signup` – Alternative registration endpoint.
- POST `/api/auth/forget-password` – Request a password reset link.
- POST `/api/auth/reset-password` – Reset password using a valid token.

---

## ADMIN

- POST `/api/admin/company` – Create a company.
- PUT `/api/admin/company/:companyId` – Update company details.
- PUT `/api/admin/hr/:hrId` – Approve or reject an HR.
- GET `/api/admin/jobs` – Get all jobs in a company.
- GET `/api/admin/companies` – Get a list of all registered companies.

---

## HR

- POST `/api/hr/job` – Create a job posting.
- PUT `/api/hr/job/:jobId` – Update job details.
- PUT `/api/hr/applicant/:applicantId` – Update applicant status.
- GET `/api/hr/jobs` – Get all jobs posted by HR.
- GET `/api/hr/job/:jobId/applicants` – Get all applicants for a job.
- DELETE `/api/hr/job/:jobId` – Delete a job posting.

---

## APPLICANT

- GET `/api/applicant/jobs` – Get all job listings.
- GET `/api/applicant/jobs/search?tag=:tagName` – Search jobs by tag.
- GET `/api/applicant/jobs/search?company=:companyName` – Search jobs by company.
- GET `/api/applicant/profile` – View applicant profile.
- PUT `/api/applicant/profile` – Update applicant profile.
- GET `/api/applicant/applied-jobs` – Get all applied jobs.
- GET `/api/applicant/application/:jobId` – Check job application status.
- POST `/api/applicant/upload-resume` – Upload or update resume.

---

## NOTES

- All protected routes require a valid JWT token in the `Authorization` header.
- Admins manage companies and approve HRs.
- HRs must be approved before posting jobs.
- Applicants need a profile before applying for jobs.
