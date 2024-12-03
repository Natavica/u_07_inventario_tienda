// 4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre 
// de un producto y una cantidad a agregar. Usa un try...catch para verificar si 
// el producto existe en el array. Si existe, incrementa su stock; si no, lanza 
// un error.


const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
   ];

   function actualizarStock(nombreProducto, cantidad) {
    try {
                const producto = products.find(product => product.name === nombreProducto);
        if (producto) {
            producto.stock += cantidad;
            console.log(`El stock de ${producto.name} ahora es ${producto.stock}`);
        } else {
            throw new Error ("Producto encontrado");
        }
    } catch (error) {
        console.error(error.message);
    }
}

actualizarStock("Televisor", 5); // Incrementa el stock de Televisor
actualizarStock("Iphone", 1); // Lanza un error porque no existe "Smartphone"
