import React from 'react';
import './intro.scss';
import { ReactComponent as Mouse } from '../../assets/mouse.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';


const Intro = ({ title, subtitle, height }) => {
  const heightStyle = height ? { height: `${height}px` } : undefined;
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden intro bg-cover bg-no-repeat">
      <div className="relative z-30 p-5 text-2xl text-black bg-purple-300 bg-opacity-50 rounded-xl">
    <center>{title}</center><br/> {subtitle}
  </div>

    </div>
  );
}

export default Intro;