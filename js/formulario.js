const random = document.getElementById('random');

window.addEventListener('load', () => {
    RandomNumber();
})

function RandomNumber() {
    let number = Math.random().toString().slice(2, 8);
    random.value = number;
}

function habilitar(){
    nombre = document.getElementById('name').value;
    email = document.getElementById('email').value;

    val = 0;

    if (nombre == "") {
        val++;
    }
    if (email == "") {
        val++;
    }
    if (val == 0) {
        document.getElementById('btn').disabled = false;
    }else{
        document.getElementById('btn').disabled = true;
    }
}
document.getElementById('name').addEventListener("keyup",habilitar);
document.getElementById('email').addEventListener("keyup",habilitar);
