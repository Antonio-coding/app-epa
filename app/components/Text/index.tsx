import React from "react";

const sizeClasses = {
  txtInterRegular12Blue800: "font-inter font-normal",
  txtInterMedium16Blue800: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterMedium1114: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal italic",
  txtInterRegular23: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
