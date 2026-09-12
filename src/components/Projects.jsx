import project1 from "../assets/instagra.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import FixMyArea from "../assets/fixmyareaProject.png";
import findyourstay from "../assets/findyourstay.png";
import portfolio from "../assets/portfolioProject.png";
import interviewIQ from "../assets/interviewIq.png";
import tictactoe from "../assets/tictactoe.png"
function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "FindYourStay - Airbnb Clone",

      desc: "A full-stack rental platform where users can explore properties, search destinations, view detailed listings, and manage stays with secure authentication and a responsive user-friendly interface.",

      image: findyourstay,

      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Bootstrap",
        "Passport.js",
        "Cloudinary",
      ],

      github: "https://github.com/shaquib132/Find_Your_Stay",

      demo: "https://find-your-stay-maao.onrender.com/listing",
    },
    {
      id: 2,
      title: "FixMyArea",
      desc: "A full-stack civic reporting platform where users can report local issues with images, videos, GPS location, and witness details while authorities manage and track complaints.",
      image: FixMyArea,
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "JWT",
        "Multer",
        "Axios",
        "React Router",
      ],

      github: "https://github.com/shaquib132/FixMyArea",
      demo: "https://fix-my-area.netlify.app/",
    },

    {
      id: 3,
      title: "InterviewIQ.AI",
      desc: "An AI-powered smart interview platform that helps users practice role-based mock interviews with follow-up questions, adaptive difficulty, real-time feedback, and performance evaluation.",
      image: interviewIQ,
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI",
        "Tailwind CSS",
        "JWT",
        "Framer Motion",
      ],
      github: "https://github.com/shaquib132/AI-interview",
      demo: "https://YOUR-INTERVIEWIQ-SITE.netlify.app",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      desc: "A modern, responsive personal portfolio website to showcase my skills, projects, and experience as a Full Stack MERN Developer. Designed with a clean UI, smooth animations, and a professional look.",
      image: portfolio,
      tags: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Router",
        "EmailJS",
      ],
      github: "https://github.com/shaquib132/portfolio",
      demo: "https://portfolio-shaquib.netlify.app/",
    },
    {
      id: 5,
      title: "Tic Tac Toe",
      desc: "A fun and interactive Tic Tac Toe game built with React, featuring responsive design, win and draw detection, reset and new game functionality, and interactive sound effects.",
      image: tictactoe,
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "Game Logic",
      ],
      github: "https://github.com/shaquib132/TicTacToe",
      demo: "https://tictactoe-shaquib.netlify.app/",
    },
  ];
  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-10 " data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 "
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A Showcase of My recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((projects, index) => (
            <div
              key={projects.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to  right, #1f2937, #111827)"
                  : "linear-gradient(to  right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-40 overflow-hidden rounded-t-xl ">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500:"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {projects.title}
                </h3>
                <p
                  className="text-sm mb-3 leading-relaxed"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {projects.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={projects.github}
                    target="_blank"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in "
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm " />
                    <span>Code</span>
                  </a>
                  {/* demo  */}
                  <a
                    href={projects.demo}
                    target="_blank"
                    style={{
                      background:
                        "linear-gradient(to  right, #f97316, #f59e0b)",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm text-white rounded-lg hover:shadow-orange-500/25 hover:shadow-lg transition-all"
                    data-aos="zoom-in "
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm " />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          {" "}
          <a
            href="#projects"
            style={{
              background: "linear-gradient(to  right, #f97316, #f59e0b)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="inline-flex items-center  font-semibold  gap-2 px-7 py-4 text-sm text-white rounded-full hover:shadow-orange-500/25 hover:shadow-lg transition-all"
            data-aos="zoom-in "
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm " />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
