/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

function Pin() {
  return (
    <Wrapper>
      <Container>
        <img src='https://images.unsplash.com/photo-1534806391029-791d2695c38b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhYmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 ' />
      </Container>
    </Wrapper>
  );
}
export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;
// object fit so image is scaled properly
