import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Form/RegisterForm";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";

export default function RegisterPage() {
      const navigate = useNavigate();
      return (
            <>
                  <Header texto="Register" />
                  <Button onClick={() => navigate(-1)}>Voltar</Button>
                  <RegisterForm />
            </>
      );
}
