import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: Math.random(),
    price: 6,
    title: "My First Book",
    description: "The First Book I ever wrote.",
  },
  {
    id: Math.random(),
    price: 5,
    title: "My Second Book",
    description: "The Second Book I ever wrote.",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key = {item.id}
            id = {item.id}
            title = {item.title}
            price = {item.price}
            description = {item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
