const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
   ];

// 2. Calcular el Precio Final con Descuento: Usa map para calcular el precio final 
// de los productos que tienen descuento y crea un nuevo array que incluya el 
// priceAfterDiscount.

const productosConPrecioFinal = products.map( product => {
    if(product.discount > 0) {
        const priceAfterDiscount = product.price - (product.price * product.discount / 100);
        return{ ... product, priceAfterDiscount};
    }
    return { ...product, priceAfterDiscount: product.price}
} );

console.log(productosConPrecioFinal);