# Next.js CRUD API with TypeScript, Prisma, and PostgreSQL

This project is a Next.js application that implements a CRUD API for managing "Stanje" entries using TypeScript, Prisma, and PostgreSQL.

## Features

- Create, Read, Update, and Delete operations for the "Stanje" model.
- Dynamic routing for accessing specific "Stanje" entries by ID.
- Utilizes Prisma as an ORM for database interactions.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- PostgreSQL database
- A code editor (e.g., VSCode)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nextjs-crud-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and create a `.env` file in the root directory with the following content:

   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

   Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your PostgreSQL credentials.

4. Run the Prisma migration to set up the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/stanje`.

### API Endpoints

- `GET /api/stanje` - Retrieve all "Stanje" entries.
- `POST /api/stanje` - Create a new "Stanje" entry.
- `GET /api/stanje/[id]` - Retrieve a specific "Stanje" entry by ID.
- `PUT /api/stanje/[id]` - Update a specific "Stanje" entry by ID.
- `DELETE /api/stanje/[id]` - Delete a specific "Stanje" entry by ID.

### License

This project is licensed under the MIT License.