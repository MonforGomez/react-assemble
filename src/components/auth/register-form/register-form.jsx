import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";




function RegisterForm() {
    const {
        register,
        handleSubmit,
        setError,
        fromState: { errors, isValid }
    } = useForm({
        mode:"all" 
    });
    
    const navigate = useNavigate();
    
    const onSumbit = async (data) => {
        try {
            await //Servicio.Funcion(data);
            //navigate("/login");
        } catch (error) {
            if (error.response?.status === 400) {
                Object.keys(error.response.data.errors).forEach((field) => {
                    setError(field, {message: error.response.data.error[field]});
                })
            }
        }
    };

    return (
        
    )
}

export default RegisterForm; 