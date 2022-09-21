import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Tanuja",
        lastName: "Shinde",
        age: 23
    }
]

router.get('/', (req, res) => {
    console.log(users)
    res.send("Hello!!")
});

export default router;
