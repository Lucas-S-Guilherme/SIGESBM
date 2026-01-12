const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); //Para o servidor entender JSON

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
        return;
    }
    console.log('Conectando ao banco SIGESC!');
});

//Rota para listar combatentes
