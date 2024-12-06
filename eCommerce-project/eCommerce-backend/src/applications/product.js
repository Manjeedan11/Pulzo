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

const categories = [
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Smart Speakers" },
  { id: "4", name: "Smartwatches" },
];

//-------------------Product logics---------------------------

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
    const productIndex = products.findIndex((pro) => pro.id === id); 

    if (index !== -1) {
        products.splice(index, 1);
    }

    return res.status(200).send(`Product info at ${productIndex} deleted successfully`);
};

//TODO: Gotta change the logic of updating the info for all the fields 
export const updateProductById = (req,res) => {
    const id = req.params.id;
    const productIndex = products.findIndex((pro) => pro.id === id)

    const details = req.body

    if(productIndex !== -1){
        productIndex.name = req.body.name;
        productIndex.price = req.body.price;
        productIndex.description = req.body.description;
        productIndex.image = req.body.image;
    }

    return res.status(200).send(`Product info at ${productIndex} updated successfully`);
}

// --------------------Category logics---------------------------

export const getCategories = (req,res) => {
    return res.status(200).json(categories).send();
}

export const createCategory = (res,req) => {
    categories.push(req.body);
    return res.status(200).send("Category added successfully");
}

export const getCategoriesById = (req,res) => {
    const id = req.params.id;
    const categoryIndex = categories.find((pro) => {
        pro.id === id;
    })
    return res.status(200).json(category).send();
}

export const deleteCategoriesById = (req,res) => {
    const id = req.params.id;
    const categoryIndex = categories.find((pro) => {
        pro.id === id;
    })

    if(categoryIndex !== -1){
        categories.splice(categoryIndex, 1);
    }

    return res.status(200).send(`Category field data at ${categoryIndex} id removed successfully`);
}

export const updateCategoryById = (req,res) => {
    const id = req.params.id;
    const categoryIndex = categories.find((pro) => {
        pro.id === id;
    })

    if(categoryIndex !== -1){
        categoryIndex.name = req.body.name;
    }

    return res.status(200).send(`Category field data at ${categoryIndex} id is updated successfully`);
}



