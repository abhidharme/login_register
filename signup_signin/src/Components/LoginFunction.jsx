import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Input,
    Flex,
    Icon,
    FormControl,
    FormLabel,
    Link,
    Center
} from '@chakra-ui/react';
import { loginUser } from "../Redux/Login/action";


export const LoginFuction = () => {

    const backgrounds = [
        `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
        `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
        `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
        `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
    ];


  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { isAuthenticated, token } = useSelector((state) => state.login);


  const handleSubmit = () => {
    const cred = {
      username,
      password
    }
    dispatch(loginUser(cred))
  };

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Box></Box>
      
      <Box>
                <Container >
 

                        <Flex
                            maxW={'640px'}
                            direction={{ base: 'column-reverse', md: 'row' }}
                            width={'full'}
                            rounded={'xl'}
                            p={10}
                            justifyContent={'space-between'}
                            position={'relative'}
                            right={'0'}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                height: '21px',
                                width: '29px',
                                left: '35px',
                                top: '-10px',
                                backgroundSize: 'cover'
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                zIndex: '-1',
                                height: 'full',
                                maxW: '640px',
                                width: 'full',
                                filter: 'blur(40px)',
                                transform: 'scale(0.98)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                top: 0,
                                left: 0,
                                backgroundImage: backgrounds[2 % 4],
                            }}>
                           
                            <Center>
                            <Flex
                              minH={'100vh'}
                              align={'center'}
                              justify={'center'}>
                              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                                <Stack align={'center'}>
                                  <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                                </Stack>
                                <Box
                                  rounded={'lg'}
                                  boxShadow={'lg'}
                                  p={8}>
                                  <Stack spacing={4}>
                                    <FormControl id="username">
                                      <FormLabel>User Name</FormLabel>
                                      <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                                    </FormControl>
                                    <FormControl id="password">
                                      <FormLabel>Password</FormLabel>
                                      <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                                    </FormControl>
                                    <br></br>
                                    <Stack spacing={10}>
                                      <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                          bg: 'blue.500',
                                        }}
                                        onClick={handleSubmit}
                                      >
                                        Sign in
                                      </Button>
                                    </Stack>
                                    <Text align={'center'}>
                                      New user? <Link href="/register" color={'blue.400'}>Sign-Up</Link>
                                    </Text>
                                  </Stack>
                                </Box>
                              </Stack>
                            </Flex>
                          </Center>

                        </Flex>
                    
                </Container>
            </Box>
    </>
  )
}


export const Blob = (IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...IconProps}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};
