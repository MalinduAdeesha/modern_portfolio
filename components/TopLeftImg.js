import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className='absolute loft-0 top-0  mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'> 
    <Image src='/top-left-img3.jpg' width={250}height={250}alt=""/>
    </div>
  );
};

export default TopLeftImg;
