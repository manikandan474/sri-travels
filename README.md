# Sri Travels

Responsive React + Flask travel booking website for Sri Travels.

## Run the frontend

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal. The frontend is immediately usable with localStorage persistence for vehicles and bookings, so the booking, search, vehicle modal, My Bookings, and admin demo work without a database.

## Run the Flask API

```bash
cd backend
python -m venv .venv
.venv\\Scripts\\activate       # Windows
pip install -r requirements.txt
copy ..\\.env.example .env      # Windows
flask --app app init-db
python app.py
```

Create the `sri_travels` MySQL database first using `schema.sql`, then update `DATABASE_URL` in `.env`. The API lives under `/api` and includes vehicle listing/filtering, vehicle detail, bookings, admin login, vehicle CRUD, availability updates, booking status updates, and reviews.

## Admin demo

The browser demo login is `admin` / `admin123`. Production API admin records should be inserted with a Werkzeug password hash.
