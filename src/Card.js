import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

const Card = ({imageURL, backURL, gitURL, demoURL, name}) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    // const handleMouseEnter = () => {
    //   setIsFlipped(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setIsFlipped(false);
    // };
    
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card-container">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* Front */}
                <div 
                    style={{backgroundImage: `url(${imageURL})`}} 
                    className='container rounded-md flex justify-center items-center mx-auto content-div2 hover:cursor-pointer' 
                    onClick={handleClick}>
                </div>
                
                {/* Back */}
                <div style={{backgroundImage: `url(${backURL})`}} className='container rounded-md flex flex-col justify-center items-center mx-auto content-div2 hover:cursor-pointer' onClick={handleClick}>
                    <div className='text-2xl font-bold tracking-wider'>
                            {name}
                    </div>
                    <div className='pt-8 text-center'>
                        <a href={demoURL}  className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                            Demo
                        </a>
                        <a href={gitURL} target='_blank' className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                            GitHub
                        </a>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
  };
  
  export default Card;
