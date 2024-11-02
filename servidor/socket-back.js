import "dotenv/config";

import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastros.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuarios.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
