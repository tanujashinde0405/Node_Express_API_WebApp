import express from 'express';
import { v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = []

router.post('/', (req, res) => {
    const user = req.body;
    const userWithID = {...user, id: uuidv4()}
    users.push(userWithID);
    res.send(`User with the name ${user.firstName} added to the database`);
})

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    console.log(foundUser);
    res.send(foundUser);
})

export default router;
