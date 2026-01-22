# Fursa

Fursa is a full-stack website that helps graduates find job opportunities, graduate development programs, and professional certifications.


## Tech Stack

### Frontend
- Next.js 15 with React 19
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- Strapi 5.17 CMS
- SQLite (development)
- TypeScript

## Project Structure

```
Fursa/
├── fursa/          # Next.js frontend
└── server/         # Strapi backend
```

## Getting Started


### Installation

1. Clone the repository
   ```bash
   git clone <https://github.com/RevanNasser/Fursa.git>
   cd Fursa
   ```

2. Install frontend dependencies
   ```bash
   cd fursa
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd ../server
   npm install
   ```


### Start Backend (Terminal 1)
```bash
cd server
npm run develop
```
Admin panel: `http://localhost:1337/admin`

### Start Frontend (Terminal 2)
```bash
cd fursa
npm run dev
```
Application: `http://localhost:3000`

### Environment Variables

**Frontend** (`.env.local` in `fursa/`):
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

**Backend** (`.env` in `server/`):
```env
HOST=0.0.0.0
PORT=1337
```


## API Endpoints

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get a specific job
- `POST /api/jobs` - Create job (requires auth)
- `PUT /api/jobs/:id` - Update job (requires auth)
- `DELETE /api/jobs/:id` - Delete job (requires auth)

