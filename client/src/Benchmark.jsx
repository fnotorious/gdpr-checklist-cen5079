import { Checkbox, Text, VStack } from '@chakra-ui/react'

const Benchmark = ({ text, citation }) => {
  return (
    <Checkbox size='lg' colorScheme='green' gap={4}>
        <VStack alignItems="start" gap={1}>
          <Text color="white" fontSize="lg" as="b">
              {text}
          </Text>
          <Text color="white" fontSize="sm" as="i">
              {citation}
          </Text>
        </VStack>
    </Checkbox>
  )
}

export default Benchmark