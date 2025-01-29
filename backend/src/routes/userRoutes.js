const express = require('express');
const {
    getUsuarios,
    registerUsuario,
    updateUsuario,
    deleteUsuario
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware(['admin']), getUsuarios);
router.post('/', authMiddleware(['admin']), registerUsuario);
router.put('/:id', authMiddleware(['admin']), updateUsuario);
router.delete('/:id', authMiddleware(['admin']), deleteUsuario);

module.exports = router;
