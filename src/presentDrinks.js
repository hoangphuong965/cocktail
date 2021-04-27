import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
    // fetch drink
    const data = await fetchDrinks(url); // api
    // display drinks
    const section = await displayDrinks(data); // html
    // set drink
    if (section) {
        setDrink(section);
    }
};

export default showDrinks;
