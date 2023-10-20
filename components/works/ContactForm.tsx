"use client"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm(){
	const form:any = useRef()
const sendmail =(e:any)=>{
	e.preventDefault();
	
	emailjs.sendForm('service_nxzg0qp', 'template_92kicnm', form.current, 'HClCMBSmuE2KgYvi2')
      .then(() => {
        //   console.log(result.text);
		  toast.success('message sent')
      }, () => {
        //   console.log(error.text);
		  toast.error('something is wrong')
      });
	  e.target.reset()
}

	return (
		<>
		<form ref={form} 
		onSubmit={sendmail}
		className="w-full h-max m-2 sm:m-0 sm:w=[700px] p-5 rounded-sm ">
<h1 className="font-bold font-titleFont text-xl mb-5">Let&apos;s Talk</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
	<input type="text" name="name" placeholder="name" className="p-2  bg-[#112240] text-textDark font-semibold border-b-2 rounded-lg"/>
	<input type="text" name="email" placeholder="email" className="p-2 text-textDark bg-[#112240] font-semibold border-b-2  rounded-lg"/>
	
	
</div>
<input type="text" name="subject" placeholder="subject" className="p-2 text-textDark mt-3 w-full bg-[#112240] font-semibold border-b-2  rounded-lg"/>
<textarea  name="message" placeholder="message" 
rows= {6}
className="p-2 text-textDark  mt-3 w-full   font-semibold  bg-[#112240]  rounded-lg  border-b-2"/>
<button className="border  mt-4 w-full py-2 rounded-2xl transition delay-100 font-titleFont text-2xl font-semibold  hover:bg-green-700">send message</button>

		</form>
		<ToastContainer 
		position="top-center"
		hideProgressBar={true}
		theme="light"
		autoClose={2000}
		/>
		</>
	)
}

