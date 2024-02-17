import PropTypes from "prop-types";

function ReactList(props) {
  const category = props.category;
  const itemList = props.items;

  /* fruits.sort((a, b) => a.name.localeCompare(b.name)); //FOR ALPHABETICAL ORDER

  fruits.sort(a, (b) => b.name.localeCompare(a.name)); // FOR REVERSE ALPHABETICAL ORDER

  fruits.sort((a, (b) => a.calories - b.calories)); //FOR NUMERIC ORDER */

  // fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC ORDER

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listItems}</ol>
    </>
  );
}
ReactList.prototype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

ReactList.defaultProps = {
  category: "Category",
  items: [],
};
export default ReactList;
