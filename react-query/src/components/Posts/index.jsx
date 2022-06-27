import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  useToast,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import PostCard from "../PostCard";
import { useParams, useNavigate, Link } from "react-router-dom";

const Posts = () => {
  //   console.log(import.meta.env.VITE_API_TOKEN);
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        `https://gorest.co.in/public/v2/posts?page=${id}`
      );
      console.log("fetchedData", data);
      return data;
    } catch (error) {
      throw Error("Unable to fetch posts");
    }
  };

  const { data, isLoading, error } = useQuery(
    ["posts", id],
    () => fetchPosts(id),
    {
      keepPreviousData: true,
      onError: (error) => {
        //   console.log(error);
        toast({ status: "error", title: error.message });
      },
    }
  );

  const paginateNext = (currentPageId) => {
    navigate(`/post/${parseInt(currentPageId) + 1}`);
  };

  const paginatePrevious = (currentPageId) => {
    if (currentPageId === "1") return;
    navigate(`/post/${parseInt(currentPageId) - 1}`);
  };

  //   console.log(data, isLoading, error);

  return (
    <>
      {isLoading ? (
        <Grid placeItems={"center"} height="100vh">
          <CircularProgress
            isIndeterminate
            size="70px"
            thickness={"5"}
            color="green.300"
          />
        </Grid>
      ) : (
        <Container my={8} maxW="2xl">
          <Flex my={2} justifyContent={"space-between"}>
            <Button onClick={() => paginatePrevious(id)} colorScheme={"orange"}>
              Previous Page
            </Button>
            <Button onClick={() => paginateNext(id)} colorScheme={"teal"}>
              Next Page
            </Button>
          </Flex>
          <Stack direction="column" spacing={8}>
            {data.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <PostCard
                  title={post.title}
                  content={post.body}
                  userId={post.user_id}
                  postId={post.id}
                />
              </Link>
            ))}
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Posts;
