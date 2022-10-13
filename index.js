import { mostrarProductos } from "./App.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { productos } from './src/stock.js';
import { obtenerCarritoStorage } from "./src/storage.js";


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});
const botonEliminar = document.getElementById ("eliminar");
    botonEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro de eliminar el producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, seguro',
            cancelButtonText: 'No, no quiero'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Borrado!',
                    icon: 'success',
                    text: 'El archivo ha sido borrado'
                })
            }
        })
    })
