import IntroSection from '../sections/IntroSection'
import ComplimentsSection from '../sections/ComplimentsSection'
import ProposalSection from '../sections/ProposalSection'
import DecisionAuraSection from '../sections/DecisionSection'
import MysteryEyesSection from '../sections/MysteryEyesSection'
import UseTransform from '../components/test2'
import DecisionAura from '../components/test3'


export default function Home() {
  return (
    <main>
      
      <IntroSection />
      <ComplimentsSection />
      <MysteryEyesSection />
      <ProposalSection />
      <DecisionAuraSection />
      {/* <DecisionAura /> */}
      {/* <h1>ello</h1>
      <TestConnection /> */}
      {/* <UseTransform /> */}
      
    </main>
  )
}

// "use client";

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export default function App() {
//     const ref = useRef(null);
//     const [{ width, height, top, left }, measure] = useElementDimensions(ref); // use hook
//     const gradientX = useMotionValue(0.5);
//     const gradientY = useMotionValue(0.5);
//     const background = useTransform(
//         () =>
//             `conic-gradient(from 0deg at calc(${
//                 gradientX.get() * 100
//             }% - ${left}px) calc(${
//                 gradientY.get() * 100
//             }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
//     );

//     return (
//         <section
//             style={{
//                 position: "absolute",
//                 inset: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//             }}
//             onPointerMove={(e) => {
//                 gradientX.set(e.clientX / width);
//                 gradientY.set(e.clientY / height);
//             }}
//         >
//             <motion.div
//                 ref={ref}
//                 style={{
//                     background,
//                     width: 400,
//                     height: 400,
//                     borderRadius: 50,
//                     cursor: "none",
//                 }}
//                 onPointerEnter={() => measure()}
//             />
//         </section>
//     );
// }

// /**
//  * ================  Utils  =========================
//  */

// function useElementDimensions(ref) {
//     const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

//     function measure() {
//         if (!ref.current) return;

//         setSize(ref.current.getBoundingClientRect());
//     }

//     // Note: This won't accurately reflect viewport size changes
//     useEffect(() => {
//         measure();
//     }, []);

//     return [size, measure];
// }

