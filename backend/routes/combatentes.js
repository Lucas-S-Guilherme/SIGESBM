const express = require('express');
const router = express.Router();
const db = require('../config/db'); 

router.get ('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM combatente');
        res.json(rows);        
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar Combatente'});
    }
});

router.get ('/', async (req, res) => {
    const { nome_combatente, cpf_combatente, data_nascimento_combatente, matricula_combatente } = req.body;
    try {
        const sql = 'INSERT  INTO combatente (nome_combatente, cpf_combatente, data_nascimento_combatente, matricula_combatente) VALUES (?, ?, ?, ?)';
        await db.query(sql, [nome_combatente, cpf_combatente, data_nascimento_combatente, matricula_combatente]);
        res.status(201).json({ message: 'Combatente salvo com sucesso!'});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;