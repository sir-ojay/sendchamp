import React from "react";
import {useRecoilValue} from "recoil";

import {
  Box,
  Container,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import one from '../../components/assets/msg.png'
import { CountryListAtom } from "../../recoil/atom/CountryAtom"
import {pricingList}  from "../Data"
const PricingCards = () => {
  let CountryList = useRecoilValue(CountryListAtom)[0] || pricingList[0]
  console.log(CountryList)
  return (
    <Container className='container'>
      <Center>
        <SimpleGrid
          className="pricingcard"
          templateColumns="repeat(3, 350px)"
          gap={6}
          display={{ md: "grid" }}
        >
         {["sms","voice","email","whatsapp","verification"].map((service,key)=>
          <Card className='card' key={key}>
          <CardHeader>
              <Image width={'64px'} height={'64px'} src={one}/>
            </CardHeader>
            <CardBody paddingLeft={"40px"} paddingRight={"24px"}>
              <Text fontSize={"20px"} fontWeight={"600"} marginTop="1px">
                {service}
              </Text>
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Text fontSize={"16px"} marginTop="24px">
                    To Send SMS
                  </Text>
                  <Text fontSize={"16px"} marginTop="11px">
                    <span>{
                      service=="whatsapp" || service==="verification"?
                    CountryList?.item[0][service][0]
                    :
                    CountryList?.item[0][service]
                    }</span>
                  </Text>
                </Box>
                {
                      service=="whatsapp" || service==="verification"?

                <Box>
                  <Text fontSize={"16px"} paddingTop="22px">
                    {/* To Receive SMS */}
                    {
                      service==="whatsapp"? "To Receive Message":
                      "To Confirm OTP"
                    }
                  </Text>
                  <Text  fontSize={"16px"} paddingTop="22px"
                  >
                    { CountryList?.item[0][service][1]}
                  </Text>
                </Box>:<Box>
                  <Text fontSize={"16px"} paddingTop="22px">
                    To Receive SMS
                  </Text>
                  <Text
                    bgColor={"#EDF5FE"}
                    color="#2F8EFF"
                    textAlign={"center"}
                    marginTop="8px"
                    padding="2px"
                    borderRadius={"12px"}
                    fontSize="12px"
                    fontFamily={'"DM Sans"'}
                  >
                    Coming Soon
                  </Text>
                </Box>
                }

              </Box>
            </CardBody>
            <Divider color={" #97d1f3"} />
            <CardFooter className="CardFooter" justify={"center"}>
              <Text
                fontSize={"20px"}
                textDecorationLine="underline"
                color={"#0555A8"}
                fontFamily="HafferXH,sans-serif"
              >
                More details
              </Text>
            </CardFooter>
          </Card>
          )}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default PricingCards;
