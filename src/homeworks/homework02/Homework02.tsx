import ProfileCard from "../../components/profileCard/ProfileCard";

export default function Homework02() {
    return(
        <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "blue", // Цвет текста
                marginLeft: "20px", // Отступ слева
                textDecoration: "underline", // Подчёркивание
                backgroundColor: "yellow", // Фон
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Тень текста
              }}>Homework 02 🐰</p>
           <ProfileCard/>
        </div>
    )
}