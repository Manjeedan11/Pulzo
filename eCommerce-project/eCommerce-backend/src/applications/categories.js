const categories = [
    { id: "1", name: "Headphones" },
    { id: "2", name: "Earbuds" },
    { id: "3", name: "Smart Speakers" },
    { id: "4", name: "Smartwatches" },
  ];


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