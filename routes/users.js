import express from 'express';

import { createUser, getUsers, getUserByID, deleteUser, updateUser } from '../conrollers/users.js';
const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
