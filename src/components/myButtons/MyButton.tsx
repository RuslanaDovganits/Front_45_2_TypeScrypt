// пример отдельного компонента кнопки
// экспорт по умолчанию перед обьявлением функции

interface IMyButtonProps{
    text?: string
    type?: 'button' | 'submit' | 'reset'
    func?: () => void
}


export default function MyButton({ func, text='click me', type = "submit" }:IMyButtonProps) {
  return (
    <button type={type} onClick={func}>
      {text}
    </button>
  );
}
