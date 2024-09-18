import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import time from "../../../../assets/Imgs/time.jpg";

const Time = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="day-section-when"
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2>Time</h2>
      <p>
        29 September 2024 <br /> 19:00
      </p>
      <div className="day-section-when-img">
        <motion.img
          src={time}
          alt="time"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default Time;
