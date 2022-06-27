import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import PostCard from "../PostCard";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  //   console.log(import.meta.env.VITE_API_TOKEN);
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchSinglePost = async () => {
    try {
      const { data } = await axios.get(
        `https://gorest.co.in/public/v2/posts/${id}`
      );
      console.log("fetchedData", data);
      return data;
    } catch (error) {
      throw Error("Unable to fetch post");
    }
  };

  const { data, isLoading, error } = useQuery(
    ["singlepost", id],
    () => fetchSinglePost(id),
    {
      keepPreviousData: true,
      onError: (error) => {
        //   console.log(error);
        toast({ status: "error", title: error.message });
      },
    }
  );

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
          <Stack direction="column" spacing={8}>
            <PostCard
              key={data.id}
              title={data.title}
              content={data.body}
              userId={data.user_id}
              postId={data.id}
            />
          </Stack>
        </Container>
      )}
    </>
  );
};

export default SinglePost;
