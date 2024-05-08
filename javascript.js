var Escuela = ["Software", "Software", "Software", "Sistemas", "Sistemas", "Sistemas"]
var Sede = ["Central", "Central", "Central", "Central", "Central", "Central"]
var Curso = ["Algoritmica II", "Algoritmica I", "Quimica", "Redes", "Algoritmica II", "Calculo I"]
var Año = [2018, 2018, 2018, 2018, 2018, 2018]
var Créditos = [5.0, 5.0, 5.0, 5.0, 5.0, 5.0]
var Estado = ["Visado", "Visado", "Visado", "Visado", "Visado", "Visado"]

document.addEventListener("DOMContentLoaded", function() {
    ImprimirTabla("table-contenedor"); 
    console.log("Test");
});

function ImprimirTabla (nameAttribute){
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
            strHtml+='<td>&#128065;</td>';
        strHtml+='</tr>';
    }
        strHtml+='</tbody>';
    strHtml+='</table>';

    bodyElement.innerHTML = strHtml;
}
