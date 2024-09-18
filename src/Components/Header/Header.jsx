import { motion } from "framer-motion";
import nkar from "../../assets/Imgs/header.jpg";
import birthday from "../../assets/Imgs/birthday.png";
import "./Header.scss";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="header-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <img src={nkar} alt="Hayk" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Hayk
      </motion.h1>

      <motion.div
        className="birthday"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <img src={birthday} alt="Birthday Icon" />
      </motion.div>
    </motion.header>
  );
};

export default Header;
