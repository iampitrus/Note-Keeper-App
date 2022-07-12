import { motion } from "framer-motion";

function Backdrop({ handleClose, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, zIndex: 1 }}
      onClick={handleClose}
      className="backdrop"
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
