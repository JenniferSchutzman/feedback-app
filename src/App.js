import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
// to use context, you have to...
// ->  bring in the Provider to use as the wrapper
import { FeedbackProvider } from "./context/FeedbackContext";
// import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    // adds an id to the object coming in
    newFeedback.id = uuidv4();
    // add the newFeedback to our state
    // bc the state is immutable, we cannot push onto it so we need to make a copy of it;
    // use the spread operator to get the existing array and push the new object into that same array
    setFeedback([newFeedback, ...feedback]);
    console.log("newFeedback", newFeedback);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/* new v6 of react-router-dom has Routes as wrapper replacing Switch  */}
          <Routes>
            {/* use exact path because otherwise all routes will include that starting forward slash  */}
            {/* stop mixing backward and forward slash naming; think of a person leaning forward or backward with their head at the top of the slash  */}
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    // removing feedback prop passing bc adding to global state with context isntead
                    // feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            {/* new v6 of react-router-dom has element as prop instead of component
          and the component now wrapper in JSX instead of just JS */}
            {/* <Route path="/about" component={AboutPage} /> */}
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
            {/* The oath="/post/*" allows for another fixed route to be added afterwards 
          This still differs from the loose path (versus exact path) because it will be fixed 
          depending upong what is given after the * in the declaration of the route  */}
            {/* <Route path="/post/*" element={<Post />} /> */}
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
