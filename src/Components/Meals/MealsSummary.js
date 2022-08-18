import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Freshly Made Pizza To Go</h2>
      <p>
        All our pizzas are cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
      <p>Pick your favorite pizza below from our various selections 😄</p>
    </section>
  );
};
export default MealsSummary;
