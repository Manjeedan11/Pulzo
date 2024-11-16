import {ProductCard} from "./ProductCard";

function Products(){
   return(
    <section className = "px-8 py-8">
        <h2 className="text-4x1 font-bold">Our Top Products</h2>
        <div className="grid grid-cols-4">
        <ProductCard/>
        </div>
    </section>
   );
}

export default Products;