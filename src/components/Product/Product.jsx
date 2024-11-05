import Card from '../Card/Card';
import { useState, useEffect } from 'react'; 
import './Product.css';
import { products } from '../ItemProduct/ItemProduct';
import Loading from '../Loading/Loading'; 

export default function ProductSection() {
  const [productList, setProductList] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 5000);
    });

    getProducts.then((data) => {
      setProductList(data); 
      setLoading(false); 
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> 
      ) : (
        <section className="product">
          <h2 className="section-title">Productos</h2>
          <div className="container">
            <div className="row">
              {productList.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <Card
                    imgSrc={product.imgSrc}
                    title={product.name}
                    description={product.description}
                    id={product.id} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}