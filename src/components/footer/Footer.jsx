import React from 'react';
import {
    Box,
    Container,
    Divider,
    Link,
    SimpleGrid,
    Stack,
    Text,
    HStack,
    Image,
  } from '@chakra-ui/react';

import nigeria from '../assets/ng.svg'
import usa from '../assets/usa.svg'
import sendChamp from '../assets/sendchamp.png'



const Footer = () => {
  return (
    <Box
    backgroundColor={'#0D253F'}
    color={'#fff'}>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }}
        spacing={8}
        py={10}
        fontFamily='inherit'
        fontSize={'16px'}
       >
          <Stack align={'flex-start'}>
          <Text color={'#95968F'}  fontWeight='650' >Products</Text>
            <Link href="/#noCodeTools">Channels / Router</Link>
            <Link href="/#noCodeTools">Verification</Link>
            <Link href="/#noCodeTools">No-Code Tools</Link>
          
        </Stack>
        <Stack align={'flex-start'} >
          <Text color={'#95968F'}  fontWeight='650'>Solutions</Text>
          <Link href="/#noCodeTools" >Onboard</Link>
          <Link href="/#noCodeTools">Engage</Link>
          <Link href="/#noCodeTools">Support</Link>
          <Link href="/#noCodeTools">Retain</Link>
          
        </Stack>
        <Stack align={'flex-start'}>
        <Text color={'#95968F'}  fontWeight='650' >Resources</Text>
          <Link href="/#noCodeTools">Developers</Link>
          <Link href="/#noCodeTools">API Reference</Link>
          <Link href="/#noCodeTools">Guides</Link>
          <Link href="/#noCodeTools">SDKs/Libraries</Link>
          <Link href="/#noCodeTools">Community</Link>
          <Link href="/#noCodeTools">Status Page</Link>
          <Link href="/#noCodeTools">Pricing</Link>
        </Stack>
        <Stack align={'flex-start'}>
        <Text color={'#95968F'}  fontWeight='650' >Company</Text>
          <Link href="/#noCodeTools">About Us</Link>
          <Link href="/#noCodeTools">Our Stories</Link>
          <Link href="/#noCodeTools">Careers</Link>
          <Link href="/#noCodeTools">Contact</Link>
          <Link href="/#noCodeTools">Terms Of Use</Link>
          <Link href="/#noCodeTools">Privacy</Link>
        </Stack>
        <Stack align={'flex-start'}>
        <Text color={'#95968F'}  fontWeight='650'>Follow us</Text>
          <Link href="/#noCodeTools">Twitter</Link>
          <Link href="/#noCodeTools">LinkedIn</Link>
          <Link href="/#noCodeTools">Facebook</Link>
          <Link href="/#noCodeTools">Instagram</Link>
        </Stack>
        <Stack align={'flex-start'}>
        <Text color={'#95968F'}  fontWeight='650' >Contact us</Text>
          <Link href="/#noCodeTools">+234(0)18880261</Link>
          <Link href="/#noCodeTools">sales@sendchamp.com</Link>
          <Link href="/#noCodeTools">help@sendchamp.com</Link>
        </Stack>
      </SimpleGrid>
      <Divider />
      <HStack display={{md:'flex', base:'grid'}} textAlign={{md:'start', base:'center'}} spacing='24px' paddingBottom={'49px'} paddingTop={'49px'} padding={'49px 1%'}>
          <Image src={sendChamp} w='227px' h='48px' marginRight={{md:'101px', base:'0 auto'}} margin={{base:'0 auto'}}  />
             
          <Box  h='48px'  display={'flex'}>
              <Image w={'40px'} marginRight={'16px'} src={nigeria} display={{md:'flex', base:'none'}}/>
              <Text fontSize={{base:'18px'}}>142, Ahmadu Bello Way, Victoria Island,<br />
              Lagos, Nigeria</Text>
          </Box>
          <Box  h='48px'  display={'flex'} paddingTop={{md:'0', base:'20px'}} paddingBottom={{md:'0', base:'40px'}}>
          <Image w={'40px'} marginRight={'16px'} src={usa}  display={{md:'flex', base:'none'}} />
                  <Text fontSize={{base:'17px'}}>2055 Limestone Rd STE 200-C Wilmington,<br />
                    DE 19808
                  </Text>
          </Box>
      </HStack>
      <Divider />
      <Box>
        <Text textAlign={{md:'0', base:'center'}} color={'#909FA7'} p={4}>Built with ❤️ at Sendchamp Inc. - © 2023 | All rights reserved</Text>
      </Box>
    </Container>
  </Box>
  )
}

export default Footer