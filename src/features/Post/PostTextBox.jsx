import React, { useState } from "react";
import { Flex, Text, Textarea } from "@chakra-ui/react";

export function PostTextBox() {
  const [value, setValue] = useState("");

  let handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Flex direction={"column"} boxShadow='base' w={"full"}>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Tell your friends, How are you feeling today?'
        size='sm'
      />
    </Flex>
  );
}
