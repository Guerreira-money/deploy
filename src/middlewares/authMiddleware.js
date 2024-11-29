import admin from '../config/firebaseAdmin.js';



export const verifyAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token não fornecido ou inválido." });
    }

    const token = authHeader.split(" ")[1];

    // Verifica e decodifica o token
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.auth = { uid: decodedToken.uid }; // Salva o UID no objeto req

   
    next(); // Passa para o próximo middleware ou controlador
  } catch (error) {
   
    return res.status(403).json({ message: "Token inválido ou expirado." });
  }
};

