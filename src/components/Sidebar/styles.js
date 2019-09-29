import styled from "styled-components";
import { device } from "../../styles/global/variables/sizes";

export const StyledSidebar = styled.div`
  height: ${({ isSidebarOpen }) => (isSidebarOpen ? "30%" : "50px")};
  width: 100%;
  display: flex;
  flex-shrink: 0;
  transition: 0.3s ease;
  flex-direction: column;
  background: lightgray;
  overflow: hidden;
  overscroll-behavior: contain;

  @media ${device.tablet} {
    max-height: 100%;
    height: 100%;
    width: ${({ isSidebarOpen }) => (isSidebarOpen ? "300px" : "50px")};
  }
`;

export const StyledBrowser = styled.div`
  flex-shrink: 0;
  width: 100%;
  flex: 1 1;
  overflow-y: ${({ isSidebarOpen }) => (isSidebarOpen ? "auto" : "none")};
  user-select: none;
`;

export const StorageItem = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  height: 25px;
  display: flex;
  padding-left: 5px;
  align-items: center;
  box-shadow: 0 0 5px transparent;
  transition: 0.1s ease;
  position: relative;
  &:hover {
    background: white;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.2s ease;
    z-index: -1;
    box-shadow: -5px 5px 20px 5px transparent;
    :hover {
      box-shadow: -5px 5px 20px 5px black;
    }
  }
`;

export const StyledMenu = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
  &:hover {
    background: white;
  }
`;
