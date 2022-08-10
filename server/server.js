const express = require('express');
const cors = require('cors');
const decodeToken = require('./middlewares');
const app = express();

const appRouter = require('./routes/appRoutes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(decodeToken);

app.use('/api/v1/app', appRouter);

//send post and listen for our request
const PORT = process.env.PORT || '8080';

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
