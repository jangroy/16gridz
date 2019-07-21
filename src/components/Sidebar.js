import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { firebaseConfig } from "../config/firebaseconfig";
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const SidebarStyle = styled.div`
  /* width: 70px; */
  width: 300px;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  background: gray;
  padding: 20px;
`;

const Browser = styled.div`
  background: white;
  flex-shrink: 0;
  width: 100%;
`;

const LibraryItem = styled.div`
  background: red;
  width: 100%;
  height: 50px;
`;

const Sidebar = () => {
  const [libraryItems, setlibraryItems] = useState([]);
  const initLibrary = () => {
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
    const storageRef = storage.ref("/samples/kicks/");
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
        setlibraryItems(items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
    const storageRef = storage.ref("/samples/kicks/");
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
        setlibraryItems(items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (libraryItems) {
      console.log("library items", libraryItems, libraryItems.length);
    }
  }, [libraryItems, libraryItems.length]);

  return (
    <SidebarStyle>
      <Browser>
        {libraryItems.map(item => {
          console.log(item);
          return <LibraryItem>{item.name}</LibraryItem>;
        })}
      </Browser>
    </SidebarStyle>
  );
};
export default Sidebar;
