import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"


import {motion} from 'framer-motion';
import {fadeIn} from '../variants'


const Home = () => {
  return (
  <div className="h-full bg-primary/20">
    <div className="w-full h-full bg-gradient-to-r form-primary/10 via-black/30 to-black/10">
      <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
        <motion.h1 
        className="h1"
        variants={fadeIn('down',0.2)} 
        initial="hidden" 
        animate="show"
        exit="hidden"
        >
          Hi im <br />
          <b> <span className=" text-accent">M</span>alindu   <span className="text-accent ">A</span>deesha</b>
          </motion.h1>
          <motion.p 
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et, 
            <br />
              <b><span className="text-accent ">UI/UX </span>DESIGNER</b>
            <br />
              <b><span className="text-accent ">WEB </span>DEVELOPER</b>
            <br />
            quidem doloribus exercitationem omnis deleniti beatae eos maiores 
            incidunt vel.
          </motion.p>
      <div className="relative flex justify-center xl:hidden">
        <ProjectBtn/>
      </div>
      <motion.div 
      variants={fadeIn('down',0.4)} 
      initial="hidden" 
      animate="show"
      exit="hidden"
      className="hidden xl:flex">
        <ProjectBtn/>
      </motion.div>
      </div>
    </div>
    {/* {image} */}
    <div className="w-[1220px] h-full absolute right-0 bottom-0">
      {/* {bg-img} */}
      <div className="absolute w-full h-full bg:none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeate mix-blend-color-dodge translate-z-0">
           <Image src='/backgr.png' width={1250}height={1000}alt=""className="h-full translate-z-0 mix-blend-color " />
        </div>
        {/* <div>particals</div> */}
        <div className="w-full h-full max-w-[600px] max-h-[500px] absolute -bottom-0
          lg:bottom-[48%] lg:right-[10%]">
            <Avatar/>
          </div>
    </div>
    </div>
    );
};

export default Home;
