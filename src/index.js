const rootRouter = require('./Routes/rootRouter');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));
app.listen(8080);

const cors = require('cors');
app.use(cors());

app.use('/api', rootRouter);
