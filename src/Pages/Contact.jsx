/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import Connect from '../Components/Connect';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    let timeout;
    if (messageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000); // Message disappears after 5 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageSent]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdphp8g",
        "template_e3zu3dp",
        formRef.current,
        "m3_cXcrmA8tRDUV6B"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='section'>
      <div className='container mx-auto md:px-12 w-full'>
        <div data-aos="fade-up" data-aos-duration="2000" className='py-6 mx-auto text-center font-bold lg:text-xl text-2xl'>
          <h2>Contact Me</h2>
          <span className='flex text-sm text-gray-400 mt-3'>Appreciate you taking the time to browse my portfolio! If you have any inquiries or opportunities, feel free to reach out. I'm always up for collaboration and embracing new challenges.</span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='lg:flex lg:gap-x-4'>
          <Connect />
          <div data-aos="fade-up" data-aos-duration="2000" className='shadow-inner shadow-cyan-900 bg-transparent backdrop-blur rounded-xl py-6 lg:mt-0 mt-5'>
            <div className='font-bold lg:text-lg text-2xl text-gradient tracking-wide text-center'>
              <h2>Let's build something together...</h2>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3 my-5 lg:w-[56.2vw] px-5">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="lg:p-2 p-3 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="lg:p-2 p-3 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="p-2 lg:px-2 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="text-base custom-border px-4 lg:py-3 py-4 rounded-lg flex-short gap-2 bg-cyan-400 bg-opacity-5 transition-all group shadow-2xl hover:bg-black/20 cursor-pointer"
              />
            </form>
            {
              messageSent && (
                <p className="text-sm text-center text-gradient mt-2 mx-2">Thank you! The message has been sent successfully.</p>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
