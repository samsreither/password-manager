const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// // schema for storing password and title
// const passwordSchema = new mongoose.Schema({
//     password: String,
//     title: String,
//   });

// // model
// const Password = mongoose.model('Password', passwordSchema);

mongoose.connect('mongodb+srv://samsreither:<db_password>@password-manager.54xbf.mongodb.net/?retryWrites=true&w=majority&appName=password-manager').then(() => {console.log('mongodb connected')}).catch((err) => console.error('mongodb connection error', err))

// app.post('/addpassword', (req, res) => {
//     const { password, title } = req.body;
// })

app.listen(3001, () => {
    console.log('Server is running')
})