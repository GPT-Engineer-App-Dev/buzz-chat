import { Box, Flex, Input, Button, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  const chatInputSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Flex height="100vh" overflow="hidden">
      <Box width={{ base: "100%", md: "30%" }} bg="blue.500" p={4} color="white">
        <VStack spacing={4}>
          <Text fontSize="2xl">Contacts</Text>
          <Text>Friend 1</Text>
          <Text>Friend 2</Text>
          <Text>Friend 3</Text>
        </VStack>
      </Box>
      <Flex direction="column" p={4} width={{ base: "100%", md: "70%" }} bg="gray.100">
        <VStack spacing={4} flex="1" overflowY="auto">
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "You" ? "flex-end" : "flex-start"} bg="blue.100" p={3} borderRadius="lg">
              {msg.text}
            </Box>
          ))}
        </VStack>
        <Flex mt={4}>
          <Input placeholder="Type a message..." value={inputValue} onChange={handleInputChange} size={chatInputSize} />
          <Button onClick={handleSendMessage} colorScheme="blue" ml={2}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;