// 3. Identificar Productos con Stock Bajo: Usa un bucle para identificar los 
// productos con menos de 5 unidades en inventario y guárdalos en un array nuevo

const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
   ];


   //[i] es para obtener un elemento específico de un array usando su índice

const productosConBajoStock = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].stock < 5) {
        productosConBajoStock.push(products[i]);
    }
}

console.log(productosConBajoStock);


