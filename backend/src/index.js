const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/itens', itemRoutes);
app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
