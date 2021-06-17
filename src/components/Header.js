import React from 'react';
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { IconButton } from '@material-ui/core';

// Styled Components
// TRouBLe
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

// styling pinterest button in logo wrapper
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
	  color: #c60023
    font-size: 32px;
	cursor: pointer;
  }
`;
const HomePageButton = styled.button`
	display: flex;
	height: 48px;
	min-width: 123px
	align-items: center;
	justify-content: center;
	border-radius: 24px;
	cursor: pointer;
	background-color: rgb(17,17,17)
`;
// const FollowingButton = styled.button``;
// const SearchWrapper = styled.div``;
// const SearchBarWrapper = styled.div``;

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href='/'>Homepage</a>
      </HomePageButton>

      {/* <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper></SearchBarWrapper>
      </SearchWrapper> */}
    </Wrapper>
  );
}

export default Header;
