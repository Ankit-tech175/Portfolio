const validateform =(id: string, value: string) => {
    switch (id) {
        case "name":
            if (!value) return "Name is required";
            break;
        case "email":
            if (!value) return "Email is required";
            if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
            break;
        case "phone":
            if (!value) return "Phone number is required";
            if (!/^\d{10}$/.test(value)) return "Phone number is invalid";
            break;
        case "message":
            if (!value) return "Message is required";
            break;
        default:
            return ""; 
    }
}
export default validateform;