//  5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en 
// cada categoría (electrónica, hogar, alimentos) y devuelve un objeto con este 
// resumen.

const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


function countProductsByCategory(products) {
    const categorySummary = {};

    for (const product of products) {
        const category = product.category;

        // Si la categoría no existe en el objeto, inicialízala en 0
        if (!categorySummary[category]) {
            categorySummary[category] = 0;
        }

        // Incrementa el conteo para la categoría actual
        categorySummary[category]++;
    }

    return categorySummary;
}

const summary = countProductsByCategory(products);
console.log(summary);