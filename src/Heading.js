import React from 'react';
import styled from 'styled-components/macro';


const Heading = (props) => {
    return (
        <HeaderStyled className="container heading">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </HeaderStyled>
    )
}



Heading.defaultProps = {
    title: 'Related Articles',
    content: 'Seemed venerable fulness at known neer fathers sore heavenly. Charms him more plain made nor aught agen. Paphian who childe.'
}



const HeaderStyled = styled.div`
text-align: left;
padding: 1rem 0;
 h2{
   color: #ea5167;
    }
`



export default Heading;
