import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context";
import Loading from "../generic/Loading/Loading";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../dnd/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  StyledSidebar,
  StyledBrowser,
  StyledMenu,
  StorageItem
} from "./styles";

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
