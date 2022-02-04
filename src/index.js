import cipher from './cipher.js';

function cambiarAMayuscula(){
    document.getElementById("texto1").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    });
}
cambiarAMayuscula()

const btnCifrar = document.getElementById("cifrar");

btnCifrar.addEventListener("click", () => {
        let cifrado = document.getElementById("texto1").value;
        let saltosStr = document.getElementById("saltos").value;
        let saltos = parseInt(saltosStr);
        console.log(parseInt(""));
        document.getElementById("texto2").value = cipher.encode(saltos, cifrado);
    }
);

const btnDesCifrar = document.getElementById("descifrar");

btnDesCifrar.addEventListener("click", () => {
    console.log("Se hizo click");
        let cifrado = document.getElementById("texto1").value;
        let saltosStr = document.getElementById("saltos").value;
        let saltos = parseInt(saltosStr);
        console.log(saltos);
        document.getElementById("texto2").value = cipher.decode(saltos, cifrado);  
    }
); 