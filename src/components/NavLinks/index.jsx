import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";

export const NavLinks = () => {
  return (
    <Box as='nav' display={['none', 'none', 'block', 'block']} width={'40%'}>
      <Flex as='ul'>
        <Box as='li' listStyleType={'none'} pr={'2rem'}>
          <Link to="/category/tops">TOPS</Link>
        </Box>
        <Box as='li' listStyleType={'none'} pr={'2rem'}>
          <Link to="/category/pants" textTransform={'uppercase'}>PANTS</Link>
        </Box>
        <Box as='li' listStyleType={'none'} pr={'2rem'}>
          <Link to="/category/dresses">DRESSES</Link>
        </Box>
      </Flex>
    </Box>
  );
};
