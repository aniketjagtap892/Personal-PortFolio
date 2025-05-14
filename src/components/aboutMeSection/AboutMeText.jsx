import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Aniket Jagtap, a passionate Web Developer & MERN Stack Developer from Pune. I specialize in building dynamic, scalable, and user-friendly web applications using React.js, Next.js, Node.js, Express, and MongoDB.I am constantly learning and staying updated with the latest industry trends to enhance my skills and bring cutting-edge solutions to my projects. Whether you're looking for a custom website, a full-stack web application, or a performance-driven frontend, I am always excited to take on new challenges and collaborate on innovative projects.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
