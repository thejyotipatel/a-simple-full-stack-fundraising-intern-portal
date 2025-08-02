# Intern Fundraising Portal

A simple full-stack fundraising intern portal built as part of a Full Stack Developer Internship

---

## Features

### Frontend (Next.js + Tailwind CSS)

- Dummy Login and Signup pages (no authentication)
- Dashboard with:
  - Intern name
  - Referral code (e.g., yourname2025)
  - Total donations raised (static/dummy)
  - Reward cards (Bronze, Silver, Gold)
- Leaderboard with dummy donation
- Responsive Navbar with mobile toggle menu

### Backend (Fake API)

- Static JSON-based API using Next.js API routes
- Mocked endpoints for intern data, reward and leaderboard

---

## Tech Stack

| Tech               | Use                                                                      |
| ------------------ | ------------------------------------------------------------------------ |
| Next.js            | Full Stack Framework & API Routes (Fake Backend)                         |
| Tailwind CSS       | Styling & Responsive Design                                              |
| Next.js API Routes | Static JSON-based API for intern, reward, leaderboard (mocked endpoints) |

---

## API Endpoints (Dummy)

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | `/api/intern`      | Returns intern details   |
| GET    | `/api/reward`      | Returns reward data      |
| GET    | `/api/leaderboard` | Returns leaderboard data |

> Testable via Postman or browser, and use following endpoints offline to test API.

```bash
# Returns intern details
http://localhost:3000/api/intern

# Returns reward details
http://localhost:3000/leaderboard

# Returns leaderboard details
http://localhost:3000/leaderboard
```

## 🖼️ UI Screenshots

- Login / Signup pages
<img width="1366" height="599" alt="Intern-Dashboard-App-4" src="https://github.com/user-attachments/assets/632b633c-e9e5-4d6a-8b17-f4119a5063c9" />
<img width="1366" height="634" alt="Intern-Dashboard-App-3" src="https://github.com/user-attachments/assets/7ead75db-703f-47a2-ba7b-fd06e229f31a" />

- Dashboard and Rewards section
<img width="1366" height="581" alt="Intern-Dashboard-App-1" src="https://github.com/user-attachments/assets/5f9b2a7c-0703-4463-8a94-fbaf71a30053" />

- Leaderboard
<img width="1364" height="567" alt="Intern-Dashboard-App-2" src="https://github.com/user-attachments/assets/d49f755b-aec0-43c7-8fee-4b2556548584" />

- Responsive Navbar with mobile toggle menu
<img width="500" height="640" alt="image" src="https://github.com/user-attachments/assets/57960f31-bb64-4816-be48-b5ba9909b9ea" />

---

## Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/yourusername/fundraising-portal.git
cd fundraising-portal
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
