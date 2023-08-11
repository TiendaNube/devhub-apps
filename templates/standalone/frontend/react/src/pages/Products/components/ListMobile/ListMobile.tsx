import React from "react";
import { Box, IconButton, Text, Thumbnail } from "@nimbus-ds/components";
import { TrashIcon } from "@nimbus-ds/icons";

import { IProduct } from "../../products.types";
import { DataList } from "@nimbus-ds/patterns";

const ListMobile: React.FC<{
  products: IProduct[];
  onDeleteProduct: (productId: number) => void;
}> = ({ products, onDeleteProduct }) => (
  <DataList>
    {products.map((product) => (
      <DataList.Row key={product.id} flexDirection="row" width="100%" gap="2">
        <Box display="flex" gap="2" flex="1 1 auto">
          <Thumbnail
            key={product.images?.[0]?.id}
            src={product.images?.[0]?.src}
            width="54px"
            alt={`${product.name.pt || product.name.es}`}
          />

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text>{product.name.pt || product.name.es}</Text>
          </Box>
        </Box>
        <Box display="flex" gap="2" alignItems="center" justifyContent="center">
          <IconButton
            onClick={() => onDeleteProduct(product.id)}
            source={<TrashIcon />}
            size="2rem"
          />
        </Box>
      </DataList.Row>
    ))}
  </DataList>
);

export default ListMobile;
