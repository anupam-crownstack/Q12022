import { Box, Flex, Heading, Text, Tag, TagLabel } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const PostCard = ({ title, content, userId, postId }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{title}</Heading>
      <Flex mt={2} justifyContent={"space-between"}>
        <Link to={`/user/${userId}/posts/1`}>
          <Tag size={"md"} variant="solid" colorScheme="teal">
            <TagLabel>
              <Text>User ID: {userId}</Text>
            </TagLabel>
          </Tag>
        </Link>
        <Tag size={"md"} variant="solid" colorScheme="teal">
          <TagLabel>
            <Text>Post ID: {postId}</Text>
          </TagLabel>
        </Tag>
      </Flex>

      <Text mt={4}>{content}</Text>
    </Box>
  );
};

export default PostCard;
