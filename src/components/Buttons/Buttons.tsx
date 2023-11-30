import React from 'react';
import './buttons.scss';

interface Props {
  name: string;
  onClick: (event: any) => void;
  className?: string;
  type: any;
}
export const PrimaryButton = (props: Props) => {
  const { name, onClick, className, type } = props;
  return (
    <button
      className={'primaryButton ' + className}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const SecondaryButton = (props: Props) => {
  const { name, onClick, className, type } = props;
  return (
    <button
      className={'secondaryButton ' + className}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
