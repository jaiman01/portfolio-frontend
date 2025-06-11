import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <main className="max-w-[700px] mx-auto px-4 mt-12">
      <h1 className="text-white font-extrabold text-4xl mb-8">Get in Touch</h1>
      <p className="text-gray-300 mb-6">
        I’d love to hear from you! Whether you have a job opportunity, a
        question, or just want to say hello, feel free to reach out.
      </p>
      <section className="space-y-6">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-pink-400 font-semibold text-xl mb-2">Email</h2>
          <p className="text-gray-300 break-words">gauravjaiman1@gmail.com</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-cyan-400 font-semibold text-xl mb-2">Phone</h2>
          <p className="text-gray-300">+91 6377554613</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-purple-400 font-semibold text-xl mb-2">
            Address
          </h2>
          <p className="text-gray-300">
            153, Brahmpuri, Jaipur
            <br />
            Rajasthan, IND 302002
          </p>
        </div>
      </section>
    </main>
  );
};

export default GetInTouch;
