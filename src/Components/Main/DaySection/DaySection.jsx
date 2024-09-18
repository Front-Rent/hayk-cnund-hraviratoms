import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Time from "./Time/Time";
import When from "./When/When";
import "./DaySection.scss";

const DaySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      className="day-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Time />
      <When />
    </motion.section>
  );
};

export default DaySection;
