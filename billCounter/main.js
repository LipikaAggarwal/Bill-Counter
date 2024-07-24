const express = require ('express');
const path = require ('path');
const mongoose = require ('mongoose');
var bodyParser = require ('body-parser');

const app = express();


app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.urlencoded({extended:true}));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

app.listen(5000);
console.log('listensing to port 5000...')

mongoose
    .connect("mongodb://127.0.0.1:27017/BillCounter")
    .then(()=> console.log("mongoose connected"))
    .catch((err)=> console.log("Error occured mongoose not connected",err));

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: string,
//         required:true,
//     },
//     lastname: {
//         type: string,
//     },
//     email: {
//         type: string,
//         required:true,
//         unique: true,
//     },
//     password: {
//         type: string,
//         required: true,
//     },
// });

// const users = mongoose.model("data", userSchema);

// app.post("/", async(req, res) => {
//     const {firstname,lastname,email,password}= req.body
//     const user = new users ({
//         firstname,
//         lastname,
//         email,
//         password,
//     });
//     await users.save()
//     console.log(user)
//     res.sendFile(path.join(__dirname, 'frontend', 'login.html'))
// });

