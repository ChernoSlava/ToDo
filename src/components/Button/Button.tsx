import React, { SVGProps } from 'react';

import {
  AddIcon,
  FinishIcon,
  RemoveIcon,
  EditIcon,
  RevertIcon,
} from './images';
import { ButtonType } from './types';
import { ButtonStyled } from './styled';

// type - add, remove, edit, done, revert
const images: {
  [key in ButtonType]: React.FC<SVGProps<SVGSVGElement>>;
} = {
  add: AddIcon,
  finish: FinishIcon,
  remove: RemoveIcon,
  edit: EditIcon,
  revert: RevertIcon,
};

export const Button: React.FC<{
  title: string;
  type: ButtonType;
  onClick: () => void;
  isDisabled?: boolean;
}> = ({ title, type, onClick, isDisabled }): JSX.Element => {
  const Icon = images[type] || AddIcon;

  return (
    <ButtonStyled
      title={title}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      aria-hidden
      isDisabled={!!isDisabled}>
      <Icon />
    </ButtonStyled>
  );
};

Button.defaultProps = {
  isDisabled: undefined,
};

export { ButtonType };
