// RecipesCard.js
import { useRef } from "react";

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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function RecipeCard({ recipe, onAdd, onRemove }) {
  const { description, price, quantity, img_1, id, title } = recipe || {};

  const quantityInputRef = useRef();

  const handleAddToCart = () => {
    const quantityToAdd = Number(quantityInputRef.current?.value);
    onAdd({ ...recipe, quantity: quantityToAdd });
  };

  const handleRemoveFromCart = () => {
    const quantityToRemove = Number(quantityInputRef.current?.value);
    onRemove({ ...recipe, quantity: quantityToRemove });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize="300px"
          src={`http://127.0.0.1:8090/api/files/rqlud957724mgg6/${id}/${img_1}`}
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
          <NumberInput
            size="md"
            maxW={16}
            defaultValue={1}
            min={1}
            max={quantity}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>
        <ButtonGroup spacing="2">
          <Button onClick={handleAddToCart}>Add</Button>
          <Button onClick={handleRemoveFromCart}>Remove</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
