"use client"

import { AnimatePresence,motion } from "framer-motion";
import NavBar from "./navBar";
import { usePathname } from "next/navigation";

const TransitionProvider =({children})=>{
    const pathName=usePathname();
    return(
      <AnimatePresence mode="wait">
         <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
           <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
           animate={{height:"0vh"}}
           exit={{height:"140vh"}}
           transition={{duration:2, ease:"easeOut"}}
           />
           
           <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl  z-50 w-fit h-fit"
           animate={{opacity:1}}
           exit={{opacity:0}}
           transition={{duration:2, ease:"easeOut"}}
           >
                {pathName}
            </motion.div>
           <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] bottom-0 z-30"
           initial={{height:"140vh"}}
           animate={{height:"0vh", transition:{delay:2 }}}
           
           />
           <div className="h-24">
             <NavBar/>
           </div>
           <div className="h-[calc(100vh-6rem)]">
            {children}
           </div>
        </div>
        </AnimatePresence>
    );
    
};

export default TransitionProvider;