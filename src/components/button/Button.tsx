import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/icon-minus.svg';
import { ReactComponent as AddIcon } from '../../assets/images/icon-cart.svg';
import { ReactComponent as PreviousIcon } from '../../assets/images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../../assets/images/icon-next.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/icon-delete.svg';

import * as S from './style.js';

type ButtonProps = {
  children?: string;
  icon?: string;
  addcart?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BUTTON_ICONS: any = {
  plus: <PlusIcon />,
  minus: <MinusIcon />,
  add: <AddIcon />,
  previous: <PreviousIcon />,
  next: <NextIcon />,
  delete: <DeleteIcon />
};

export default function Button({ children, icon, addcart, ...props }: ButtonProps) {
  const buttonIcon = icon ? BUTTON_ICONS[icon] : undefined;

  return (
    <S.Button addcart={addcart} {...props}>
      {buttonIcon}
      {children}
    </S.Button>
  );
}
