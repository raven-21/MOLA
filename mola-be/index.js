import express from 'express';
import cors from 'cors';

import loanRoutes from './routes/loan.js';
import userRoutes from './routes/user.js'

const app = express();
const PORT = 5000;
//CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTES
app.use('/loan', loanRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
	res.send('Olivia is running!')
});

app.listen(PORT, () => console.log(`Server Running on port: http://192.168.0.145:${PORT}`));