import { registroBtn } from './DOMElements.js';
import { registrarUsuario } from './services/auth.js';
import { redirectOnLogin } from './utils.js';
redirectOnLogin();
registroBtn.addEventListener('click', registrarUsuario);
