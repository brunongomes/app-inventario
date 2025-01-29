const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (tipoPermitido) => {
    return (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ msg: 'Acesso negado!' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            if (!tipoPermitido.includes(req.user.tipo)) {
                return res.status(403).json({ msg: 'Permissão insuficiente!' });
            }

            next();
        } catch (error) {
            res.status(401).json({ msg: 'Token inválido!' });
        }
    };
};

module.exports = authMiddleware;
