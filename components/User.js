import { React } from "react";

import {
  Flex,
  Avatar,
  Box,
  Text,
} from "@chakra-ui/react";

// takes in a "user" object as a prop, destructures its properties, and returns a JSX representation of the user.
export default function User({ user }) {
  console.log("user", user)
  const { name, avatar, email, id } = user || {};

  return (
    <Flex>
      <Avatar
        src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${id}/${avatar}`}
      />
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm">{email}</Text>
      </Box>
    </Flex>
  );
}