// import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example of a feedback item");

  //   const handleClick = () => {
  //     // prev default param for teh hook setRating automatically attaches to the
  //     // hook value...wow!
  //     setRating((prev) => {
  //       console.log("prev on render", prev);
  //       return prev + 1;
  //     });
  //   };

  return (
    // used prop with conditional class
    // <Card reverse={true}>
    // used defaultProps with conditional style
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes props="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
