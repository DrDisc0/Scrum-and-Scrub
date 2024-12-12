import mysql from 'mysql2/promise';
import sequel from 'serialize-javascript';
import { DataTypes } from 'sequelize';
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

    const Person = sequel2.define('person',{
      tableName:'person',
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName:{
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull:true
      },
      phoneNumber:{
        type: DataTypes.STRING,
        allowNull:true
      },
      age:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
  
    });

    try {
      await sequel2.sync();
      console.log('Tables synchronized successfully.');
    } catch (error) {
      console.error('Error synchronizing tables:', error);
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
    
    export async function createPerson(firstName, lastname, phoneNumber, email, focus, age) {
      try {
          const person = await Person.create({
            firstName: firstName,
            //lastName: lastname,
            phonenum: phoneNumber,
            age:age
          })
      } catch (error) {
          console.error('Error creating person:', error);
          throw error;
      }
  }

    export default{
      getPerson,
      createPerson
    }
