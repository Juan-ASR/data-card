const datos = {
    name: "fulano de tal",
    edad: "123456789",
    correo: "ema",
    telefono: "32012222",
    direccion: "dir",
    foto: "./img/placeholder-img.jpg"
}


function enviarDatos(event){
    event.preventDefault()

    datos.name = document.getElementById('name').value;
    datos.edad = document.getElementById('edad').value;
    datos.direccion = document.getElementById('dire').value;
    datos.telefono = document.getElementById('tele').value;
    datos.correo = document.getElementById('email').value;
    datos.foto = document.getElementById('foto').src
    volverPerfil()
}

function imagen(){
    document.getElementById('foto').src = prompt("Coloca la URL para tu foto de perfil.");
}

function mostrarFormulario(){
    document.getElementById("perfil").innerHTML = " "
    document.getElementById('parte1').innerHTML = `
    <form id="form1" onsubmit="enviarDatos(event)">
            <h1 id="1">Saludo Personalizado</h1>
    
            <div class="inputs">
                <label for="name">Nombre
                    <input type="text" id="name" required value="${datos.name}">
                </label>
    
                <label for="edad">Edad
                    <input type="number" id="edad" required value="${datos.edad}"> 
                </label>
    
                <label for="email">Email
                    <input type="email" id="email" required  value="${datos.correo}">
                </label>
    
                <label for="tele">Telefono
                    <input type="tel" id="tele" required  value="${datos.telefono}">
                </label>
    
                <label for="dire">Direccion
                    <input type="text" id="dire" required  value="${datos.direccion}">
                </label>
    
                <label for="imag">Foto de perfil
                    <button type="button" onclick="imagen()" id="btn-img">Seleccionar <img src="${datos.foto}" alt="fotoPerfil" id="foto"></button>
                </label>
            </div>
    
            <div class="btns">
                <button type="button" id="btn1" onclick="volverPerfil()">Cancelar</button>
                <button type="submit" id="btn2">Enviar</button>
            </div>
            
            <p id="saludo"></p>       
    
        </form>
    `
}

function volverPerfil(){
    document.getElementById("parte1").innerHTML = " "
    document.getElementById("perfil").innerHTML = `
        <h2 id="nom">${datos.name}</h2>
    
            <img src="${datos.foto}" alt="fotoPerfil" id="foto">
            
            <div class="info-f2">
                <div class="edad-i"><h4>Edad:</h4> <p>${datos.edad}</p></div>
                <div class="correo-i"><h4>Email: </h4> <p>${datos.correo}</p></div>
                <div class="tel-i"><h4>Telefono: </h4> <p>${datos.telefono}</p></div>
                <div class="dir-i"><h4>Direccion: </h4> <p>${datos.direccion}</p></div>
            </div>
    
            <button id="btn-f2" onclick="mostrarFormulario()">Modificar datos</button>
    `
}