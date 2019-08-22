import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context";
import Loading from "./generic/Loading";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../dnd/constants";

const StyledSidebar = styled.div`
  /* width: 70px; */
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "300px" : "100px")};
  /* width: 100%; */
  /* flex: 1 15%; */
  display: flex;
  flex-shrink: 0;
  height: 100%;
  background: gray;
  /* padding: 20px; */
`;

const StyledBrowser = styled.div`
  background: white;
  flex-shrink: 0;
  width: 100%;
  overflow-y: auto;
  user-select: none;
`;

const StorageItem = styled.div`
  background: lightgrey;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  height: 25px;
  display: flex;
  padding-left: 5px;
  align-items: center;
  box-shadow: 0 0 5px transparent;
  transition: 0.2s ease;
  position: relative;
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

const Sidebar = () => {
  const context = useContext(GlobalContext);
  const { storageItems } = context;

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SOUND },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const [loading, setLoading] = useState(false);
  useEffect(
    function logStateItems() {
      if (storageItems && storageItems.length > 0) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    },
    [storageItems]
  );

  return (
    <StyledSidebar
      isSidebarOpen={context.isSidebarOpen}
      onClick={e => context.setSidebarOpen(!context.isSidebarOpen)}
    >
      <StyledBrowser>
        {loading && <Loading />}
        {storageItems &&
          storageItems.map((item, idx) => (
            <StorageItem ref={drag} key={idx}>
              {item.name}
            </StorageItem>
          ))}
      </StyledBrowser>
    </StyledSidebar>
  );
};
export default Sidebar;
