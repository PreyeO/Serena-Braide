import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import perfume1 from "../assets/perfume1.jpg"; // Update with correct image paths
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.jpg";
import perfume4 from "../assets/perfume4.jpg";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="motion-container">
      {order.map((imageSrc) => (
        <motion.li
          key={imageSrc}
          layout
          transition={spring}
          className="motion-item"
        >
          <img src={imageSrc} alt="Perfume" className="motion-image" />
        </motion.li>
      ))}
    </ul>
  );
}

const initialOrder = [perfume1, perfume2, perfume3, perfume4];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
