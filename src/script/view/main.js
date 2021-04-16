import '../component/item-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const itemListElement = document.querySelector("item-list");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = async() => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchItem(searchElement.value);
            renderResult(result);
            loaderElement.style.display = 'none';
        } catch (message) {
            fallbackResult(message)
            loaderElement.style.display = 'none';
        }
    };

    const renderResult = results => {
        itemListElement.items = results;
    };

    const fallbackResult = message => {
        itemListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;