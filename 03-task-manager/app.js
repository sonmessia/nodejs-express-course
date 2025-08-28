const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())


app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log('Server is listening on port 3000...');
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};
start();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});