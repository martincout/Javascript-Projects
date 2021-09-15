//fetchapi con randomuser API

var buttonAdd = $("#btn-add");
var buttonDelete = $("#btn-delete");
var containerUsers = $("#container-users");

buttonAdd.bind('click', function() {
    descargarUsuarios(10);
});
buttonDelete.bind('click', e => {
    $("#container-users li").remove();
});

function descargarUsuarios(count){
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function(data) {
          imprimirHTML(data.results);
        },
        error: function(error){
            console.log(error);
        }
      });
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
        containerUsers.append(li);
    });
}