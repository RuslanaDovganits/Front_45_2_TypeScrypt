import MyButton from "../myButtons/MyButton";
import MyInput from '../myInput/MyInput'

export default function LoginForm() {
  return (
    <div>
      {/* <form><form/> */}
      <span style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
        Form:
      </span>
      <MyInput
        name="login"
        type="text"
        placeholder="enter your login"
        label="login:"
      />
      <MyInput
        name="email"
        type="text"
        placeholder="enter your email"
        label="email:"
      />
      <MyInput
        name="password"
        type="text"
        placeholder="enter your password"
        label="password:"
      />
      <MyButton type="submit" text="submit" />
    </div>
  );
}
