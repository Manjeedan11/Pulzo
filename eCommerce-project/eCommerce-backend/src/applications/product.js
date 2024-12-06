import NotFoundError from "../domain/errors/not-found-error.js";

const products = [
    {
        categoryId: "1",
        image: "/assets/products/airpods-max.png",
        id: "1",
        name: "AirPods Max",
        price: "549.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
      {
        categoryId: "3",
        image: "/assets/products/echo-dot.png",
        id: "2",
        name: "Echo Dot",
        price: "99.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
      {
        categoryId: "2",
        image: "/assets/products/pixel-buds.png",
        id: "3",
        name: "Galaxy Pixel Buds",
        price: "99.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
      {
        categoryId: "1",
        image: "/assets/products/quietcomfort.png",
        id: "4",
        name: "Bose QuiteComfort",
        price: "249.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
      {
        categoryId: "3",
        image: "/assets/products/soundlink.png",
        id: "5",
        name: "Bose SoundLink",
        price: "119.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
      {
        categoryId: "5",
        image: "/assets/products/apple-watch.png",
        id: "6",
        name: "Apple Watch 9",
        price: "699.00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
      },
];

export const getProducts = (req, res, next) => {
    try{
        return res.status(200).json(products).send();
    } catch(error){
      next(error);
    } 
    
}

export const createProduct = (req, res, next) => {
    try {
        products.push(req.body);
        return res.status(200).send("Product added successfully");
    } catch(error){
       next(error);
    }
    
}

export const getProductById = (req, res, next) => {
    try {
        const id = req.params.id;
        const product = products.find((pro) => pro.id === id)
        if(!product){
            throw new NotFoundError("Product not found");
        }
        return res.status(200).json(product).send();

    } catch (error){
        next(error);
    }

}

export const deleteProductById = (req, res, next) => {
    try {
        const id = req.params.id;
        const productIndex = products.findIndex((pro) => pro.id === id); 
        if (index !== -1) {
            throw new NotFoundError("Product not found")
        }
        products.splice(index, 1);
        return res.status(200).send(`Product info at ${productIndex} deleted successfully`);
    } catch(error){
        next(error)
    }

};
 
export const updateProductById = (req, res, next) => {
   try {
    const id = req.params.id;
    const productIndex = products.findIndex((pro) => pro.id === id)

    if(productIndex !== -1){
        throw new NotFoundError("Product not found")
    }

    productIndex.name = req.body.name;
    productIndex.price = req.body.price;
    productIndex.description = req.body.description;
    productIndex.image = req.body.image;

    return res.status(200).send(`Product info at ${productIndex} updated successfully`);
   } catch(error){
      next(error);
   }
}
