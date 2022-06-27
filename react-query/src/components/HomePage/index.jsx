import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Heading>Homepage </Heading>
      <Link to={"/posts/1"}>Posts</Link>
    </>
  );
};

export default Homepage;
