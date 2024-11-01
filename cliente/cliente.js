const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos da pasta cliente
app.use(express.static(path.join(__dirname, 'cliente')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'cliente', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});