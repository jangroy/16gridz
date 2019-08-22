import { useEffect, useState } from "react";
import { firebaseStorage } from "../config/firebase";

export const useFirebaseStorage = () => {
  const [storageItems, setStorageItems] = useState();

  useEffect(function loadLibrary() {
    const storageRef = firebaseStorage.ref("/samples/kicks/");

    const getUrl = itemRef => {
      return new Promise(resolve => {
        itemRef.getDownloadURL().then(url => {
          resolve(url);
        });
      });
    };

    const getName = itemRef => {
      return itemRef.name.split(".")[0];
    };
    const normalizeStorageItems = async item => {
      const url = await getUrl(item);
      const name = getName(item);
      return { url, name };
    };

    storageRef
      .listAll()
      .then(storageResults => {
        const mapItems = async () => {
          return await Promise.all(
            storageResults.items.map(itemRef => {
              return normalizeStorageItems(itemRef);
            })
          );
        };
        mapItems().then(items => setStorageItems(items));
      })
      .catch(error => {
        console.log(
          "There was an error fetching from Firebase storage:",
          error
        );
      });
  }, []);
  return { storageItems };
};
