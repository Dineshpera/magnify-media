'use client';
import { motion } from 'framer-motion';
export function Reveal({children,delay=0}:{children:React.ReactNode;delay?:number}){return <motion.div initial={{opacity:0,y:26,filter:'blur(8px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,margin:'-80px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Magnetic({children}:{children:React.ReactNode}){return <motion.div whileHover={{scale:1.04}} whileTap={{scale:.98}}>{children}</motion.div>}
