import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer Internship",
    company: "Profound Edutech",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Full Stack Web Developer",
    company: "Hex Softwares",
    date: "2024 - 2025",
    responsibilities: [
      "Write clean, scalable, and well-documented code using technologies like HTML, CSS, JavaScript, and modern frameworks .",
      "Work closely with designers, backend developers, product managers.",
    ],
  },
  {
    job: "Frontend Developer",
    company: "CodeAlpha",
    date: "2025 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
