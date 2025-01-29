const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    tipo: { type: String, enum: ['admin', 'operador'], required: true },
    senha: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

async function criarAdmin() {
    const adminExiste = await Usuario.findOne({ email: 'admin@app.com' });

    if (!adminExiste) {
        const senhaCriptografada = await bcrypt.hash('admin', 10);
        await Usuario.create({
            nome: 'Administrador',
            email: 'admin@mail.com',
            login: 'admin',
            tipo: 'admin',
            senha: senhaCriptografada
        });

    }
}

criarAdmin().catch(err => {});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuarios', 'app-inventario');
