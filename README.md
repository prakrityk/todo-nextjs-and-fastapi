Frontend:

Built with Next.js + React (v19) + Tailwind CSS

Hosted on Vercel

Uses Axios for HTTP requests

Reads API base URL from environment variable NEXT_PUBLIC_API_URL

Basic features:

List todos

Create todos

Toggle todo completion

Delete todos

Backend:

Built with FastAPI (Python)

Hosted on Render

Serves a REST API at endpoints like:

GET /todos

POST /todos

PUT /todos/{id}

DELETE /todos/{id}
