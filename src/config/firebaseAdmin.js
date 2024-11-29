
import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath, 'utf-8'),
});
console.log('Firebase Admin inicializado com sucesso!');

export default admin;





