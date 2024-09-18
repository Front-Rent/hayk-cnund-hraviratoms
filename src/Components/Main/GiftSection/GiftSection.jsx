import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import gift from "../../../assets/Imgs/gift.jpg";

import "./GiftSection.scss";

const GiftSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      className="gift-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>If you don't know what to give as a gift, use this WishList.</h2>

      <div className="gift-section-img">
        <img src={gift} alt="nverner" />
      </div>
    </motion.section>
  );
};

export default GiftSection;
