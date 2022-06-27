import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage";
import Posts from "../Posts";
import SinglePost from "../SinglePost";
import UserPosts from "../UserPosts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="posts/:id" element={<Posts />} />
        <Route path="post/:id" element={<SinglePost />} />
        <Route path="/user/:userId/posts/:id" element={<UserPosts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
