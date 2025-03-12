import ProductCard from "./ProductCard";

function ProductCards(props) {
  return (
    <div className={`grid ${props.gridClassName || "grid-cols-4"} gap-10 mt-4`}>
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            synopsis={product.synopsis}
            description={product.description}
            ratings={product.ratings}
            keyFeatures={product.keyFeatures}
            stock={product.stock}
            sold={product.sold}
          />
        );
      })}
    </div>
  );
}

export default ProductCards;
