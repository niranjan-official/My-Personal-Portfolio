import React from "react";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function Reveal({ children, width }) {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
Reveal.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
};
Reveal.defaultProps = {
  width: "fit-content",
};

export default Reveal;
