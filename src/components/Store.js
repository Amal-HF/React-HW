import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

// import stc from "./Assests/stc.png"
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
export default function Store(props) {
  return (
    <div className='store-container'>

        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                // height={'200px'} /*hiegt */
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    // backgroundImage: `url(${IMAGE})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                    filter: 'blur(20px)',
                    },
                }}>
                {/* <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={props.image}
                /> */}
                </Box>
                <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {props.courseName}
                <hr/> 
                </Heading>
                <Text color={'blue.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.description} <br/>
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.isOnline} - {props.location}
                </Text>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'sm'} color={props.isAvailableColor}>
                        {props.isAvailable}
                    </Text>
                </Stack>
                </Stack>
            </Box>
        </Center>
    </div>
  )
}
