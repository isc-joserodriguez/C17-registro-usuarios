import { getLoginFormValues, getRegistroFormValues } from '../utils.js';

export const registrarUsuario = async () => {
  const objetoAEnviar = getRegistroFormValues();

  if (!/^(?=.*[A-Za-z])(?=.*)[A-Za-z]{5,}$/.test(objetoAEnviar.password)) {
    alert('Sólo puedes poner letras');
  } else if (objetoAEnviar.password === objetoAEnviar.confirmacion) {
    delete objetoAEnviar.confirmacion;
    delete objetoAEnviar.otroKey;
    /* 
    POST https://simple-server-ochre.vercel.app/register
     Body { firstName, lastName, email, password }
     */
    const { data } = await axios.post(
      'https://simple-server-ochre.vercel.app/register',
      objetoAEnviar
    );

    console.log(data);
  } else {
    alert('Password no coincide');
  }
};

export const iniciarSesion = async () => {
  const objetoAEnviar = getLoginFormValues();
  const { data } = await axios.post(
    'https://simple-server-ochre.vercel.app/login',
    objetoAEnviar
  );

  console.log(data);
};

export const getMyInfo = async () => {
  const { data } = await axios.get(
    'https://simple-server-ochre.vercel.app/user',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0ubG9wZXpAbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJtYXJpbyIsImxhc3ROYW1lIjoibG9wZXoiLCJpYXQiOjE2ODQ5ODQ4MjYsImV4cCI6MTY4NDk4ODQyNn0.o8YS6TrU3mcOm1i7HznV254WcYSdaktZFwVEJqe0KK8',
      },
    }
  );

  console.log(data);
};
