"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("xvoneoye");
    if (state.succeeded) {
        return (
            <main>
                <body className="bg-gray-200">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="flex flex-wrap -m-4 justify-center">
                            <div className="p-4 mt-36 w-2/3 sm:w-1/2 lg:w-1/3 bg-[#F1F1F1] rounded-xl">
                                <h3 className="text-center pb-10">
                                    Thank you for your message. Hope you always have a nice day!
                                </h3>
                                <div className="flex items-center flex-wrap justify-center ">
                                    <a href="">
                                        <button className="edu-box hover:cursor-pointer" id="back">
                                            Back to home page
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </main>
        );
    }

    return (
        <section id="contact" className="bg-white body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="my-2 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]">
                        CONTACT
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-xl text-[#1E1E1E]">
                        Write me your message, question, or anything here!
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2 justify-center">
                        <div className="p-2 w-3/4">
                            <div className="relative">
                                <form
                                    action="https://formspree.io/f/xvoneoye"
                                    method="POST"
                                    onSubmit={handleSubmit}
                                    autoComplete="off"
                                >
                                    <label
                                        className="leading-7 text-lg text-[#1E1E1E]"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="w-full bg-[#1D202B]  rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder="Insert your name"
                                        required
                                        id="name"
                                        type="name"
                                        name="name"
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                    />
                                    <label
                                        className="leading-7 text-lg text-[#1E1E1E]"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder="Insert your email"
                                        required
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-lg text-[#1E1E1E]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] h-32 text-base outline-none text-[#EDEDED] py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                                        placeholder="Insert your message"
                                        required
                                        id="message"
                                        name="message"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <div className="mt-10 items-center">
                                        <button
                                            className="send-button"
                                            type="submit" id="submit"
                                            disabled={state.submitting}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <section id="footer">
                            <div className="w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a
                                    className="text-[#1E1E1E] hover:text-[#70667a] block leading-normal my-5 text-lg"
                                    href="mailto:ngurah.tristanputra@gmail.com"
                                >
                                    ngurah.tristanputra@gmail.com
                                </a>
                                <span className="inline-flex pb-5">
                                    <a className="ml-4 text-[#1E1E1E] hover:text-[#70667a]" href="https://www.linkedin.com/in/tristan-putra-779547277" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </span>
                                <span className="inline-flex pb-5">
                                    <a
                                        className="ml-4 text-[#1E1E1E] hover:text-[#70667a]"
                                        href="https://www.instagram.com/triznx2_/"
                                        target="_blank"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                x="2"
                                                y="2"
                                                rx="5"
                                                ry="5"
                                            ></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/Tristanputra2119/"
                                        target="_blank"
                                        className="ml-4 text-[#1E1E1E] hover:text-[#70667a]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
function App() {
    return <ContactForm />;
}
export default App;
