import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario (nome) {
    return usuariosColecao.findOne({
        nome
    });
}

function cadastrarUsuario({usuario, senha}) {
    return usuariosColecao.insertOne({
        nome: usuario,
        senha: senha
    });
}

export {cadastrarUsuario, encontrarUsuario};