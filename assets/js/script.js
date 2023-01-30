//Constantes

const listaFinal = document.querySelector(".listaTareas")
const inputTarea = document.querySelector("#nuevaTarea")
const addButton = document.querySelector("#agregarTarea")
const contadorTotalTareas = document.querySelector("#cuenta-tareas")
const contadorTareasRealizadas = document.querySelector("#cuenta-realizadas")
const listaTareas = []

addButton.addEventListener("click", () => {
    agregarTarea()
})

inputTarea.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        agregarTarea()
    }
})



const agregarTarea = () => {
    if (inputTarea.value == "") {
        alert("Favor completar campo.")
    }
    else {
        const nombreTarea = { id: Date.now(), nombre: inputTarea.value, check: false }
        listaTareas.push(nombreTarea)
        inputTarea.value = ""
        renderTareas()
    }
}



function borrar(id) {
    const index = listaTareas.findIndex((ele) => ele.id == id)
    listaTareas.splice(index, 1)
    if (contadorTareasRealizadas.innerHTML == 0) {
        
    }
    else {
        contadorTareasRealizadas.innerHTML -= 1
    }
    renderTareas()
}



function checkButton(id) {
    const index = listaTareas.findIndex((ele) => ele.check == false)
    console.log(index)
    listaTareas[index].check = true
    console.log(index)
    const result = listaTareas.filter(tarea => tarea.check == true).length
    console.log(result)
    contadorTareasRealizadas.innerHTML = result
    renderTareas()
}




function renderTareas() {
    let html = ""
    let totalTareas = 0
    listaTareas.forEach(tarea => {
        html += `
            <li>${tarea.nombre} 
            <button class="btnList1" id="buttonRealizado" onclick="checkButton()">Listo</button> 
            <button class="btnList2" id="buttonBorrar" onclick="borrar(${tarea.id})">Borrar</button> 
            </li>
            
        `
        totalTareas += 1
    })
    listaFinal.innerHTML = html
    contadorTotalTareas.innerHTML = totalTareas
}