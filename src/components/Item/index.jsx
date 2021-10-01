import { Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, image, category }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Box width={"100%"} className="item-container">
        <Box width={"100%"} className="product-image-container">
          <Image src={image} alt={title} objectFit="cover" />
        </Box>
        <Box className="product-text">
          <Box
            as="h4"
            textStyle="h4"
            color={"gray"}
            p={["10px 0 5px", "10px 0 5px", "12px 0 7px"]}
          >
            {category}
          </Box>
          <Box
            as="h5"
            textStyle="body-700"
            color={"blackish"}
            pb={["5px", "5px", "8px"]}
          >
            {title}
          </Box>
          <Box
            as="p"
            textStyle="body-700"
            color={"blackish"}
            pb={["5px", "5px", "8px"]}
          >
            ${price}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
