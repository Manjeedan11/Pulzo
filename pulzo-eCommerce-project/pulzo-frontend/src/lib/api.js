export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = [
      {
        categoryId: "1",
        image: "/assets/products/airpods-max.png",
        _id: "1",
        name: "AirPods Max",
        price: "549.00",
        description:
          "Great sound with noise canceling and comfortable fit headphones.",
      },
      {
        categoryId: "3",
        image: "/assets/products/echo-dot.png",
        _id: "2",
        name: "Echo Dot",
        price: "99.00",
        description: "Small smart speaker with Alexa for easy voice control.",
      },
      {
        categoryId: "2",
        image: "/assets/products/pixel-buds.png",
        _id: "3",
        name: "Galaxy Pixel Buds",
        price: "99.00",
        description:
          "Wireless earbuds with good sound and easy device pairing.",
      },
      {
        categoryId: "1",
        image: "/assets/products/quietcomfort.png",
        _id: "4",
        name: "Bose QuiteComfort",
        price: "249.00",
        description: "Noise-canceling headphones for clear sound in any place.",
      },
      {
        categoryId: "3",
        image: "/assets/products/soundlink.png",
        _id: "5",
        name: "Bose SoundLink",
        price: "119.00",
        description:
          "Portable speaker with clear sound and Bluetooth connection support.",
      },
      {
        categoryId: "5",
        image: "/assets/products/apple-watch.png",
        _id: "6",
        name: "Apple Watch 9",
        price: "699.00",
        description:
          "Smartwatch with fitness tracking, health tools, and notifications.",
      },
      {
        categoryId: "4",
        image: "/assets/products/iphone-15.png",
        _id: "7",
        name: "Apple Iphone 15",
        price: "1299.00",
        description:
          "New iPhone with better speed and great camera performance.",
      },
      {
        categoryId: "4",
        image: "/assets/products/pixel-8.png",
        _id: "8",
        name: "Galaxy Pixel 8",
        price: "549.00",
        description:
          "Simple smartphone with good photos and smooth everyday performance.",
      },
    ];
    return data;
  } catch (error) {
    throw new Error("Error while loading products");
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = [
      { _id: "ALL", name: "ALL" },
      { _id: "1", name: "Headphones" },
      { _id: "2", name: "Earbuds" },
      { _id: "3", name: "Speakers" },
      { _id: "4", name: "Mobile Phones" },
      { _id: "5", name: "Smart Watches" },
    ];
    return data;
  } catch (error) {
    throw new Error("Error while loading categories");
  }
};

const products = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    _id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    _id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    _id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    _id: "4",
    name: "Bose QuiteComfort",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    _id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    _id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    _id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    _id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

const categories = [
  { _id: "ALL", name: "ALL" },
  { _id: "1", name: "Headphones" },
  { _id: "2", name: "Earbuds" },
  { _id: "3", name: "Speakers" },
  { _id: "4", name: "Mobile Phones" },
  { _id: "5", name: "Smart Watches" },
];
