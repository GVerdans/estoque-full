import RegisterForm from "../components/Form/RegisterForm";
import Header from "../../../components/Header/Header";
import BackButton from "../../../components/Button/BackButton";

export default function RegisterPage() {
      return (
            <>
                  <Header texto="Register" />
                  <BackButton />
                  <RegisterForm />
            </>
      );
}
