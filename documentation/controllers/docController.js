import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import fs from 'fs';
import path from 'path';



// Carregar o arquivo YAML da documentação
const swaggerDocument = YAML.load(path.resolve('documentation', 'documentation.yaml'));



// Função para servir a documentação
export const docApi = (req, res) => {
  console.log('Carregando a documentação Swagger...');
  return swaggerUi.setup(swaggerDocument)(req, res);
};



export const sendMarkdownFile = (res, fileName) => {
  // Ajuste o caminho do arquivo com base na estrutura do seu projeto
  const filePath = path.resolve('documentation', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao carregar o arquivo: ${filePath}`, err); // Log detalhado
      res.status(500).send(`Erro ao carregar o arquivo: ${fileName}. Verifique se ele existe.`);
    } else {
      res.type('text/plain').send(data);
    }
  });
};


// Controladores para os arquivos específicos
export const getIntroduction = (req, res) => {
  sendMarkdownFile(res, 'introduction.md');
};

export const getConfiguration = (req, res) => {
  sendMarkdownFile(res, 'configuration.md');
};

export const getDependencies = (req, res) => {
  sendMarkdownFile(res, 'dependencies.md');
};

export const getArchitecture = (req, res) => {
  sendMarkdownFile(res, 'architecture.md');
};

