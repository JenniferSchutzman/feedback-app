// import { useParams } from "react-router-dom";
// Redirect has been renamed to Navigate
// COmmonly used after calling a server and wanting to redirect the user based on response
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  //   const params = useParams();
  const navigate = useNavigate();
  const status = 200;

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Press</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
      {/* <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p> */}
    </div>
  );
}

export default Post;
