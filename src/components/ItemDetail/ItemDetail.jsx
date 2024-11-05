import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../ItemProduct/ItemProduct';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = product.price * quantity;

    return (
        <div className="sigma">
            <div className="d-flex flex-column flex-md-row">
                <div className="me-md-4">
                    <img src={product.imgSrc} alt="Imagen del producto" className="img-fluid" />
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p><strong>Precio:</strong> ${product.price}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    
                    <div className="d-flex align-items-center mb-3">
                        <button onClick={decrementQuantity} className="btn btn-secondary me-2">-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity} className="btn btn-secondary ms-2">+</button>
                    </div>

                    <p><strong>Precio Total:</strong> ${totalPrice}</p>
                    <button className="btn btn-success">Comprar</button>
                </div>
            </div>
        </div>
    );
}