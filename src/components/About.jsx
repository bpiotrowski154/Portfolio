import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0F0F0F]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, I'm Brandon, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>;laks djf;lakjd;flakjds;lfk ajd;lfkajsdl;kfja s;dl kfja;sdlkfja;sdlkjfal;dksjfa;lsdkfja;lks djf;alsdkhfalksdjhflkajh</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About