const ProductList = ({ products }) => {
    return (
      <div>
        {products.map((product) => (
          <div>
            <img src={product.image} alt="" style={{ width: "100px" }} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  