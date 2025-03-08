import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import taskRoutes from './routes/taskRoutes';
import { responseWrapper, errorHandler } from './untils/responseMidlleware';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(responseWrapper);
app.use(errorHandler);

// Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/tasks', taskRoutes);

export default app;
