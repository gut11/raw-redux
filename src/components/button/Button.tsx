import { ReactNode } from "react";

const Button = ({
  children,
  btnClass,
  onClick,
}: {
  children: ReactNode;
  btnClass?: string;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
