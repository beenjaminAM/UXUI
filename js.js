document.addEventListener("DOMContentLoaded", function() {
    ImprimirTabla("table-contenedor"); 
    console.log("Test");

    // Agregar evento de escucha al input de búsqueda
    var searchInput = document.querySelector('input[name="search-course"]');
    searchInput.addEventListener("input", function() {
        FiltrarTabla(this.value.toLowerCase()); // Llama a la función FiltrarTabla con el valor del input
    });
});

function ImprimirTabla(nameAttribute) {
    var Escuela = ["Software", "Software", "Software", "Sistemas", "Sistemas", "Sistemas"]
    var Sede = ["Central", "Central", "Central", "Central", "Central", "Central"]
    var Curso = ["Algoritmica II", "Algoritmica I", "Quimica", "Redes", "Algoritmica II", "Calculo I"]
    var Año = [2018, 2018, 2018, 2018, 2018, 2018]
    var Créditos = [5.0, 5.0, 5.0, 5.0, 5.0, 5.0]
    var Estado = ["Visado", "Visado", "Visado", "Visado", "Visado", "Visado"]    

    var bodyElement = document.getElementsByName(nameAttribute)[0];

    var strHtml="";
    strHtml+='<table class="table-syllabus">';
        strHtml+='<thead>';
        strHtml+='<tr>';
            strHtml+='<th>Escuela</th>';
            strHtml+='<th>Sede</th>';
            strHtml+='<th>Curso</th>';
            strHtml+='<th>Año</th>';
            strHtml+='<th>Créditos</th>';
            strHtml+='<th>Estado</th>';
            strHtml+='<th>Descargar</th>';
            strHtml+='<th>Ver</th>';
            strHtml+='<th>Edit</th>';
        strHtml+='</tr>';
        strHtml+='</thead>';
        strHtml+='<tbody>';
    for(var j=0;j<Curso.length;j++)
    {
        strHtml+='<tr>';
            strHtml+='<td>'+Escuela[j]+'</td>';
            strHtml+='<td>'+Sede[j]+'</td>';
            strHtml+='<td>'+Curso[j]+'</td>';
            strHtml+='<td>'+Año[j]+'</td>';
            strHtml+='<td>'+Créditos[j]+'</td>';
            strHtml+='<td>'+Estado[j]+'</td>';
            strHtml+='<td>Descarga</td>';
            strHtml+='<td><a href="#">&#128065;</a></td>';
            strHtml+='<td><a href="#">&#9998;</a></td>';
        strHtml+='</tr>';
    }
        strHtml+='</tbody>';
    strHtml+='</table>';

    bodyElement.innerHTML = strHtml;
}

function FiltrarTabla(curso) {
    // Obtener la tabla y las filas
    var table = document.querySelector('.table-syllabus');
    var rows = table.querySelectorAll('tbody tr');

    // Recorrer las filas y mostrar/ocultar según el filtro
    rows.forEach(function(row) {
        var cursoRow = row.querySelector('td:nth-child(3)').textContent.toLowerCase(); // Obtener el texto del curso en la fila
        if (cursoRow.includes(curso)) { // Verificar si el curso en la fila coincide con el filtro
            row.style.display = ''; // Mostrar la fila si coincide
        } else {
            row.style.display = 'none'; // Ocultar la fila si no coincide
        }
    });
}
