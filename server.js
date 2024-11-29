import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes.js';
import logoutRoute from './src/routes/logoutRouter.js'; 
import taskRoutes from './src/routes/taskRouts.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
export const app = express();


// Middleware para parsear JSON
app.use(bodyParser.json());

// Usando as rotas de usuários
app.use('/api/users', userRoutes);
app.use('/api/users', logoutRoute);
app.use('/api/users', taskRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
