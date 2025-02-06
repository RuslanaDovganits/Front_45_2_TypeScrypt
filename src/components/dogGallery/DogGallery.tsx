import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import styles from "./dogGallery.module.css";
import MyButton from "../myButtons/MyButton";

interface IDogData {
  message: string;
  status: string;
}

export default function DogGallery(): JSX.Element {
  const [imgDog, setImgDog] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dogList, setDogList] = useState<string[]>([]);
  const [favoriteDog, setFavoritedog] = useState<string[]>([]);

  const cleanList = (): void => {
    setDogList([]);
  };

  const addPicToFavorite = (): void => {
    if (!favoriteDog.includes(imgDog)) {
      setFavoritedog((prevFavoriteDog) => [...prevFavoriteDog, imgDog]);
    }
  };

  const fetchDog = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImgDog(data.message);
    setIsLoading(false);
    setDogList((prevList) => [...prevList, data.message]);
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      <h2>Dog Gallery ❤️</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.dog_wrapper}>
            <img src={imgDog} alt="" />
          </div>
          <MyButton func={fetchDog} text="next Dog" />
        </>
      )}

      <div>
        <MyButton func={cleanList} text="clean dog List" />
        <MyButton func={addPicToFavorite} text="add to favorite" />

        <ul className={styles.dogList}>
          {dogList.map((dog, index) => (
            <li className={styles.dogItem} key={index}>
              <img className={styles.dogImage} src={dog} alt="" />
            </li>
          ))}
        </ul>

        <div>
          <h2>My Favorite Dogs</h2>
          <ul className={styles.favoriteDogList}>
            {favoriteDog.map((favoritePic) => (
              <li className={styles.favoriteItem}>
                <img className={styles.favorite_pic} src={favoritePic} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
