import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackList({ feedback, handleDelete }) {
// removing feedback as a prop bc now getting from context instead - global state
function FeedbackList({ handleDelete }) {
  // here we can bring in anything in the FeedbackContext value prop
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    // <div className="feedback-list">
    //   {feedback.map((item) => (
    //     <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //   ))}
    // </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
