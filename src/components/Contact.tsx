import React from 'react'

function Contact() {
  return (
    <section id="contact" className="mt-20">
      <div className="container mx-auto px-4 pb-10 text-center">
        <div className="flex flex-col w-full ">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact Me
          </h1>
          <p className="mb-8 leading-relaxed">
            If you have any questions or want to collaborate with me, feel free to contact me.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/6282193179080"
              target="_blank"
              rel="noreferrer"
              className="text-base inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact