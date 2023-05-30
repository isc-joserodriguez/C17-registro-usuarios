import { loginBtn } from './DOMElements.js';
import { iniciarSesion } from './services/auth.js';
import { redirectOnLogin } from './utils.js';

redirectOnLogin();
loginBtn.addEventListener('click', iniciarSesion);
