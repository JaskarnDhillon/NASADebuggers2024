import React from 'react';

const Contact: React.FC = () => {
  return (

    <div className="contact-container">

      <form id="contactForm">
        <section className="text-gray-600 body-font relative mt-10">
          <div className="absolute inset-0 bg-gray-300 mt-6">
          <iframe
  width="100%"
  height="100%"
  frameBorder="0"
  marginHeight={0}
  marginWidth={0}
  title="map"
  scrolling="no"
  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Lakehead%20University%20Orillia,%20Ontario&ie=UTF8&t=&z=14&iwloc=B&output=embed"
  style={{ border: 0 }}
  allowFullScreen
></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="contact-form lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Please fill out the required information below to send us an email.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="f-input w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  type="email"
                  id="email"
                  name="email"
                  className="f-input w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  className="f-input w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  className="f-input w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="g-recaptcha m-3" data-sitekey="6Le4oqEpAAAAAKKV6eAyJpbbnuJSvL0Ih_M6Vl1M"></div>
              <button id="submitButton" className="contact-button text-white border-0 py-2 px-6 focus:outline-none rounded-lg text-lg bg-gradient-to-r from-purple-500 to-blue-600">
  Submit
</button>
              <section className="additional-info mt-3">
                <p className="additional-info-text">1 Georgian Dr, Barrie, ON L4M 3X9</p>
                <p className="additional-info-text">DeBuggers.Help@gmail.com</p>
                <p className="additional-info-text">Please allow 1-2 business days for a response.</p>
              </section>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;