import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as AuthService from "../../../services/auth-service/auth-service";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    watch, // Sigue el valor de cualquier input en tiempo real
    formState: { errors, isValid }, // Desestructuramos el estado: 'errors' (errores actuales) e 'isValid' (si todo está ok)
  } = useForm({
    mode: "all",
  });

  const navigate = useNavigate();

  // 'watch' observa el campo "password" constantemente para poder compararlo en la confirmación
  const passwordValue = watch("password");

  const handleUsersRegister = async (user) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, terms, ...userData } = user;
      await AuthService.register(userData);
      navigate("/login");
    } catch (error) {
      if (error.response?.status === 400 && error.response.data?.errors) {
        Object.keys(error.response.data.errors).forEach((field) => {
          setError(field, { message: error.response.data.errors[field] });
        });
      }
    }
  };

  return (
    // 'noValidate' desactiva la validación nativa del navegador para que react-hook-form tome el control absoluto
    <form
      onSubmit={handleSubmit(handleUsersRegister)}
      noValidate
      className="mx-auto"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      {/* 1. FIRSTNAME */}
      <div className="mb-3">
        <div className="input-group">
          {/* Icono de Font Awesome como prefijo estético del input */}
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
          <input
            type="text"
            // Vinculamos el input al estado "firstName" y le añadimos reglas de validación
            {...register("firstName", {
              required: "El nombre es obligatorio.",
            })}
            // Añadimos condicionalmente la clase 'is-invalid' de Bootstrap si este campo tiene errores
            className={`form-control  ${errors.firstName ? "is-invalid" : ""}`}
            placeholder="Nombre"
          />
          {/* Si existe un error en 'firstName', renderizamos el mensaje de feedback */}
          {errors.firstName && (
            <div className="invalid-feedback fw-medium">
              {errors.firstName.message}
            </div>
          )}
        </div>
      </div>

      {/* 2. LASTNAME */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-vcard-o fa-fw"></i>
          </span>
          <input
            type="text"
            {...register("lastName", {
              required: "Los apellidos son obligatorios.",
            })}
            className={`form-control bg-body-secondary text-body border-0 ${errors.lastName ? "is-invalid" : ""}`}
            placeholder="Apellidos"
          />
          {errors.lastName && (
            <div className="invalid-feedback fw-medium">
              {errors.lastName.message}
            </div>
          )}
        </div>
      </div>

      {/* 3. USERNAME */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-tag fa-fw"></i>
          </span>
          <input
            type="text"
            {...register("username", {
              required: "El nombre de usuario es obligatorio.",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres.",
              },
            })}
            className={`form-control bg-body-secondary text-body border-0 ${errors.username ? "is-invalid" : ""}`}
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <div className="invalid-feedback fw-medium">
              {errors.username.message}
            </div>
          )}
        </div>
      </div>

      {/* 4. EMAIL */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-envelope-o fa-fw"></i>
          </span>
          <input
            type="email"
            {...register("email", {
              required: "El correo electrónico es obligatorio.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "El formato del correo electrónico no es válido.",
              },
            })}
            className={`form-control bg-body-secondary text-body border-0 ${errors.email ? "is-invalid" : ""}`}
            placeholder="user@example.org"
          />
          {errors.email && (
            <div className="invalid-feedback fw-medium">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>

      {/* 5. BIRTHDATE */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-calendar fa-fw"></i>
          </span>
          <input
            type="date"
            {...register("birthDate", {
              required: "La fecha de nacimiento es obligatoria.",
              // VALIDACIÓN PERSONALIZADA: Comprobamos si el usuario cumple la mayoría de edad (18 años)
              validate: (value) => {
                const birth = new Date(value);
                const today = new Date();
                let age = today.getFullYear() - birth.getFullYear(); // Cálculo bruto de años
                const monthDiff = today.getMonth() - birth.getMonth(); // Diferencia de meses
                if (
                  monthDiff < 0 ||
                  (monthDiff === 0 && today.getDate() < birth.getDate())
                ) {
                  age--;
                }

                // Si tiene 18 o más, devuelve true (pasa la validación). Si no, devuelve el texto de error.
                return (
                  age >= 18 || "Debes ser mayor de 18 años para registrarte."
                );
              },
            })}
            className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
          />
          {errors.birthDate && (
            <div className="invalid-feedback fw-medium">
              {errors.birthDate.message}
            </div>
          )}
        </div>
      </div>

      {/* 6. PASSWORD */}
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-lock fa-fw"></i>
          </span>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres.",
              },
            })}
            className={`form-control bg-body-secondary text-body border-0 ${errors.password ? "is-invalid" : ""}`}
            placeholder="Contraseña"
          />
          {errors.password && (
            <div className="invalid-feedback fw-medium">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>

      {/* 7. CONFIRM PASSWORD */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-shield fa-fw"></i>
          </span>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Debes confirmar tu contraseña.",
              validate: (value) =>
                value === passwordValue || "Las contraseñas no coinciden.",
            })}
            className={`form-control bg-body-secondary text-body border-0 ${errors.confirmPassword ? "is-invalid" : ""}`}
            placeholder="Confirmar contraseña"
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback fw-medium">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>
      </div>

      {/* 8. TERMS AND CONDITIONS CHK */}
      <div className="form-check mb-4 text-start">
        <input
          id="terms"
          type="checkbox"
          {...register("terms", {
            required: "Debes aceptar los términos y condiciones legales.",
          })}
          className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
        />
        <label htmlFor="terms" className="form-check-label text-body small">
          Acepto los términos de uso y condiciones del servicio.
        </label>
        {errors.terms && (
          <div className="invalid-feedback fw-medium d-block">
            {errors.terms.message}
          </div>
        )}
      </div>

      {/* ACTIVE BUTTONS */}
      <div className="d-grid gap-2">
        <button
          type="submit"
          className="btn btn-danger text-uppercase fw-bold p-2 rounded-3 shadow"
          style={{ letterSpacing: "1px", fontSize: "0.9rem" }}
          disabled={!isValid}
        >
          Registrarse
        </button>

        <hr className="m-0 border-secondary-subtle" />

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="btn btn-secondary text-uppercase fw-bold p-2 rounded-3"
          style={{ letterSpacing: "1px", fontSize: "0.9rem" }}
        >
          Ir al Login
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
