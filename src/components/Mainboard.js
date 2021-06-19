import React from 'react';
import styled from 'styled-components';
import Pin from './Pin.js';
import './Mainboard.css';
function Mainboard(props) {
  console.log(props);
  const { pins } = props;

  return (
    <div>
      <Wrapper>
        <Container className='mainboard__container'>
          {pins.map((pins, idx) => {
            return <Pin key={idx} url={pins} />;
          })}
        </Container>
      </Wrapper>
    </div>
  );
}

export default Mainboard;

//Styled Components

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  margin-top: 15px;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  background-color: white;
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
`;
