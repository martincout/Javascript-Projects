//fetchapi con randomuser API

const buttonAdd = document.getElementById('btn-add');
const buttonDelete = document.getElementById('btn-delete');
const containerUsers = document.getElementById('container-users');

buttonAdd.click( e => {
    descargarUsuarios(10);
});
buttonDelete.addEventListener('click', e => {
    var lists = containerUsers.querySelectorAll('li');
    lists.forEach(li => {
        li.remove();
    })
});


function descargarUsuarios(count){
    //direccion y cantidad
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    //llamado
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results)) //puede ser tambien console.log(datos.results)
}


function imprimirHTML(datos){
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const {name: {first}, name: {last}, picture: {medium}, nat}= usuario;

        li.innerHTML = `
            Nombre: ${first} ${last},
            Pais: ${nat}
            imagen: <img src="${medium}">
        `;

        containerUsers.appendChild(li);
    });
}