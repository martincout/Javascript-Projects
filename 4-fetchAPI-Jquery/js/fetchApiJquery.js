//fetchapi con randomuser API

var buttonAdd = $("#btn-add");
var buttonDelete = $("#btn-delete");
var containerUsers = $("#container-users");
var numberUsers = $(".numberUsers");

document.addEventListener('keydown', e => {
    if(e.key == "Enter"){
        descargarUsuarios(numberUsers.val());
    }
})

buttonAdd.bind('click', function() {
    descargarUsuarios(numberUsers.val());
});
buttonDelete.bind('click', e => {
    $("#container-users li").remove();
});

function descargarUsuarios(count){
    if(count < 1)
        count = 1;
    if(count >= 100){
        count = 100;
    }
    $.ajax({
        method: "GET",
        url: `https://randomuser.me/api/?results=${count}`,
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
    $("#container-users li").remove();
    var i = 1;
    datos.forEach(usuario => {

        const li = document.createElement('li');

        const {name: {first}, name: {last}, picture: {medium}, nat}= usuario;

        li.innerHTML = `
            <img src="${medium}">
            Nombre:<b> ${first} ${last}</b>,
            Pais: ${nat}
            <p> ${i}</p>
        `;
        containerUsers.append(li);
        i++;
    });
}