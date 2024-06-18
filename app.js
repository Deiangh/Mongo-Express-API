const express = require('express');
const connectDB = require('./db');

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
