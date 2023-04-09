import mysql from 'mysql2/promise';
import {DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE} from '../config.js'
// create the connection to database
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_DATABASE
  });
  
export default pool;