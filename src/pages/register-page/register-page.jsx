import { PageLayout } from "../../components/layout";
import { RegisterForm } from "../../components/auth";

function RegisterPage() {
  return (
    <PageLayout>
      <div
        className="mx-auto text-center"
      >
        <h1
          className="text-uppercase fw-extrabold text-danger m-0"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            letterSpacing: "-1px",
            fontSize: "3.5rem",
            lineHeight: "1",
          }}
        >
          Registro
        </h1>
        <p
          className="text-uppercase text-secondary fw-bold small mt-1 mb-4"
          style={{ letterSpacing: "2px", fontSize: "0.75rem" }}
        >
          Assemble your profile to access elite intel from across the Marvel
          Multiverse
        </p>

        <RegisterForm />
      </div>
    </PageLayout>
  );
}

export default RegisterPage;
