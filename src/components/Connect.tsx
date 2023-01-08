import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Connect() {
  return (
    <section id="connect" className="mt-20">
      <div className="container mx-auto px-8 pb-8 text-center">
        <div className="flex flex-col justify-center w-full ">
          <MdOutlineConnectWithoutContact size={60} className="mx-auto mb-6" />
          <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-white">
            Reach Me
          </h1>
          <p className="leading-relaxed mx-2 sm:mx-auto text-sm sm:text-md">
            If you have any questions or want to collaborate with me, feel free
            to contact me.
          </p>
          <div className="flex flex-row justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/ahmadsultanid/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
                className="w-9 h-9 mr-4 sm:w-12 sm:h-12 sm:mr-6"
              />
            </a>
            <a
              href="https://www.instagram.com/ahmadsultanid/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new.png"
                alt="instagram"
                className="w-9 h-9 mr-4 sm:w-12 sm:h-12 sm:mr-6"
              />
            </a>
            <a
              href="https://www.github.com/ahmadsultani/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/github--v5.png"
                alt="github"
                className="w-9 h-9 mr-4 sm:w-12 sm:h-12 sm:mr-6"
              />
            </a>
            <a
              href="https://www.twitter.com/arctanxyz/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="twitter"
                className="w-9 h-9 mr-4 sm:w-12 sm:h-12 sm:mr-6"
              />
            </a>
            <a
              href="https://www.facebook.com/ahmadsultanidayanullah/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="facebook"
                className="w-9 h-9 mr-4 sm:w-12 sm:h-12 sm:mr-6"
              />
            </a>
            <a
              href="https://wa.me/6282193179080"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="whatsapp"
                className="w-9 h-9 sm:w-12 sm:h-12"
              />
            </a>
          </div>
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="text-sm sm:text-base mx-auto mt-6 w-30 text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-md"
          >
            Send Message!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;
