import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import "./fetchFox.css";
import MyButton from "../myButtons/MyButton";

interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox():JSX.Element {
  const [imgFox, setImgFox] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFox = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch("https://randomfox.ca/floof/");
    const data:IFoxData = await res.json();
    setImgFox(data.image);
    setIsLoading(false);
  };

  useEffect(() => {
    getFox();
  }, []);

  return (
    <div>
      {isLoading ? (<Loader />) : (
        <>
          <h2>Fetch Fox 🦊 </h2>
          <div className="fox-wrapper">
            <img src={imgFox} alt="" />
          </div>
          <MyButton func={getFox} text="one more Fox please" />
        </>
      )}
    </div>
  );
}
