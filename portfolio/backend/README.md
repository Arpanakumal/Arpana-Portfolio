Getting contact emails working

1) Create a `.env` file in this folder based on `.env.example` and set your values.

2) If you use Gmail:
   - Ensure your Google account has 2-Step Verification enabled.
   - Create an "App Password" for "Mail" and the device "Other" in your Google Account Security settings.
   - Use your Gmail address for `EMAIL_USER` and the generated App Password for `EMAIL_PASS`.

3) If you use another SMTP provider, uncomment and set `EMAIL_HOST`, `EMAIL_PORT`, and `EMAIL_SECURE` in your `.env`.

4) Ensure the frontend `VITE_API_URL` points to this backend (e.g., `http://localhost:5000`).

5) If the contact form still fails, check backend logs — `server.js` logs env variable loading and SMTP verification errors.

6) When deploying, set the same env vars in your hosting provider (Vercel/Render/Heroku) — do not commit `.env` to source control.
