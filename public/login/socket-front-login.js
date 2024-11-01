import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario (dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt", tokenJwt);

    alert("Autenticado com sucesso")
    window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Senha errada"));

socket.on("usuario_nao_encontrado", () => {alert("Usuario não encontrado")});

export {emitirAutenticarUsuario};