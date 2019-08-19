import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context";
import { firebaseStorage } from "../config/firebase";

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

const LibraryItem = styled.div`
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
  const [libraryItems, setLibraryItems] = useState([]);
  const context = useContext(GlobalContext);

  useEffect(() => {
    const loadStorage = () => {
      const storageRef = firebaseStorage.ref("/samples/kicks/");
      console.log("storageRef", storageRef);
      let items = [];

      storageRef
        .listAll()
        .then(result => {
          // change this to map
          result.items.forEach(itemRef => {
            itemRef.getDownloadURL().then(url => {
              items.push({ url, name: itemRef.name.split(".")[0] });
            });
          });

          console.log("pushed items", items);

          setLibraryItems(items);
        })
        .catch(error => {
          console.log(
            "There was an error fetching from Firebase storage:",
            error
          );
        });
    };
    loadStorage();
    console.log("library-items", libraryItems);
  }, []);

  useEffect(
    function logStateItems() {
      if (libraryItems.length > 0) {
        console.log("library state items", libraryItems, libraryItems.length);
      }
    },
    [libraryItems]
  );

  return (
    <StyledSidebar
      isSidebarOpen={context.isSidebarOpen}
      onClick={e => context.setSidebarOpen(!context.isSidebarOpen)}
    >
      <StyledBrowser>
        {libraryItems.map((item, idx) => (
          <LibraryItem key={idx}>{item.name}</LibraryItem>
        ))}
      </StyledBrowser>
    </StyledSidebar>
  );
};
export default Sidebar;
