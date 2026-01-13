const express = require('express');
const cors = require('cors');
const combatenteRoutes = require('./routes/combatentes'); // importa rotas

const app = express();
app.use(cors());
app.use(express.json()); //Para o servidor entender JSON

//diz ao express para usar o arquivo combatente.js à toda rota /combatentes

app.use('/combatentes', combatenteRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})