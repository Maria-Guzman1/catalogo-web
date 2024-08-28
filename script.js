// Lista de productos de ejemplo
const products = [
    { id: "P0103", name: "Caja de seguridad", price: 160.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product1.PNG?alt=media&token=ec63cc25-f5a7-430a-bef5-4809027a0a3b" },
    { id: "P0102", name: "Caja de dulces típicos", price: 155.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product2.PNG?alt=media&token=6460b2d3-4d4d-41b6-8a03-a450cadbf3b7" },
    { id: "P0104", name: "Individuales de Flor", price: 100.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product3.PNG?alt=media&token=ca4bb00b-4f08-46a4-a709-9186980c6e99" },
    { id: "P0105", name: "Individuales Panel", price: 100.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product4.PNG?alt=media&token=95e1fb5b-9053-486a-8b8b-617f21c71de7" },
    { id: "P0106", name: "Individuales Mariposa", price: 100.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product5.PNG?alt=media&token=2ccce13a-ef1d-4ace-810f-d269468af1bb" },
    { id: "P0107", name: "Torre Eiffel Decorativa", price: 135.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product6.PNG?alt=media&token=77e838d6-fdfa-4841-9c90-40295c492541" },
    { id: "P0108", name: "Porta servilletas pavo", price: 25.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product7.PNG?alt=media&token=220a2313-c1ff-4b39-b877-91df562465db" },
    { id: "P0109", name: "Porta servilletas blanco", price: 25.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product8.PNG?alt=media&token=4b0bd90b-b1d9-471f-b7e3-41aa8199626e" },
    { id: "P0110", name: "Rotulo “No fumar”", price: 55.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product9.PNG?alt=media&token=848e5753-79bd-4dec-a63d-cecc7c499087" },
    { id: "P0111", name: "Rotulos para baños", price: 55.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product10.PNG?alt=media&token=601bff1a-f47a-45ef-9317-8f6298428e87" },
    { id: "P0112", name: "Señaletica de reservación", price: 30.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product11.PNG?alt=media&token=01cf0730-5543-44c8-9267-0c4bb89d7319" },
    { id: "P0113", name: "Señaletica de reservación", price:   30.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product12.PNG?alt=media&token=fe67a6db-9566-4dd6-9e7f-e69b6ebf4ab5" },
    { id: "P0114", name: "Señaletica con separadores", price: 55.00,image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product13.jpeg?alt=media&token=b49ea713-a1d8-4541-b571-e26bffe8519e" },
    { id: "P0115", name: "Señaletica 3D", price: 65.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product14.jpeg?alt=media&token=f1522360-0b37-4df3-92b2-adfaa0c77908" },
    { id: "P0116", name: "Señaletica de reservación", price: 65.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product15.jpg?alt=media&token=bfddf84e-765a-4ce0-b5ee-c0242bd3b9fb" },
    { id: "P0118", name: "Sercha cisne", price: 35.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product16.jpg?alt=media&token=39d860fb-af3e-4841-a20c-e1d28a41ebfd" },
    { id: "P0119", name: "Sercha pajaros", price: 25.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product17.jpg?alt=media&token=acaac3fa-694f-42a7-ab1c-8fe5e674beb2" },
    { id: "P0120", name: "Sercha enamorados", price: 30.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product18.jpg?alt=media&token=12964400-0c5f-4a8b-94f0-2f3ce382af89" },
    { id: "P0123", name: "Llaveros en acrílico", price: 25.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product19.jpg?alt=media&token=be39fe7d-11ac-4d0b-bec1-189ec29853e1" },
    { id: "P0122", name: "Llaveros Mdf", price: 20.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product20.jpg?alt=media&token=02818100-7f2f-4544-8438-89cfe3fb50d3" },
    { id: "P0101", name: "Rótulo de madera", price: 450.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product21.jpg?alt=media&token=a60641f4-c92a-4a61-9451-d77d1d907406" },
    { id: "P0124", name: "Base para pastel cuadrado", price: 230.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product22.jpg?alt=media&token=afa06dc1-14ed-491a-aaf8-8d8940254189" },
    { id: "P0125", name: "Base de pastel ballet", price: 140.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product23.jpg?alt=media&token=110ec03b-dd02-43c6-b4b3-b3579bab77c8" },
    { id: "P0126", name: "Base de pastel forma de flor", price: 175.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product24.jpg?alt=media&token=2568cec8-477d-4dae-b26f-57b68491be14" },
    { id: "P0127", name: "Caja para especias", price:  75.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product25.jpg?alt=media&token=4cc6e581-242f-4555-8a7c-6fc650385c0a" },
    { id: "P0129", name: "Organizador de conos", price: 195.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product26.jpg?alt=media&token=6fe09f4a-ecb4-4d97-98b1-73afd4c24b91" },
    { id: "P0130", name: "Maceta jardín", price: 195.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product27.jpg?alt=media&token=17dfc119-2ab1-468b-a80b-57c177ecc145" },
    { id: "P0128", name: "Mueble exhibidor", price:  600.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product28.jpg?alt=media&token=bc761ef2-50e1-47b1-9da3-b46ba3907d75" },
    { id: "P0131", name: "Maceta tipo casa", price: 265.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product29.jpg?alt=media&token=7f00e77b-b7eb-41f8-9aa9-137984c14f5e" },
    { id: "P0132", name: "Exhibidor de fajas", price: 3, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product30.jpg?alt=media&token=ec40afcf-7260-4459-ad32-7abe85d8364f" },
    { id: "P0133", name: "Exhibidor para alimentos varios", price: 920.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product31.jpg?alt=media&token=a7ed3fa6-5120-40ea-ab88-2d738b24d0c7" },
    { id: "P0134", name: "Vitrina", price: 675.00,image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product32.jpg?alt=media&token=8060875d-f6ac-437f-802f-314bb29799ae" },
    { id: "P0137", name: "Pizzarra iluminada", price:  720.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product33.jpeg?alt=media&token=36432445-aa24-419a-a9cf-b3b8c8ec323d" },
    { id: "P0135", name: "Tortillero", price: 195.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product34.jpg?alt=media&token=9687815f-49c5-4b26-ab8c-628191b4bfb3" },
    { id: "P0136", name: "Prensador", price: 210.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product35.jpg?alt=media&token=4885a93e-b8be-4907-af76-e89258f01ae2" },
    { id: "P0138", name: "Empaque cuadrado", price: 25.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product36.jpg?alt=media&token=66d57496-9d6b-412e-8ef7-d4d48f770431" },
    { id: "P0139", name: "Empaque rectangular", price: 16.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product37.jpg?alt=media&token=b4176037-1946-4a3a-812f-4a0f678666c0" },
    { id: "P0140", name: "Caja tipo bolsa", price: 16.00, image: "https://firebasestorage.googleapis.com/v0/b/fablab2-88ab1.appspot.com/o/product38.jpg?alt=media&token=f98728a5-4d39-4439-a3ab-fc3a5bb25fdb" }

];

// Función para renderizar los productos
function renderProducts(productsList) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Limpiar catálogo

    productsList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <br>  
            <p>Precio: Q${product.price.toFixed(2)}</p>
            <button>Me interesa</button>
        `;
        
        catalog.appendChild(productCard);
    });
}

// Función para filtrar productos
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    renderProducts(filteredProducts);
}

// Evento para la búsqueda
document.getElementById('searchInput').addEventListener('input', filterProducts);

// Inicializar catálogo
renderProducts(products);