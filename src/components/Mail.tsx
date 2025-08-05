import React from "react";

const Mail = ()=> {
    return <div className="!flex !items-center text-textColor gap-10 fixed bottom-32 -right-48 rotate-90" >
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left" >
        <a href="mailto:ankitchauhan19092005@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
           ankitchauhan19092005@gmail.com</a>
        </div>
        <hr className="border-[2px] w-44 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Mail;