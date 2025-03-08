# Todo List App

A simple Todo List application built with Express.js, Prisma, Swagger, and MySQL2.

## Technologies Used

- **Express.js** - Backend framework
- **Prisma** - ORM for database management
- **Swagger** - API documentation
- **MySQL2** - MySQL client for Node.js

## Installation and Setup

Follow these steps to set up and run the application:

1. **Clone the repository**

   ```sh
   git clone https://github.com/stanislavstru/test-task-client-part.git ./
   ```

2. **Setup environment variables**

   - Rename `example.env` to `.env`.
   - Update `DATABASE_URL` with your database connection string.

3. **Run database migrations**

   ```sh
   npm run prisma:migrate:dev
   ```

4. **Build the project**

   ```sh
   npm run build
   ```

5. **Start the server**

   ```sh
   npm start
   ```

6. **Check if the server is running**
   - You should see:
     ```sh
     🚀 Server running on http://localhost:8000
     ```
   - Open Swagger documentation at: [http://localhost:8000/swagger](http://localhost:8000/swagger)

## API Documentation

This project uses Swagger for API documentation. Once the server is running, visit [http://localhost:8000/swagger](http://localhost:8000/swagger) to explore available endpoints.

## License

This project is licensed under the MIT License.
