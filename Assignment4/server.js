const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const users = [];

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    users.push({ name, email, password });

    res.json({ message: "Registration Successful" });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.json({
            success: true,
            name: user.name
        });
    } else {
        res.json({
            success: false,
            message: "Invalid Credentials"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});