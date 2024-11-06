import mysql from 'mysql2/promise';
import sequel from 'sequelize';
import dotenv from '@dotenvx/dotenvx';
dotenv.config();

//console.log(process.env);
/*export const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    psssword:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise;*/

const sequel2 = new sequel('pro','root','Cupcake10124',{
  host: process.env.MYSQL_HOST,
  dialect: 'mysql'
  
});

try {
  await sequel2.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


export async function getPersons(){
    try {
      
     const [rows] = await sequel2.query('SELECT * FROM pro.person');
      return rows;
     /*const [rows] = await pool.query('SELECT * FROM pro.person');
      if (rows) { // Check if rows exist
        return rows;
      } else {
        console.error('No results found from query');
        return []; // Return an empty array if no results
      }*/
    } catch (error) {
      console.error('Error getting database:', error);
      throw error; // Re-throw the error to handle it in the calling function   
  
    }
  }
  export async function getPerson (id){
      try {const [rows] = await sequel2.query('SELECT * FROM pro.person WHERE Numid = ?', [id]);
      console.log[rows];
      return rows[0];
      }catch (error) {
        console.error('Error getting person:', error);
        throw error; // Re-throw the error to handle it in the calling function
      }
    }
    
    export async function createPerson (firstname, lastname, phonenum, email, focus, age){
        try {
            const [result] = await sequel2.getQueryInterface('INSERT INTO pro.person (first_name, last_name, phone_num, email, career_foc, age) VALUES(?, ?, ?, ?, ?, ?)', [firstname, lastname, phonenum, email, focus, age]);
            const id = result.insertId;
            console.log(id);
            const person = await this.getPerson(id);
            return person;
        } catch (error) {
            console.error('Error creating person:', error);
            throw error; // Re-throw the error to handle it in the calling function   
        
          }
    }

    export default{
      getPersons,
      getPerson,
      createPerson
    }
