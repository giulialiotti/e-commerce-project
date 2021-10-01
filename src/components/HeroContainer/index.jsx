import React from "react";
import assets from "../../assets/assets";
import { Box, Flex, Link } from "@chakra-ui/react";

export const HeroContainer = () => {
  return (
    <Box
      as="section"
      width={["unset", "unset", "95%"]}
      m={"0 auto"}
      p={"0.5rem"}
      border={"1px solid #d6d6d6"}
    >
      <Flex
        align={"center"}
        className="hero-image-container"
        backgroundImage={`url(${assets.heroImage})`}
        backgroundSize={"cover"}
        backgroundPosition={["80%", "80%", "right"]}
        backgroundRepeat={"no-repeat"}
        height={["30rem", "30rem", "70vh"]}
        width={"100%"}
      >
        <Box px={"10%"}>
          <Flex align={"center"} pb={["0.5rem", "0.5rem", "0.5rem"]}>
            <Box
              as="span"
              display={"block"}
              bg={"darkRed"}
              mr={"0.5rem"}
              height={"2px"}
              width={"2rem"}
            ></Box>
            <Box as="p" textStyle="body-600" color={"darkRed"}>
              New trend
            </Box>
          </Flex>

          <Box pb={["0.5rem", "0.5rem", "0.5rem"]} width={["100%", "60%"]}>
            <Box
              as="h2"
              textStyle="heading"
              color={["white", "white", "blackish", "blackish"]}
            >
              Summer sale stylish <strong>womens</strong>
            </Box>
          </Box>

          <Box pb={["0.5rem", "0.5rem", "0.5rem"]}>
            <Link href="#item-list-section">
              <Box
                textStyle="body-600"
                letterSpacing={"0.5px"}
                color={["white", "white", "blackish", "blackish"]}
              >
                Discover more
              </Box>
            </Link>
            <Box
              as="span"
              display={"block"}
              bg={["white", "white", "blackish"]}
              mr={"0.5rem"}
              height={"2px"}
              width={["6.8rem", "6.8rem", "6rem"]}
            ></Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
