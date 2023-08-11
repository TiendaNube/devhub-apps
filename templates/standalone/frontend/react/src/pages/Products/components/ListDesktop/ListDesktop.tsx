import React from "react";
import { Box, IconButton, Table, Text, Thumbnail } from "@nimbus-ds/components";
import { TrashIcon } from "@nimbus-ds/icons";

import { Translator } from "@/app/I18n";
import { IProduct } from "../../products.types";

const ListDesktop: React.FC<{
  products: IProduct[];
  onDeleteProduct: (productId: number) => void;
}> = ({ products, onDeleteProduct }) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell>
          <Translator path="products.name" />
        </Table.Cell>
        <Table.Cell>
          <Box
            display="flex"
            gap="2"
            alignItems="center"
            width="100%"
            justifyContent="center"
          >
            <Text>
              <Translator path="products.remove" />
            </Text>
          </Box>
        </Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {products.map((product) => (
        <Table.Row key={product.id}>
          <Table.Cell>
            <Box display="flex" gap="2" alignItems="center">
              <Thumbnail
                src={product.images?.[0]?.src}
                width="36px"
                alt={`${product.name.pt || product.name.es}`}
              />
              {product.name.pt || product.name.es}
            </Box>
          </Table.Cell>
          <Table.Cell>
            <Box
              display="flex"
              gap="2"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                onClick={() => onDeleteProduct(product.id)}
                source={<TrashIcon />}
                size="2rem"
              />
            </Box>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default ListDesktop;
