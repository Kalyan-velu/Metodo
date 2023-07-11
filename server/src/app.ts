import express from 'express';
import "dotenv/config"
import UserRouter from "./routes/User.route"
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user',UserRouter)
const PORT=process.env.PORT
app.listen(PORT, () => {
  return console.log(`Server is listening at http://localhost:${PORT}`);
});