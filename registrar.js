document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('miFormulario');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
      ImprimirTabla()
  
    });
  });
  

function ImprimirTabla() {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
    
        // Obtener los valores de los campos del formulario
        const curso = document.getElementById('curso').value;
        const codigo = document.getElementById('codigo').value;
        const facultad = document.getElementById('facultad').value;
        const periodo = document.getElementById('periodo').value;
        const escuela = document.getElementById('escuela').value;
        const ciclo = document.getElementById('ciclo').value;
        const anio = document.getElementById('anio').value;
        const credito = document.getElementById('credito').value;
        const sumilla = document.getElementById('sumilla').value;
        const docente = document.getElementById('docente').value;
    
        // Crear un objeto con la información del formulario
        const formularioData = {
          curso,
          codigo,
          facultad,
          periodo,
          escuela,
          ciclo,
          anio,
          credito,
          sumilla,
          docente
        };

        var Escuela = ["Software", "Software", "Software", "Sistemas", "Sistemas", "Sistemas"]
        var Sede = ["Central", "Central", "Central", "Central", "Central", "Central"]
        var Curso = ["Algoritmica II", "Algoritmica I", "Quimica", "Redes", "Algoritmica II", "Calculo I"]
        var Año = [2018, 2018, 2018, 2018, 2018, 2018]
        var Créditos = [5.0, 5.0, 5.0, 5.0, 5.0, 5.0]
        var Estado = ["Visado", "Visado", "Visado", "Visado", "Visado", "Visado"] 
    
        Escuela.unshift(formularioData.escuela)
        Sede.unshift("Central")
        Curso.unshift(formularioData.curso)
        Año.unshift(formularioData.anio)
        Créditos.unshift(formularioData.credito)
        Estado.unshift("Creado")

        const catalogoSyllabus = document.querySelector('.registro-syllabus');
        var stringDiv = `
        <div class="table-header">
            <h1>Repositorio de Syllabus</h1>
            <input name="search-course" type="text" placeholder="&#x1F50E; Buscar curso">
            <button>Filtrar</button>
        </div>
        <div class="table-actions">
            <button id="regresarBtn">Regresar</button>
            <button>Editar</button>
            <button>Visar</button>
        </div>
        <div name="table-contenedor" class="table-contenedor">
        `

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

        stringDiv = stringDiv + strHtml;
        stringDiv+=`
        </div>
        <div class="table-footer">
            <button>Refrescar</button>
        </div>
        `

        catalogoSyllabus.innerHTML = stringDiv
    });
}

