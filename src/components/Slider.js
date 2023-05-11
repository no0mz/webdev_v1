import React from 'react';
import './Slider.css';
import { useInView } from "react-intersection-observer";


const Slider = ({imageSrc, title, subtitle, flipped}) => {

  const { ref, inView } = useInView({
    /*Optional options*/
    threshold: 0.4,
  });

const renderContent = () => {
  if (!flipped) {
    return (
    <>
    <img src={imageSrc} alt='Sub-Gallery' className='slide__image' />
    <div className='slide__content'>
      <h1 className='slide__title'>{title}</h1>
      <p>{subtitle}</p>
    </div>
    </>
  );
} else {
  return (
    <>
    <div className='slide__content'>
      <h1 className='slide__title'>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <img src={imageSrc} alt='Sub-Gallery' className='slide__image' />
    </>
  );
}
};
  return <div className={inView ? "slide slide--zoom" : "slide"} ref={ref}>
    {renderContent()}</div>
};

export default Slider;
