function miFuncion() {
    // Obtén el elemento div por su id
    let alert = document.getElementById('Alerta');
    
    // Modifica su contenido utilizando innerHTML
    alert.innerHTML = '<div style="background-color: #fcc2c2;" class="h-20px"><p class="pt-2 pb-2 ms-3">Some fields are missing</p></div>';
    console.log('Hola mundo!');
    
    };
    
    function Cancel() {
        // Obtén el elemento div por su id
        let alert = document.getElementById('Alerta');
        
        // Modifica su contenido utilizando innerHTML
        alert.innerHTML = '<div></div>';
        console.log('Adios mundo!');
        
        };
    