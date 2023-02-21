import React from "react";
import { useRecoilState } from "recoil";
import { Box, Text, Select, Container } from "@chakra-ui/react";
import "./pricing.css";
import { CountryListAtom } from "../../recoil/atom/CountryAtom";
import { pricingList } from "../Data";

const Pricing = () => {
  const [_, SetCountry] = useRecoilState(CountryListAtom);
  const onSelectChange = (e) => {
    let country = pricingList.find((p) => p.name === e.target.value);
    console.log(country);
    SetCountry([country]);
  };
  return (
    <div style={{ backgroundColor: "#EFF4FE" }}>
      <Box
        className="pricing"
        textAlign="center"
        fontSize="48px"
        paddingBottom={"6rem"}
        paddingTop="100px"
        
      >
        <Container>
          <Text
            fontSize="48px"
            fontWeight="600"
            fontFamily={"sans-serif"}
            fontStyle="normal"
            paddingBottom={"32px"}
          
          >
            Pricing for every  business
          </Text>
          <Text fontSize="18px" paddingBottom={"64px"}>
            No hidden fees or charges - simple & flexible pricing that fits with
            <br /> your business at any stage.
          </Text>
          <Box
            display={{ base: "block", md: "flex" }}
            placeContent="center"
            textAlign="center"
            justifyContent={"center"}
            margin="0 10%"
          >
            <Select
              width="282px"
              height="64px"
              bgColor="#ffffff"
              borderRadius="15px"
              placeholder="Nigeria"
              marginRight={"5"}
            >
        
              <option>Andorra</option>
              <option>United Arab Emirates</option>
              <option>Afghanistan</option>
            </Select>
            <Select
              width="282px"
              height="64px"
              placeholder="NGN"
              bgColor="#ffffff"
              borderRadius="15px"
              marginRight="16px"
              fontSize="20px"
              inputMode="text"
              onChange={onSelectChange}
            >
              {pricingList.map((eachPrice, key) => {
                return (
                  <option key={key} value={eachPrice.name}>
                    {eachPrice.name}
                  </option>
                );
              })}
      
            </Select>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Pricing;
