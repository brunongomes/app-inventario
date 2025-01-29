const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({}, '-senha');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar usuários' });
    }
};

const registerUsuario = async (req, res) => {
    try {
        const { nome, email, login, tipo, senha } = req.body;

        let usuario = await Usuario.findOne({ email });
        if (usuario) return res.status(400).json({ msg: 'Usuário já existe' });

        const hashedSenha = await bcrypt.hash(senha, 10);
        usuario = new Usuario({ nome, email, login, tipo, senha: hashedSenha });

        await usuario.save();
        res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao cadastrar usuário' });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { nome, email, login, tipo, senha } = req.body;
        const { id } = req.params;

        let usuario = await Usuario.findById(id);
        if (!usuario) return res.status(404).json({ msg: 'Usuário não encontrado' });

        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;
        usuario.login = login || usuario.login;
        usuario.tipo = tipo || usuario.tipo;

        if (senha) {
            usuario.senha = await bcrypt.hash(senha, 10);
        }

        await usuario.save();
        res.json({ msg: 'Usuário atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao atualizar usuário' });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        let usuario = await Usuario.findById(id);
        if (!usuario) return res.status(404).json({ msg: 'Usuário não encontrado' });

        await Usuario.findByIdAndDelete(id);
        res.json({ msg: 'Usuário deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao deletar usuário' });
    }
};

module.exports = { getUsuarios, registerUsuario, updateUsuario, deleteUsuario };
