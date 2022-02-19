import React from 'react';
import './intro.scss';
import { ReactComponent as Mouse } from '../../assets/mouse.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';


const Intro = ({ title, subtitle, date, social, height }) => {
  const heightStyle = height ? { height: `${height}px` } : undefined;
  const separatorClasses = "h-px bg-white block flex-1 opacity-25";
  return (
    <div
      className="intro step absolute h-screen w-full bg-cover bg-no-repeat"
      style={heightStyle}
    >
      <div
        className="absolute h-screen w-full flex flex-col justify-center items-center"
        style={heightStyle}
      >
        <div className="container max-w-xl text-white text-center mb-10">
          <h1 className="title font-serif mb-10">
            {(title)}
          </h1>
          <h2 className="text-lg font-regular">{(subtitle)}</h2>
        </div>
        <div className="container max-w-xl text-white">
          {date && (
            <div className="text-xs font-bold text-white flex items-center mb-6">
              <span className={separatorClasses} />
              <span className="font-bold uppercase px-1">
                {`${('Published')} ${(date)}`}
              </span>
              <span className={separatorClasses} />
            </div>
          )}
        </div>
        <div className="container max-w-sm text-gray-100 text-center flex flex-col justify-center items-center">
          <div className="mb-5 flex flex-col items-center">
            <Mouse className="opacity-75 fill-current w-5 mb-1" />
            <Arrow className="arrow-animate opacity-75 fill-current w-3 mb-1/2" />
            <Arrow className="arrow-animate opacity-75 fill-current w-3" />
          </div>
          {('scroll down to discover')}
        </div>
      </div>
    </div>
  );
}

export default Intro;