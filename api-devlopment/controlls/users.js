import { v4 as uuidv4 } from 'uuid';
import { getPerson, createPerson} from '../server/db_connections.js';

export const getUser = (req, res) => {
  const { id } = req.params;
  getPerson(id)
    .then(user => res.send(user))
    .catch(error => {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

export const getUsers = async (req, res) => {
  try {
    // Call getPerson with appropriate identifier (if needed)
    const users = await getPerson(/* identifier */);
    res.json(users);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
    


export const createUser = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, careerFocus, age } = req.body;

  try {
    // Use createPerson to create a new record in the database
    const newPerson = await createPerson(firstName, lastName, phoneNumber, email, careerFocus, age);
    res.json(newPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating person' });
  }
};










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
