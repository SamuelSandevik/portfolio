import React, { useEffect, useRef } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

const Button = (props: Props) => {
  const ref = useRef<any>();

  useEffect(() => {
    const listener = ref?.current?.addEventListener("click", (e: any) => {});

    return () => ref?.current?.removeEventListener("click", listener);
  });

  return (
    <>
      <button ref={ref} {...props} className={`${props.className}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
