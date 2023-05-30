import {
  loginEmailInput,
  loginPasswordInput,
  registroEmailInput,
  registroFirstNameInput,
  registroLastNameInput,
  registroPasswordConfirmInput,
  registroPasswordInput,
} from './DOMElements.js';

export const getRegistroFormValues = () => {
  /* 
    const formValues = {
    firstName: registroFirstNameInput.value,
    lastName: registroLastNameInput.value,
    email: registroEmailInput.value,
    password: registroPasswordInput.value,
    passwordConfirm: registroPasswordConfirmInput.value,
  };
    */
  const valorNombre = registroFirstNameInput.value;
  const valorApellido = registroLastNameInput.value;
  const valorEmail = registroEmailInput.value;
  const valorPass = registroPasswordInput.value;
  const valorPassConfirm = registroPasswordConfirmInput.value;

  return {
    firstName: valorNombre,
    lastName: valorApellido,
    email: valorEmail,
    password: valorPass,
    confirmacion: valorPassConfirm,
    otroKey: 'VALOR EQUIS',
  };
};

export const getLoginFormValues = () => {
  const valorEmail = loginEmailInput.value;
  const valorPass = loginPasswordInput.value;

  return {
    email: valorEmail,
    password: valorPass,
  };
};

export const redirectOnLogin = () => {
  const token = localStorage.getItem('token');
  if (token) {
    alert('Ya iniciaste sesión');
    window.location.replace('./usuarios.html');
  }
};
