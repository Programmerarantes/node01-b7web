type Product = {
    title: string,
    price: number
}


const data: Product[] = [
    { title: "Produto X", price: 10 },
    { title: "Produto Y", price: 15},
    { title: "Produto Z", price: 20},
    { title: "Produto W", price: 25}
];

export const Product = {
    getAll: ():Product[] => {
        return data;
    },
    getPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
}