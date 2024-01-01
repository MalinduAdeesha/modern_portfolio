import Image from "next/image";
import Link from "next/link";
import{HiArrowRight}from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
  <div className='relative z-20 mx-auto xl:mx-0'>
    <Link href={'/contact'}
    className="relative w-[185px] h-[185px] flex justify-center items-center 
     bg-cover bg-center bg-no-repeat group z-999 bottom-[10%]">
      
      <Image 
      src={'/rounded-text2.png'}
      width={141}
      height={148}
      alt=''
      className="animate-spin-slow w-full h-full max-w-[150px] max-h-[150px] z-999"
      />
      
      <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent " />
    </Link>
    </div>
    );
};

export default ProjectsBtn;
