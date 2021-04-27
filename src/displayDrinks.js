import get from "./getElement.js";

const displayDrinks = (props) => {
    const { drinks } = props;
    const section = get(".section-center");
    const title = get(".title");
    if (!drinks) {
        title.textContent = "your drink was not found ";
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks
        .map((drink) => {
            const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
            return `<a href="drink.html">
        <article class="cocktail" data-id=${id}>
            <img src="${image}" alt="cocktail" />
            <h3>${name}</h3>
        </article>
             </a>`;
        })
        .join("");
    // hide loading
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
};

export default displayDrinks;
