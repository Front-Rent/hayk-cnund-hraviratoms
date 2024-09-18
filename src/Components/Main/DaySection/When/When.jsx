import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import when from "../../../../assets/Imgs/when-section.jpg";

const When = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="day-section-when"
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="day-section-when-img">
        <motion.img
          src={when}
          alt=""
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <h2>Place</h2>
      <p>
        Astafyan Hall Restorant, <br /> Ջրվեժ 2-րդ թաղամաս, 6/10
      </p>
    </motion.div>
  );
};

export default When;
