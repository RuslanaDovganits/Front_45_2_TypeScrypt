import { useEffect, useState } from "react";
import "./randomFox.css";
import MyButton from "../myButtons/MyButton";
export default function RandomFox(): JSX.Element {
  const [foxImg, setfoxImg] = useState<string>("");
  const [next, setNext] = useState<number>(1);
  

  const handleNext = (): void => {
    setNext((prev) => prev + 1);
  };

 

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setfoxImg(data.image);
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  }, [next]);

  return (
    <div>
      <h2>MyFox</h2>

      <div className="fox-wrapper">
        <img src={foxImg} alt="foxImg" />
      </div>
      <MyButton text={`picture ${next}`} func={handleNext} />
     
    </div>
  );
}
