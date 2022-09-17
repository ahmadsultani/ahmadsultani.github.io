import { MdOutlineConnectWithoutContact } from 'react-icons/md';

function Connect() {
  return (
    <section id="connect" className="mt-20">
      <div className="container mx-auto px-4 pb-6 text-center">
        <div className="flex flex-col justify-center w-full ">
          <MdOutlineConnectWithoutContact
            size={60}
            className="mx-auto mb-6"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Reach Me
          </h1>
          <p className="leading-relaxed">
            If you have any questions or want to collaborate with me, feel free to contact me.
          </p>
          <div className="flex flex-row justify-center mt-4">
            <a href="https://www.linkedin.com/in/ahmadsultani/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="w-12 h-12 mr-4" />
            </a>
            <a href="https://www.instagram.com/ahmadsultani/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" className="w-12 h-12 mr-4" />
            </a>
            <a href="https://www.github.com/ahmadsultani/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/github--v5.png" alt="github" className="w-12 h-12 mr-4" />
            </a>
            <a href="https://www.twitter.com/arctanz/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" className="w-12 h-12 mr-4" />
            </a>
            <a href="https://www.facebook.com/ahmadsultanidayanullah/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className="w-12 h-12 mr-4" />
            </a>
            <a href="https://wa.me/6282193179080" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" className="w-12 h-12 mr-4" />
            </a>
          </div>
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="text-base mx-auto mt-6 w-30 text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-md"
          >
            Send Message!
          </a>
        </div>
      </div>
    </section>
  )
}

export default Connect;