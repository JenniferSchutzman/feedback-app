import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

// NAVLINK from react-router-dom
// It takes in to just like Link, but also adds an activeClassName prop
// <NavLink to="/" activeClassName="active">Home</NavLink>
// the activeClassName will style the active link
// this could be good to show which route the user is on in my portfolio site

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* you don't want to use an <a> bc it's doing a refresh of the page, 
        but we would prefer it's all done immediately on the client side.
        This is why we use <Link /> frmo react-router-dom  */}
      {/* <a href="/about"> */}
      <Link to="/about">
        {/* You could also use an object with additional properties instead.
            search: will add a query param to the route.
            hash: will add a hash to the end
          */}
        {/* <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }} */}
        {/* > */}
        <FaQuestion size={30} />
      </Link>
      {/* </a> */}
    </div>
  );
}

export default AboutIconLink;
