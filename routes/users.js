import express from 'express';
import * as userService from '../controllers/users.js';
const userRouter = express.Router();


userRouter.get('/users', userService.users);
userRouter.post('/user', userService.createUser);

export default userRouter;