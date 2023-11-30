// Definir la función constructora
function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;

    // Método para reducir las vidas
    this.reducirVidas = function (cantidad) {
        this.vidas -= cantidad;
        if (this.vidas < 0) {
            this.vidas = 0; 
        }
        alert(`Vidas reducidas. Ahora tienes ${this.vidas} vidas.`);
    };

    //Mostrar el apodo y la cantidad de vidas restantes
    this.mostrarInfo = function () {
        alert(`Apodo: ${this.apodo}, Vidas restantes: ${this.vidas}`);
    };
}

const jugador1 = new Jugador("Gamer19", 2, 1);
jugador1.mostrarInfo(); // Muestra: Apodo: Gamer19, Vidas restantes: 2
jugador1.reducirVidas(1); // Muestra: Vidas reducidas. Ahora tienes 2 vidas.
jugador1.mostrarInfo(); // Muestra: Apodo: Gamer19, Vidas restantes: 1