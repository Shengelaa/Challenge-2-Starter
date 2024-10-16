import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id='home' className='flex flex-col md:flex-row  py-6 sm:py-16 '>
      <div className='flex flex-col justify-center item-start flex-1'>
        <div className='flex flex-row items-center py-[6px] bg-custom-gradient rounded-[10px] mb-3 max-w-[340px] '>
          <img src={discount} className='w-[27px] h-[27px] ml-[5px]' />
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-[13px]'>
            <span className='text-white'>20%</span> Discount For
            <span className='text-white'> 1 Month</span> Account
          </p>
        </div>
        <div className='flex flex-row items-center justify-between w-full'>
          <h2 className='flex flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] flex-col text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='hidden sm:block' />
            <span className='text-gradient'>Generation</span>
          </h2>
          <div className='hidden mr-0 ss:flex md:mr-4 '>
            <GetStarted />
          </div>
        </div>
        <h4 className='flex font-semibold ss:text-[72px] text-[52px] text-white font-poppins ss:leading-[100px] leading-[75px]'>
          Payment Method.
        </h4>
        <p className='font-poppins  text-dimwhite text-[18px] max-w-[470px] mt-5 leading-[30px] text-white opacity-[50%]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum
          molestias tempore enim quos? Magnam commodi soluta impedit iusto atque
          tempore debitis eum nesciunt ipsum molestiae. Rem sit laborum iusto!
        </p>
      </div>
      <div className=' relative flex items-center justify-center flex-1'>
        <img src={robot} alt='' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-[0] pink__gradient' />
        <div className='absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-2o blue__gradient' />
      </div>
    </section>
  );
};

export default Hero;
