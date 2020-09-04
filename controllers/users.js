import userList from '../userList.json';
import {v4 as uuidv4} from 'uuid';

let userCollection = []; //userList.slice(0);

function users (req,res) {
    res.send(userCollection);
}

function createUser(req,res) {
    userCollection.push({...req.body , id:uuidv4()});
    res.send(userCollection);
}

export {
    users,
    createUser
}