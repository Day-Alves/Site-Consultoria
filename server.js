const express = require('express');
const path = require('path');
const compression = require('compression');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

// Habilita compressão GZIP
app.use(compression());

// Configura o middleware para servir arquivos estáticos
app.use(serveStatic(path.join(__dirname), {
    index: ['index.html'],
    maxAge: '1d',
    setHeaders: (res, path) => {
        // Define os cabeçalhos de cache apropriados
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        } else {
            res.setHeader('Cache-Control', 'public, max-age=86400');
        }
    }
}));

// Rota para servir o index.html em todas as rotas não encontradas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 