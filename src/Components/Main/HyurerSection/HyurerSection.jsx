import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HyurerSection.scss";

const HyurerSection = () => {
  // Create an intersection observer for the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Create an intersection observer for individual elements
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: paragraph1Ref, inView: paragraph1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: paragraph2Ref, inView: paragraph2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="hyurer-section"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dear <br /> guest
      </motion.h2>
      <motion.p
        ref={paragraph1Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={
          paragraph1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 1, delay: 1 }}
      >
        I threwing the coolest party of the year! <br />
        You must attend, <br />
        No refusals accepted.
      </motion.p>
      <motion.p
        ref={paragraph2Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={
          paragraph2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 1, delay: 1.5 }}
      >
        Put everything aside and come to my <br />
        birthday for cool music, delicious food, <br />
        dancing <br />
        and alcohol.
      </motion.p>
    </motion.section>
  );
};

export default HyurerSection;
