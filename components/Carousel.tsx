import React from 'react';
import clsx from 'clsx';

import { Carousel } from 'react-responsive-carousel';


const UbiScoreCarousel = ()=>{
    const renderCustomIndicator = (onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, 
    isSelected: boolean, index: number, label: string):React.ReactNode =>{
      
            return (
              <span
                className={clsx("w-[2px] h-[2px]  opacity-5 px-3 pointer text-xs mr-3 bg-white rounded",
                {' opacity-95  w-[4px] px-6':isSelected})}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></span>
            );
    }

    
    return (
        <div className="carousel-wrapper w-full eclipse-image bg-transparent bg-no-repeat">
        <Carousel showArrows={false} showStatus={false} autoPlay infiniteLoop showThumbs={false}
        renderIndicator={renderCustomIndicator}>
            
            <div className="flex flex-col space-y-3 text-left">
                <h2 className="text-white font-bold text-xl ">Jerrome Bell</h2>
                <span className="text-base font-medium text-white opacity-50">Product Desginer</span>
                    
                    <p className="pt-4 font-light text-white text-base pb-16">“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit.  
                </p>
            
            </div>
            <div className="flex flex-col space-y-3 text-left">
                <h2 className="text-white font-bold text-xl">Timothy Alaba</h2>
                <span className="text-base font-semibold text-white opacity-50">Product Manager</span>
                    
                    <p className="pt-4 font-light text-white text-base pb-16">
                        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit.  
                
                </p>
            
            </div>

            <div className="flex flex-col space-y-3 text-left">
                <h2 className="text-white font-bold text-xl">Chuchil Water</h2>
                <span className="text-base font-semibold text-white opacity-50">Product Desginer</span>
                    
                    <p className="pt-4 font-light text-white text-base pb-16">
                        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit.  
                
                </p>
            
            </div>
           
        </Carousel>
        </div>
    );
    }

export default UbiScoreCarousel;