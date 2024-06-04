import { Button } from "@mui/material";

const CustomButton = ({ children, className, loading, onClick, type }) => {
  return (
    <Button
      className={`${loading ? "opacity-50 cursor-not-allowed" : ""} ${className} hover:scale-105 text-xs font-semibold rounded-full whitespace-nowrap`}
      type={type}
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
