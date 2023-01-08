import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Connect() {
  return (
    <section id="connect">
      <div className="container mx-auto px-8 pb-8 text-center">
        <div className="flex flex-col justify-center w-full gap-6 ">
          <MdOutlineConnectWithoutContact size={60} className="mx-auto" />
          <div className="flex flex-col gap-4">
            <h1 className="text-[26px] sm:text-3xl font-medium title-font text-white">
              Reach Me
            </h1>
            <p className="text-sm sm:text-md leading-relaxed mx-2 sm:mx-auto">
              If you have any questions or want to collaborate with me, feel free
              to contact me.
              <br />
              For professional work, email me at <span className="text-yellow-500 font-semibold">ahmadsultanidayanullah@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/ahmadsultanid/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
                className="w-12 h-12"
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
                className="w-12 h-12"
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
                className="w-12 h-12"
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
                className="w-12 h-12"
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
                className="w-12 h-12"
              />
            </a>
          </div>
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="text-sm sm:text-base mx-auto w-30 text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded"
          >
            Send Message!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;
