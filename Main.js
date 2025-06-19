const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
document.getElementById('fecha').min = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;

function enviarsolicitud() {
    const nombre = document.getElementById('nombre').value;
    const cedula = parseFloat(document.getElementById('cedula').value);
    const apartamento = parseFloat(document.getElementById('apartamento').value);
    const fecha = document.getElementById('fecha').value;
    const hora_i = document.getElementById('hora_i').value;
    const hora_f = document.getElementById('hora_f').value;
    const motivo = document.getElementById('motivo').value;

    const viejos = localStorage.getItem("residentes");
    const datos = viejos ? JSON.parse(viejos) : [];

    const residentes = {
        nombre: nombre,
        cedula: cedula,
        apartamento: apartamento,
        fecha: fecha,
        hora_i: hora_i,
        hora_f: hora_f,
        motivo: motivo,
        check: false
    };

    if (!residentes.nombre || !residentes.cedula || !residentes.apartamento || !residentes.fecha || !residentes.hora_i || !residentes.hora_f || !residentes.motivo) {
        document.getElementById("resultado").innerHTML = "❌ No hay datos guardados.";
    }

    datos.push(residentes);


    localStorage.setItem("residentes", JSON.stringify(datos));
    alert("✅ Información guardada correctamente.");
}

function validarHora() {
    const hora_i = document.getElementById('hora_i').value;
    const hora_f = document.getElementById('hora_f').value;

    console.log(hora_i, hora_f);
    if (hora_i >= hora_f) {
        alert("❌ La hora de inicio debe ser menor que la hora de finalización.");
        return;
    }
}