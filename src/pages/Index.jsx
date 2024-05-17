import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Welcome to My Personal Website</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate web developer. I love creating beautiful and functional websites.
        </Text>
        <Box boxSize="150px">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Flex justifyContent="center" width="100%" mt={4}>
          <Button as="a" href="https://github.com/yourusername" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/yourusername" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:your.email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" mx={2}>
            Email
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;