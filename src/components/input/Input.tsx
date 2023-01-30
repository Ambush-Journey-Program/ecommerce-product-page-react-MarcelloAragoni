import * as S from './style';

type InputProps = {
  setValue: (value: string) => void;
  inputValue: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Input({ setValue, inputValue }: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return <S.Input value={inputValue} onChange={handleChange} />;
}
