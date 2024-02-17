// click event = An interaction when an user clicks on a specific element.
// We can respond to clicks by passing a callback to the onClick event  handler.

function ClickEventBUtton() {
  /*let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      window.alert(`${name} you clicked me ${count} time/s`);
    } else {
      alert(`${name} stop clicking me!`);
    }
  };
  */

  const handleClick = (e) => (e.target.textContent = "OUCH! 😣");
  return (
    <>
      <button onClick={(e) => handleClick(e)}>CLICK ME😃</button>
    </>
  );
}
export default ClickEventBUtton;
