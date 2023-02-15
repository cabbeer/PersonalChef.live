// RecipesCard.js
import { useState, useRef } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function RecipeCard({ recipe, onAdd }) {
  const { description, price, quantity, avatar, id, title } = recipe || {};

  const quantityInputRef = useRef();

  const handleAddToCart = () => {
    const quantityToAdd = Number(quantityInputRef.current?.value);
    onAdd({ ...recipe, quantity: quantityToAdd });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize="300px"
          src={`http://127.0.0.1:8090/api/files/rqlud957724mgg6/${id}/${avatar}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="l">
            {`Price: $${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Stack shouldWrapChildren direction="row">
        </Stack>
        <ButtonGroup spacing="2">
        <Button onClick={handleAddToCart}>Add to Shopping Cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

