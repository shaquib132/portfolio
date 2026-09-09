import about from "../assets/withlaptop.png";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        <figure
          className="flex justify-center items-center relative order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="relative w-87.5 h-112.5 sm:w-100 sm:h-125 lg:w-125 lg:h-137.5 flex items-center justify-center">
            
            <div
              className="
                absolute
                w-87.5 h-87.5
                sm:w-100 sm:h-100
                lg:w-125 lg:h-125
                bg-linear-to-l
                from-[#f97316]
                via-[#fb923c]
                to-[#f59e0b]
                rotate-12
                star-shape
                z-0
              "
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            <img
              src={about}
              alt="Shaquib Ansari"
              className="
                relative
                z-10
                h-100
                sm:h-117.5
                lg:h-130 w-auto  max-w-none  object-contain  transition-transform duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <header>
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-olive-600 bg-clip-text text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About <span className="text-orange-500">Me</span>
            </h1>
          </header>

          <p
            className={` text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm   ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="500 "
          >
            I'm a Full Stack MERN Developer passionate about building modern,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into scalable digital experiences using React, Node.js,
            Express, and MongoDB.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <h3 className="text-2xl font-bold text-orange-500">B.TECH</h3>
              <div
                className={`text-xs sm:text-sm lg:text-base  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                CSE(AI&ML)
              </div>
            </div>

            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="750"
            >
              <h3 className="text-2xl font-bold text-orange-500">5+</h3>
              <div
                className={`text-xs sm:text-sm lg:text-base  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Projects Completed
              </div>
            </div>

            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="850"
            >
              <h3 className="text-2xl font-bold text-orange-500">MERN</h3>
              <div
                className={`text-xs sm:text-sm lg:text-base  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Full Stack
              </div>
            </div>
          </div>
          <button
            className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${darkMode ? "text-white bg-orange-500/10" : "text-gray-800 bg-white/90"}`}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
