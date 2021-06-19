/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

function Pin(props) {
  const {
    orig: { url },
  } = props;
  console.log(url);
  return (
    <Wrapper>
      <Container>
        <img src={url} />
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
