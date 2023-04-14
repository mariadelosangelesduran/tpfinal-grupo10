/*const tipoDoc = document.getElementById("tipo_dni")
const numDoc = document.getElementById("documento")*/



fetch("../db-json/database.json")
    .then(response => response.json())
    .then(data => {
    
        for (const personaje of data){`
            <div>
                <h2>${personaje.nombre}</h2>
            </div>
            `
        }
    })

