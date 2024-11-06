import { v4 as uuidv4 } from 'uuid';
//import db from '../server/db_connections.js'
import { getPersons, getPerson, createPerson} from '../server/db_connections.js';
export const getUser = (req,res) =>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

export const getUsers = async (req,res)=>{
    try {
      const results = getPersons();
      const result = ('workingish');
      res.json(results);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    /*console.log(users);
    res.send(users);*/
  }
    


export const createUser = async (req, res) => {
        const {firstName, lastName, phoneNumber, email, careerFocus, age} = req.body;
        try {
          const results = createPerson(firstName, lastName, phoneNumber, email, careerFocus, age);
          res.json(results);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Error creating person' });
        }
        /*const user = req.body;
    users.push({ ...user, id:uuidv4()});
    res.send(`User with name ${user.name} added to database`);*/
      }
    











    export const deleteUser = (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database`);
 }

 export const updateUser = (req, res) => {
    const { id } = req.params;
    const {name, lastname, age} = req.body;
    const userUpdate = users.find((user) => user.id == id);

    if(name){
        userUpdate.name = name;
    }
    if(lastname){
        userUpdate.lastname = lastname;
    }
    if (age){
        userUpdate.age = age;
    }

    res.send(`user with the id ${ id } has been updated`);
}
