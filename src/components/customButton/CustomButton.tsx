import React from "react";
import { Form, Button } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | null;
};

const CustomButton = ({
  children,
  htmlType,
  onClick,
  type,
  danger,
  loading,
  shape,
  icon,
  className,
  style
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        className={className}
        style={{ display: "block", ...style }}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
