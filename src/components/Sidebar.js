import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context";
import Loading from "./generic/Loading";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../dnd/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledSidebar = styled.div`
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "300px" : "50px")};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  transition: 0.2s ease;
  background: lightgray;
  overflow: hidden;
`;

const StyledBrowser = styled.div`
  background: white;
  flex-shrink: 0;
  width: 100%;
  flex: 1 1;
  overflow-y: ${({ isSidebarOpen }) => (isSidebarOpen ? "auto" : "none")};
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

const StyledMenu = styled.div`
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
    <StyledSidebar isSidebarOpen={context.isSidebarOpen}>
      <StyledMenu onClick={e => context.setSidebarOpen(!context.isSidebarOpen)}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </StyledMenu>
      {context.isSidebarOpen && (
        <>
          {loading && <Loading />}
          <StyledBrowser isSidebarOpen={context.isSidebarOpen}>
            {storageItems &&
              storageItems.map((item, idx) => (
                <StorageItem
                  ref={drag}
                  key={idx}
                  onClick={e => context.setSidebarOpen(true)}
                >
                  {item.name}
                </StorageItem>
              ))}
          </StyledBrowser>
        </>
      )}
    </StyledSidebar>
  );
};
export default Sidebar;
