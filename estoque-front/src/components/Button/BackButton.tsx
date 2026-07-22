import Button, { type ButtonProps } from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackButton({
      variant = "secondary",
      ...props
}: ButtonProps) {
      const navigate = useNavigate();

      return (
            <>
                  <Button
                        variant={variant}
                        onClick={() => navigate(-1)}
                        {...props}
                  >
                        Voltar
                  </Button>
            </>
      );
}
