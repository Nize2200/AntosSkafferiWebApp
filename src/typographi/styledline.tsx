import styled from "styled-components";
import React from "react";

const Solidline = styled.div`
    height: 0px;
    left: 70px;
    top: 142px;
    
    border: 1px solid #000000;

`;

const GreySolidLine: React.FC = () => {


    return (
        <>
            <Solidline/>
        </>
    );
};
export default GreySolidLine;