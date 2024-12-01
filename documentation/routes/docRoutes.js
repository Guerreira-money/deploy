import { Router } from 'express';
import  { docApi } from '../controllers/docController.js';
import { getIntroduction, getConfiguration, getDependencies, getArchitecture } from '../controllers/docController.js';






const router = Router();

// Rota para documentação Swagger (pública ou login-redirecionado)
router.get('/api-doc', docApi);
console.log("Rota de usuários")

// Rotas protegidas para arquivos de documentação
router.get('/introduction', getIntroduction);
router.get('/configuration', getConfiguration);
router.get('/dependencies', getDependencies);
router.get('/architecture', getArchitecture);





export default router;



