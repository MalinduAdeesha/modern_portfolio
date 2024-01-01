import{motion}from 'framer-motion'

const transitionVariations ={
  initial:{
    x:'100%',
    width:'100%'
  },
  animate:{
    x:'0%',
    width: '100%'
  },
  exit:{
    x:['0%','100%'],
    width:['0%','100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2d2d30]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
       exit='exit'
       transition={{delay:0.2, duration:0.6,ease:'easeInOut'}}
      >
        1</motion.div>
        <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#414145]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
       exit='exit'
       transition={{delay:0.4, duration:0.6,ease:'easeInOut'}}
      >
        1</motion.div>
        <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#5a5a5c]'
       variants={transitionVariations}
       initial='initial'
       animate='animate'
       exit='exit'
       transition={{delay:0.6, duration:0.6,ease:'easeInOut'}}
      >
        1</motion.div>
     
    </>
  );
};

export default Transition;
