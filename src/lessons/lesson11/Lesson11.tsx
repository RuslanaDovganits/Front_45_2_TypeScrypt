import { useEffect, useState } from "react";
import styles from "./lesson11.module.css";
import Loader from "../../components/loader/Loader";
import MyButton from "../../components/myButtons/MyButton";

interface IPhotoAndFact {
  fact: string;
  url: string;
}

export default function Lesson11(): JSX.Element {
  // переменные состояния

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photoAndFact, setPhotoFact] = useState<IPhotoAndFact[]>([]);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  const getFactAndPic = async (): Promise<void> => {
    setIsLoading(true);
    const resFact = await fetch("https://catfact.ninja/fact");
    const dataAboutFact = await resFact.json();

    const resPhoto = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const dataAboutPhoto = await resPhoto.json();

    setPhotoFact((prev) => [
      
      ...prev,
      { fact: dataAboutFact.fact, url: dataAboutPhoto[0].url },
    ]);
   
    setIsLoading(false)
    setIsButtonVisible(true)
  };



  useEffect(() => {
    getFactAndPic();
  }, []);

  const handleDeleteAllData = (): void => {
    setPhotoFact([]);
    setIsButtonVisible(false);
  };

  console.log(photoAndFact);

  return (
    <div className={styles.factsContainer}>
      <div className={styles.buttonContainer}>
        {<MyButton func={getFactAndPic} text="next fact" /> }

        <div>
          {isButtonVisible ? (
            <MyButton func={handleDeleteAllData} text="delete all data" />
          ) : null}
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.photoFactContainer}>
          {photoAndFact.map((card, index) => (
            <div key={index} className={styles.card}>
              <p>{card.fact}</p>
              <img src={card.url} alt="" height={200} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
