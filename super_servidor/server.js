const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/jogos', (req, res) => {
    const nomeJogo = req.body.jogo;
    const caminhoJogo = path.join(__dirname, 'jogos', `${nomeJogo}`); 

    res.sendFile(caminhoJogo, (err) => {
        if (err) {
            console.error("Erro ao enviar o arquivo:", err);
            res.status(404).json({ erro: 'Jogo não encontrado' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
