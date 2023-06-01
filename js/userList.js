import { deleteUser, getAllUsers } from './services/users.js';
const getUsers = async () => {
  const usersList = await getAllUsers();
  usersList.forEach((user) => {
    console.log('eliminar-' + user._id);
    document
      .getElementById('eliminar-' + user._id)
      .addEventListener('click', async (event) => {
        await deleteUser(user._id);
        getUsers();
      });
  });
};

//! Propagación de eventos
/* document.body.addEventListener('click', (event) => {
  if (event.target.id.includes('eliminar-')) {
    console.log('Se va a eliminar el elemento', event.target.id.split('-')[1]);
    // await deleteUser(event.target.id.split('-')[1])
  }
  if (event.target.id.includes('editar-')) {
    console.log('Se va a editar el elemento', event.target.id.split('-')[1]);
  }
  if (event.target.id.includes('mostrar-')) {
    console.log('Se va a mostrar el elemento', event.target.id.split('-')[1]);
  }
  console.log(event.target);
}); */

//window.eliminarUsuario = deleteUser;

getUsers();
