'use client'

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null); // Specify the type as HTMLFormElement
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ll42g35', 'template_rdpi7wb', form.current, {
          publicKey: 'nlKRI57h8AP9_iHGM',
        })
        .then(
          () => {
            setSuccessMessage('Email sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSuccessMessage('Failed to send email. Please try again.');
          },
        );
    }
  };

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div id='contact' className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,255,255)] to-white">Contac</span>t Me</h2>
        <p className="mt-2 text-lg/8 text-zinc-500">
          I’m always open to new opportunities, whether you&apos;re an agency looking for a front-end developer or a startup in need of a responsive website.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="user_name" className="block text-sm/6 font-semibold text-white">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder='Name'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgba(0,255,255)] sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="user_email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder='Email'
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgba(0,255,255)] sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder='Message'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgba(0,255,255)] sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:text-[rgba(0,255,255)] hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      </form>
    </div>
  );
}
