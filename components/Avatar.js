import Image from "next/image";
import myImg from '../public/myAv.png'

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image
    src={myImg} 
    width={500}
    height={500} alt="" 
    className="w-full h-full translate-z-0"
    />
  </div>;
};

export default Avatar;
 