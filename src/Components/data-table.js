import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from "@chakra-ui/react";
import { useAppContext } from "../context/app-context";
import toastr from "toastr";
import Button from "../Platform/button";

export default function DataTable() {
  const { order } = useAppContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      order.reduce((acumulador, item) => {
        return acumulador + item.price;
      }, 0)
    );
  }, [order]);

  return (
    <Box
      justifyContent="center"
      py="10px"
      px="54px"
      width={{ base: "100%", "2xl": "1300px" }}
    >
      <Heading fontWeight={600} as="h1">
        Orders
      </Heading>
      <Box background="white" width="100&" mx="auto" px={8} py={8} mt={5}>
        <Flex justify="space-between">
          <Flex>
            <Text fontSize={18} fontWeight={700}>
              TOTAL:
            </Text>
            <Text ml={5} fontSize={18}>
              ${total}.00
            </Text>
          </Flex>
          <Button
            background="brightGreen"
            isDisabled={total === 0}
            onClick={() => toastr.success("Successful purchase!")}
          >
            <Text color="black">Purchase</Text>
          </Button>
        </Flex>
        <Table mt={8}>
          <Thead>
            <Tr>
              <Th>NO. ORDER</Th>
              <Th>SKU</Th>
              <Th>NAME</Th>
              <Th>QUANTITY</Th>
              <Th>PRICE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(order !== undefined || order.length > 0) &&
              order.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Text>{item.number}</Text>
                  </Td>
                  <Td>
                    <Text>{item.sku}</Text>
                  </Td>
                  <Td>
                    <Text>{item.name}</Text>
                  </Td>
                  <Td>
                    <Text>{item.quantity}</Text>
                  </Td>
                  <Td>
                    <Text>{item.price}</Text>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
