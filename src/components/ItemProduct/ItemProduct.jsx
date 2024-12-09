export const products = [
    { id: 1,
        name: 'Escopeta del scout',
        imgSrc: '/public/weapons/weapontest1.png',
        description: 'La escopeta estandar de un Scout. Precio: $1500',
        price: '1500',
        stock: 1000,
        type: 'Escopeta',
        rarity: 'Comun',
        },

    { id: 2,
        name: 'Refrescopeta',
        imgSrc: '/public/weapons/weapontest2.png',
        description: 'Una escopeta y una lata pegadas con cintas no hay mas trasfondo. Precio: $4500',
        price: '4500',
        stock: 45,
        type: 'Escopeta',
        rarity: 'Poco Comun',
        },

    { id: 3,
        name: 'Retroescopeta',
        imgSrc: '/public/weapons/weapontest3.png',
        description: 'Mucho espacio, poca cadencia. Precio: $3850',
        price: '3850',
        stock: 78,
        type: 'Escopeta',
        rarity: 'Poco comun',
        },

    { id: 4,
        name: 'E.R.R.A.D.I.C.A.D.O.R.',
        imgSrc: '/Weapons/weapontest4.png',
        description: 'Hecho para causar sufrimiento. Precio: $12690',
        price: '12690',
        stock: 17,
        type: 'Pistola',
        rarity: 'Raro',
        },

    { id: 5,
        name: 'Aeropistola',
        imgSrc: '/Weapons/weapontest5.png',
        description: '¡%1000 mas dinamica y mortal! precio: $ 7890',
        price: '2768',
        stock: 12,
        type: 'Pistola',
        rarity: 'Raro',
        },

    { id: 6,
        name: 'Leche Mutada',
        imgSrc: '/Weapons/weapontest6.png',
        description: 'Un vaso con leche de dudosa procedencia. Precio: $ 700',
        price: '6700',
        stock: 34,
        type: 'Consumible',
        rarity: 'Comun',
        },

    { id: 7,
        name: 'CritiCola',
        imgSrc: '/weapons/weapontest7.png',
        description: 'Bebida especial que te hara dar mas criticos. Precio: $5000',
        price: '500',
        stock: 56,
        type: 'Consumible',
        rarity: 'Poco Comun',
        },
        
        { id: 8,
        name: 'Exprimevacas 5000',
        imgSrc: '/Weapons/weapontest8.png',
        description: 'Este lanzacohetes es tan  doloroso  como  se  ve.    Precio: $34500',
        price: '34500',
        stock: 10,
        type: 'Lanzallamas',
        rarity: 'Epico',
        },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}
export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 500);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 500);
    });
};
