import 'dotenv/config';
import { db } from './src/db/clients';
import app from './index';

// port yang digunakan server
const PORT = process.env.PORT || 3000;

// memulai server
async function startServer() {

    // mencoba melakukan connection ke database
    try {
        await db.execute('SELECT 1');
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }

    // menjalankan server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// memanggil function
startServer()