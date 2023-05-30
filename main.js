import { loginBtn, registroBtn } from './js/DOMElements.js';
import { iniciarSesion, registrarUsuario } from './js/services/auth.js';

registroBtn.addEventListener('click', registrarUsuario);

loginBtn.addEventListener('click', iniciarSesion);
