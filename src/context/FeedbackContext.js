import { createContext, useState } from "react";

const FeedbackContext = createContext();

// we will pass in the children as an object to represent all of the components being pass in
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);
  return (
    // pass all of the the state from the children components with the value prop
    <FeedbackContext.Provider
      value={{
        // feedback: feedback,
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
