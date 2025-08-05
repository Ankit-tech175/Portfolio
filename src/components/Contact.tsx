import { useState } from "react";
import FloatingInput from "./FloatingInput.tsx";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import validateform from "./validation.tsx";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { db } from "../firebase.tsx";
import toast from "react-hot-toast";

const Contact = (props:any) => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }
    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateform(id, value) ?? "" });
    }

    const handleSubmit = async () => {
        let Valid = true;
        let newFormError: { [key: string]: string } = {};
        for (const key in formData) {
            const error = validateform(key, formData[key]);
            if (error) {
                Valid = false;
                newFormError[key] = error;
            }
        };
        setFormError(newFormError);
        if (Valid){
            setFormData(form);
            await addDoc(collection(db, "Ankit Chauhan"), formData);    
            setFormData(form);
            toast.success('Successfully submitted!', { duration: 3000 });
              // Reset form after successful submission
        }
        else {
            toast.error('Please fill all fields correctly!', { duration: 3000 });
        }
    }
    return (
        <div className="px-16 mx-20 my-10 font-mono " id="Contact">
            <h1 className="text-4xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
            <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] !shadow-[0_0_10px_0_#64FFDA50] m-auto border border-primaryColor rounded-3xl p-8 flex flex-col gap-6">
                <div className="text-3xl text-white font-semibold ">Let's Connect</div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange}  error={formError.name}/>
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email}/>
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone}/>
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message}/>
                <Button onClick={handleSubmit} className="!text-bgColor !font-bold !text-2xl" variant="filled" size="lg" radius="lg" color="#64FFDA" fullWidth rightSection={<IconArrowRight size={20}/>}>Send</Button>
            </div>
        </div>
    )
}

export default Contact; 