import LoginForm from "../../components/loginForm/LoginForm";

export default function Homework03() {
  return (
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
        }}
      >
        Homework 03 🐹
      </p>{" "}
      <LoginForm />
    </div>
  );
}
