export const products = [
    { id: 1,
        name: 'Escopeta del scout',
        imgSrc: '/public/weapons/shotguns/weapontest1.png',
        description: 'Descripción de la escopeta del scout',
        price: '1500',
        stock: 1000,
        },

    { id: 2,
        name: 'Refrescopeta',
        imgSrc: '/public/weapons/shotguns/weapontest2.png',
        description: 'Descripción de la refrescopeta',
        price: '4500',
        stock: 45,
        },

    { id: 3,
        name: 'Retroescopeta',
        imgSrc: '/public/weapons/shotguns/weapontest3.png',
        description: 'Descripción de la retroescopeta',
        price: '3850',
        stock: 78,
        },

    { id: 4,
        name: 'E.R.R.A.D.I.C.A.D.O.R.',
        imgSrc: '/public/Weapons/pistols/weapontest4.png',
        description: 'Descripcion deL E.R.R.A.D.I.C.A.D.O.R.',
        price: '12690',
        stock: 17,
        },

    { id: 5,
        name: 'Aeropistola',
        imgSrc: '/public/Weapons/pistols/weapontest5.png',
        description: 'Descripcion de la Aeropistola',
        price: '2768',
        stock: 12,
        },

    { id: 6,
        name: 'Leche Mutada',
        imgSrc: '/public/Weapons/others/weapontest6.png',
        description: 'Descripcion de la Leche Mutada',
        price: '6700',
        stock: 34,
        },

    { id: 7,
        name: 'CritiCola',
        imgSrc: '/public/weapons/others/weapontest7.png',
        description: 'Descripcion de la CritiCola',
        price: '500',
        stock: 56,
        },
        
        { id: 8,
        name: 'Exprimevacas 5000',
        imgSrc: '/public/Weapons/launchers/weapontest8.png',
        description: 'Descripcion del Exprimevacas 5000',
        price: '34500',
        stock: 10,
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
        }, 2000);
    });
};
