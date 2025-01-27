// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos=[];
let amigo="";
let contador=0;

function agregarAmigo(){ //Función que agrega un amigo a la lista de amigos
    if(listadoAmigos.length==0){//Valida si la lista de amigos está vacía
        document.getElementById("resultado").innerHTML="";//Limpia el resultado
    }
    amigo=document.getElementById("amigo").value;//Obtiene el valor del input
    if(amigo==""){//Valida si el input está vacío
        alert("Debe ingresar un amigo");//Muestra un mensaje de alerta
    }else if(listadoAmigos.includes(amigo)){//Valida si el amigo ya fue agregado
        alert("Ese amigo ya fue agregado");//Muestra un mensaje de alerta
    }else if(parseInt(amigo)){//Valida si el amigo es un número
        alert("El amigo no puede ser un número");//Muestra un mensaje de alerta
    }else{
    console.log(amigo);
    listadoAmigos.push(amigo);//Agrega el amigo a la lista de amigos
    document.getElementById("amigo").value="";// Limpia el input
   // actualizarListaAmigos();//Llama a la función que actualiza la lista de amigos
    renderizarColumnas();
    if(listadoAmigos.length>=2){//Valida si hay al menos 2 amigos en la lista
        document.getElementById("sortear").removeAttribute("disabled");//Habilita el botón sortear
        document.getElementById("sortear").style.backgroundColor="#fe652b";//Cambia el color del botón sortear
    }
    }//Fin del else
};

 function actualizarListaAmigos(){
 
    document.getElementById("listaAmigos").innerHTML="";//Limpia la lista de amigos
    listadoAmigos.forEach((amigo)=>{  //Recorre la lista de amigos
        contador++;
        document.getElementById("listaAmigos").innerHTML+=`<li>${amigo}</li>`;//Agrega los amigos a la lista en html
    });//Fin del forEach
};

function sortearAmigo(){
    if(listadoAmigos.length<2){//Valida si hay menos de 2 amigos en la lista
        alert("Debe agregar al menos 2 amigos");//Muestra un mensaje de alerta
        return;//Finaliza la función
    }
    let amigoSorteado=listadoAmigos[Math.floor(Math.random()*listadoAmigos.length)];//Obtiene un amigo aleatorio
    document.getElementById("resultado").innerHTML=`El amigo secreto sorteado es:${amigoSorteado}`;//Muestra el amigo sorteado
    document.getElementById("sortear").setAttribute("disabled","true");//Deshabilita el botón sortear
    document.getElementById("sortear").style.backgroundColor="gray";//Cambia el color del botón sortear
    document.getElementById("contenedor-columnas").innerHTML="";//Limpia la lista de amigos
    listadoAmigos=[];//Limpia la lista de amigos
}

// Función para renderizar las columnas en el HTML
function renderizarColumnas() {
    // Contenedor donde se colocarán las columnas
    const contenedor = document.getElementById('contenedor-columnas');
    contenedor.innerHTML = ''; // Limpiar contenido anterior

    // Crear columnas según los elementos
    for (let i = 0; i < listadoAmigos.length; i += 3) {
        // Crear columna
        const columna = document.createElement('div');
        columna.classList.add('columna'); // Clase CSS para las columnas

        // Agregar los elementos a la columna
        const grupo = listadoAmigos.slice(i, i + 3);
        grupo.forEach(item => {
            const elementoHTML = document.createElement('div');
            elementoHTML.textContent = item; // Agregar texto del elemento
            columna.appendChild(elementoHTML);
        });

        // Agregar columna al contenedor
        contenedor.appendChild(columna);
    }
}