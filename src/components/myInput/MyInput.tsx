import style from "./myInput.module.css";

interface IMyInputProps {
  name: string;
  type: 'text';
  placeholder: string;
  label: string;
}

export default function MyInput({ name, type, placeholder, label }:IMyInputProps) {
  return (
    <div className={style.input_container}>
      <label htmlFor={name}> {label} </label>
      <input
        className={style.input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
