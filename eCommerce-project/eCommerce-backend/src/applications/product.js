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

export const getProducts = (req, res) => {
    return res.status(200).json(products).send();
}

export const createProduct = (req, res) => {
    products.push(req.body);
    return res.status(200).send("Product added successfully");
}

export const getProductById = (req,res) => {
    const id = req.params.id;
    const product = products.find((pro) => {
        pro.id === id;
    })

    return res.status(200).json(product).send();
}

export const deleteProductById = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((pro) => pro.id === id); 

    if (index !== -1) {
        products.splice(index, 1);
    }

    return res.status(200).send("Product removed successfully");
};

export const updateProductById = (req,res) => {
    const id = req.params.id;
    const index = products.findIndex((pro) => pro.id === id)

    const details = req.body

    if(index !== -1){
        products[index] = {id: id, details};
    }

    return res.status(200).send("Product updated successfully");
}





