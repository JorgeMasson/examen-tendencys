import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  HStack,
  VStack,
  Select,
} from "@chakra-ui/react";
import Button from "../Platform/button";
import { API_KEYS } from "../api/constants";
import { useAppContext } from "../context/app-context";
import toastr from "toastr";

export default function Form() {
  const { setOrder } = useAppContext();
  const [data, setData] = useState({});
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      var price = parseFloat(product.items[0].price);
      setTotal(price * quantity);
    }
  }, [product, quantity]);

  useEffect(() => {
    fetch(API_KEYS.corsAnywhere + API_KEYS.url, {
      headers: { Authorization: API_KEYS.token },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data: data });
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSelect = (selectedOption) => {
    setProduct(
      data.orders.find(
        (item) => item.items[0].id === selectedOption.target.value
      )
    );
  };

  const handleSubmit = () => {
    setOrder({
      sku: product.items[0].sku,
      name: product.items[0].name,
      number: product.number,
      quantity: quantity,
      price: total,
    });
    toastr.success("Order successful created!");
  };

  return (
    <Box py="10px" px="54px" width="100%">
      <Heading fontWeight={600} as="h1">
        New Order
      </Heading>
      <Flex p={10} mt={5} background="white" flexDirection="column">
        <HStack spacing="50px">
          <Box>
            <VStack spacing="10px" alignItems="flex-start">
              <Text py={2} w={150}>
                Product
              </Text>
              <Text py={2}>SKU</Text>
              <Text py={2}>QUANTITY</Text>
              <Text py={2}>PRICE</Text>
            </VStack>
          </Box>
          <Box>
            <VStack spacing="10px">
              <Select
                w={300}
                rounded="none"
                placeholder="Select a product"
                onChange={handleSelect}
              >
                {data !== undefined &&
                  data.orders?.map((item) => {
                    return (
                      <option key={item.id} value={item.items[0].id}>
                        {item.items[0].name}
                      </option>
                    );
                  })}
              </Select>
              <Input
                w={300}
                type="text"
                rounded="none"
                isDisabled
                value={
                  Object.keys(product).length > 0 || !product
                    ? product.items[0].sku
                    : ""
                }
              />
              <Text>{product.length > 0 && product.items[0].sku}</Text>
              <Input
                w={300}
                rounded="none"
                type="number"
                isDisabled={Object.keys(product).length === 0}
                defaultValue={0}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Input
                w={300}
                rounded="none"
                type="text"
                isDisabled
                value={total}
              />
            </VStack>
          </Box>
        </HStack>
        <Button
          mt={10}
          w={150}
          background="brightGreen"
          isDisabled={total === 0}
          onClick={handleSubmit}
        >
          <Text color="black">Guardar</Text>
        </Button>
      </Flex>
    </Box>
  );
}
