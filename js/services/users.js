import { tablaUsuarios } from '../DOMElements.js';
export const getAllUsers = async () => {
  //! Petición que me obtenga los usuarios
  const { data } = await axios.get(
    'https://simple-server-ochre.vercel.app/users',
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
  data.data.forEach((user) => {
    tablaUsuarios.innerHTML += `
      <tr>
            <th scope="row">${user._id}</th>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>
            <button class="btn btn-primary">Mostrar</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
    `;
  });
};

export const getUser = async (id) => {
  //! Petición que me obtiene a un usuario
  const { data } = await axios.get(
    `https://simple-server-ochre.vercel.app/users/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
  console.log(data);
};

export const editUser = async (id, datos) => {
  //! Petición que me obtiene a un usuario
  const { data } = await axios.put(
    `https://simple-server-ochre.vercel.app/users/${id}`,
    datos, // JSON que recibe email, firstName, lastName
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
  console.log(data);
};

export const deleteUser = async (id) => {
  //! Petición que me obtiene a un usuario
  const { data } = await axios.delete(
    `https://simple-server-ochre.vercel.app/users/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
  console.log(data);
};

export const addUser = async (data) => {
  //! Petición que me obtiene a un usuario
  const { data } = await axios.post(
    `https://simple-server-ochre.vercel.app/users`,
    data,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
  console.log(data);
};
