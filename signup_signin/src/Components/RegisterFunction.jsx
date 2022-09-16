import { useDispatch, useSelector } from "react-redux";
import { Link , Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  Container,
  Input,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';
import { Register } from "../Redux/Register/action";




export const RegisterFunction = () => {

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("none");
  const [mobile, setMobile] = useState("90553155321");
  const [name, setName] = useState("");

  const { isAuthention } = useSelector((store) => store.sign);
  
  const navigate = useNavigate(); 

  if (isAuthention) {
    return <Navigate to="/login" />
  }
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description
    }

    dispatch(Register(payload))
  }


  return (
    <>
    <Box position={'relative'}>
    <Container
      as={SimpleGrid}
      maxW={'7xl'}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={{ base: 10, sm: 20, lg: 32 }}>
      <Stack spacing={{ base: 10, md: 20 }}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
          Sign-
          <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text">
            Up
          </Text>
        </Heading>

      </Stack>
      <Stack
        bg={'gray.50'}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}>
      
        <Box as={'form'} mt={10}>
          <Stack spacing={4}>
            <Input
              placeholder="Firstname"
              bg={'gray.100'}
              type={'text'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              bg={'gray.100'}
              type={"email"}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            placeholder="Username"
            bg={'gray.100'}
            type={'text'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
            <Input
              placeholder="Password"
              bg={'gray.100'}
              type={'password'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>
          <Button
            fontFamily={'heading'}
            mt={8}
            w={'full'}
            bgGradient="linear(to-r, red.400,pink.400)"
            color={'white'}
            _hover={{
              bgGradient: 'linear(to-r, red.400,pink.400)',
              boxShadow: 'xl',
            }}
            onClick={handleSubmit}>
            Submit
          </Button>

          <Stack pt={6}>
          <Text color={'black'} align={'center'}>
            Already a user? <Button onClick={()=>navigate("/login")} variant={'link'} colorScheme={'blue'} size={'sm'}>
            Login
          </Button>
          </Text>

        </Stack>

        </Box>
      </Stack>
    </Container>
    <Blur
      position={'absolute'}
      top={-10}
      left={-10}
      style={{ filter: 'blur(70px)' }}
    />
  </Box>
    </>
  )


}


export const Blur = (IconProps) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...IconProps}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };
