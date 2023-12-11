import { 
  Box,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react'
import Benchmark from './Benchmark'

function App() {
  return (
    <Box bg="#242424" minH="100vh" py={20}> 
      <VStack h="100%" w="50%" mx="auto" alignItems="start" gap={12}>
        <VStack alignItems="start" gap={3}>
          <Heading color="white" fontSize="5xl" as="b">
            General Data Protection Regulation Checklist ⚖️
          </Heading>
          <Text color="white" fontSize="xl" as="i">
            Firas Natour, Andrea Martinez, Israel Pina
          </Text>
          <Text color="white" fontSize="lg" mt={6}>
            This checklist is made to help provide a simplistic benchmark for complying with General Data Protection Regulation (GDPR) requirements
          </Text>
        </VStack>
        <VStack alignItems="start" gap={14}>
          <Benchmark 
            text={"Is your company clearly stating the rights data subjects have with regards to the access, rectification, correct, and restrict controls of their data?"}
            citation={"GDPR Control 6"} 
          />
          <Benchmark 
            text={"Is your company following and properly executing an incident response plan?"}
            citation={"GDPR Controls CC19.1 and CC19.13"}
          />
          <Benchmark 
            text={"Is your company securely and transparently processing personal data for legitimate lawful purposes?"}
            citation={"GDPR Control 2"}
          />
          <Benchmark 
            text={"Does your company have in place data breach notification to notify supervisory authority and victims in accordance with all laws and legal requirements?"}
            citation={"GDPR Control 6"}
          />
          <Benchmark 
            text={"When your company does data transfers with international countries, are the transfers being well controlled and documented?"}
            citation={"GDPR Control 8"}
          />
        </VStack>
        <Text color="white" fontSize="lg">
          If all the checkboxes are checked, congratulations! 🎉 Your company is complying with the gist of the General Data Protection Regulation (GDPR).
        </Text>
        <Text color="white" fontSize="lg">
          If not, then its time to review your company's policies to comply with regulatory standards to keep your company and your data subjects safe.
        </Text>
      </VStack>
    </Box>
  )
}

export default App
