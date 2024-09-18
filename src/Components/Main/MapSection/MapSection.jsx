import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapImg from "../../../assets/Imgs/map.png";
import "./MapSection.scss";

const MapSection = () => {
  const [map, setMap] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleToggleMap() {
    if (isAnimating) return;
    setIsAnimating(true);

    if (map) {
      setMap(false);
      setIsAnimating(false);
    } else {
      setMap(true);
      setIsAnimating(false);
    }
  }

  return (
    <div className="map-section">
      <div className="map-section-button" onClick={handleToggleMap}>
        <img src={mapImg} alt="Map" />
        <button>Map</button>
      </div>
      <AnimatePresence>
        {map && (
          <motion.div
            key="map"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setIsAnimating(false)} // Reset animation state
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9775045708675!2d44.59875957581526!3d40.18731407147738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa4a0e909bd89%3A0x82b95444dba6e79c!2sAstafyan%20Hall!5e0!3m2!1shy!2sam!4v1726600125607!5m2!1shy!2sam"
              width="600"
              height="450"
              title="Astafyan"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapSection;
