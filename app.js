const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const validateDecimal = require('./validateDecimal');

// AQUI: Criação da aplicação Express (isso que estava faltando!)
const app = express();

// Carrega o arquivo de documentação do Swagger
try {
  const swaggerDocument = YAML.load('./documentacao.yml');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (error) {
  console.error("Erro ao carregar documentacao.yml:", error.message);
}

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API rodando! Acesse http://localhost:3000/api-docs para ver o Swagger.');
});

// Rota de conversão para binário
app.get('/to-binary/:decimal', (req, res) => {
  const { decimal } = req.params;

  if (!validateDecimal(decimal)) {
    return res.status(400).json({ error: "Número decimal inválido" });
  }

  const num = parseInt(decimal, 10);
  const binary = num.toString(2);

  return res.status(200).json({
    decimal: num,
    binary: binary
  });
});

module.exports = app;