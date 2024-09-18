import { useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import sendEmail from "../../email";

import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendEmail(name, attendance);
      setTimeout(() => {
        setName("");
        setAttendance("");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setLoading(false);
    }
  };

  const animationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <motion.form
      ref={ref}
      className="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 {...animationProps(0.2)}>
        Please fill in your details
      </motion.h2>

      <div className="form-name">
        <motion.h3 {...animationProps(0.4)}>
          Write your first and last name
        </motion.h3>
        <motion.input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          {...animationProps(0.6)}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <motion.div className="form-agare" {...animationProps(0.8)}>
        <label>
          <input
            type="radio"
            name="hamadzaynvel"
            value="այո իհարկե կգամ"
            checked={attendance === "այո իհարկե կգամ"}
            onChange={(e) => setAttendance(e.target.value)}
            required
          />
          Yes, I will come
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="hamadzaynvel"
            value="կներեք բայց չեմ կարողանալու գամ"
            checked={attendance === "կներեք բայց չեմ կարողանալու գամ"}
            onChange={(e) => setAttendance(e.target.value)}
            required
          />
          I'm sorry but I have to turn you down
        </label>
      </motion.div>

      <motion.button type="submit" {...animationProps(1)} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </motion.button>

      {loading && (
        <div className="loading-indicator">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            Loading...
          </motion.div>
        </div>
      )}
    </motion.form>
  );
};

export default Form;
