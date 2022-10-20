import { mostrarProductos } from "./App.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { productos } from './src/stock.json';
import { obtenerCarritoStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});

const mostrarPosts = () => {
    const data = obtenerPosts();

    data.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        lista.appendChild(li);
    })
};

fetch('/stock.json')
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
    });
mostrarPosts ();

