import { useEffect, useState } from "react";
import { firebaseStorage } from "../config/firebase";

export const useFirebaseStorage = () => {
  const [storageItems, setStorageItems] = useState();

  useEffect(function loadLibrary() {
    const storageRef = firebaseStorage.ref("/samples/");

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
    const mapItems = async results => {
      return await Promise.all(
        results.items.map(itemRef => {
          return normalizeStorageItems(itemRef);
        })
      );
    };

    storageRef
      .listAll()
      .then(storageResults => {
        // get heirarchy structure from all folders and make a map
        storageResults.prefixes.map(folder => {
          folder
            .listAll()
            .then(items => mapItems(items).then(res => setStorageItems(res)));

          // mapItems(folder).then(items => console.log(items));
        });
        // mapItems(storageResults).then(items => setStorageItems(items));
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
