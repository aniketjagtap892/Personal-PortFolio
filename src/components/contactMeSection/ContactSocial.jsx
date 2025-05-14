import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/aniket-jagtap45/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/aniketjagtap892" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/aniket_jagtap__45?igsh=MWh6bnVzM2U1MXJ0" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
