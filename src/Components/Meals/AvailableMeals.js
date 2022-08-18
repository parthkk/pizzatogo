import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margherita Pizza",
    description:
      "Fresh mozzarella, tomato sauce, basil and a drizzle of olive oil",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Pepperoni Pizza",
    description: "Classic cheese pizza with pepperoni",
    price: 13.5,
  },
  {
    id: "m3",
    name: "Meat Lovers",
    description: "Italian sausage, pepperoni and bacon bits",
    price: 15.99,
  },
  {
    id: "m4",
    name: "Vegeterian",
    description: "Onions, mushrooms, and green peppers",
    price: 14.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
