const tabla = document.getElementById('tabla');

const viejos = localStorage.getItem("residentes");
const datos = viejos ? JSON.parse(viejos) : [];

console.log(datos);

if (datos.length !== 0) {
    tabla.style.display = "table";
    document.getElementById('vacio').style.display = "none";
} else {
    tabla.style.display = "none";
    document.getElementById('vacio').style.display = "block";
}

for (let i = 0; i < datos.length; i++) {
    tabla.innerHTML += `
                            <tr>
                                <td>${datos[i].nombre}</td>
                                <td>${datos[i].cedula}</td>
                                <td>${datos[i].apartamento}</td>
                                <td>${datos[i].fecha}</td>
                                <td>${datos[i].hora_i}</td>
                                <td>${datos[i].hora_f}</td>
                                <td>${datos[i].motivo}</td>
                                <td><input type="checkbox" onclick=actualizarCheck(this) data-index=${i} ${datos[i].check ? "checked" : ""}></td>
                                <td><p id="eliminar" onclick=eliminarCheck(this)>🗑️</p></td>
                            </tr>
                        `;
}

function actualizar() {
    location.reload();
}

function actualizarCheck(checkbox) {
    const index = checkbox.dataset.index;
    const estado = checkbox.checked;

    console.log(index, estado);

    const datos = JSON.parse(localStorage.getItem("residentes"));
    datos[index].check = estado;

    console.log(datos);

    localStorage.setItem("residentes", JSON.stringify(datos));
}

function eliminarCheck(eliminar) {
    const index = eliminar.parentElement.previousElementSibling.querySelector('input').dataset.index;

    const datos = JSON.parse(localStorage.getItem("residentes"));
    datos.splice(index, 1);

    localStorage.setItem("residentes", JSON.stringify(datos));
    location.reload();
}