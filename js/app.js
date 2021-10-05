/* Constantes para obtener el templete html */
const bodyDOM = document.querySelector('body');
const items = document.getElementById('items');
const templeteCard = document.getElementById('templateCard').content;
const fragment = document.createDocumentFragment();
const cart = document.querySelector('.cart');
const carritoHTML = document.querySelector('.carrito');
/* Objeto carrito */
let carrito = [];
// Se escucha el click en el icono del carrito
bodyDOM.addEventListener('click',e => carritoHTML.classList.remove('active'));
cart.addEventListener('mouseenter', e => carritoHTML.classList.add('active'));
/* Se espera que todo el documento se cargue para ejecutarse la funcion */
document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
});

items.addEventListener('click', e =>{
    if(e.target.classList == 'btn-grad'){
        console.log(e.target)
    }else{

    }
})
/* Obtenemos los objetos del products.json */
const fetchData =  async () =>{
    try{
        const res = await fetch('js/products.json');
        const data = await res.json();
        paintCards(data);
    }catch(error){
        console.log(error);
    }
}
/* Pintamos los objetos del json en el html */
const paintCards = data =>{
    data.forEach(product =>{
        console.log(templeteCard)
        templeteCard.querySelector('h5').textContent = product.title;
        templeteCard.querySelector('.precio').textContent = product.precio;
        templeteCard.querySelector('.description').textContent = product.description;
        templeteCard.querySelector('.img-card').setAttribute('src', product.thumbnailUrl);
        templeteCard.querySelector('button').dataset.id = product.id;
        const clone = templeteCard.cloneNode(true);
        fragment.appendChild(clone);

    });
    items.appendChild(fragment);
}
/* Agregar al carrito */
const addCarrito = e =>{
    //console.log(e.target);
    if(e.target.classList.contains('btn-product-add')){
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}
/* set carrito */
const setCarrito = item => {
    const producto = {
        id: item.querySelector('button').dataset.id,
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('.precio').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = { ...producto }
    const cout = document.querySelector('#cout-cart').textContent = carrito.producto[id].cantidad;
    console.log(carrito);
}