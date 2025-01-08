    function createdate(){
    
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
            e.preventDefault();
        const name = document.getElementById('name').value
        const apellidos = document.getElementById('apellidos').value
        const telefono = document.getElementById('telefono').value
        const fechanacimiento = document.getElementById('fechanacimiento').value
        const diacita = document.getElementById('diacita').value
        const observaciones = document.getElementById('observaciones').value

        const date = {   
            name,
            apellidos,
            telefono,
            fechanacimiento,
            diacita,
            observaciones
        }
        const appointment = JSON.parse(localStorage.getItem('date'))  || []  
        appointment.push(date)
        console.log(appointment)
        localStorage.setItem('date', JSON.stringify(appointment))     
        alert('Cita reservada correctamente')

    })

    }
    createdate()