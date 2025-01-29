const express = require('express');
const Item = require('../models/item');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware(['operador', 'admin']), async (req, res) => {
    try {
        const novoItem = new Item(req.body);
        await novoItem.save();
        res.status(201).json(novoItem);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao criar item' });
    }
});

router.get('/', authMiddleware(['operador', 'admin']), async (req, res) => {
    try {
        const itens = await Item.find();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao listar itens' });
    }
});

router.put('/:id', authMiddleware(['operador', 'admin']), async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao atualizar item' });
    }
});

router.delete('/:id', authMiddleware(['operador', 'admin']), async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Item removido com sucesso' });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao deletar item' });
    }
});

module.exports = router;
