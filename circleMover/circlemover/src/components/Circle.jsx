import React, { forwardRef } from 'react';

const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-20 h-20 bg-violet-500 rounded-full absolute"
      style={{left:0, top:0}}>
      </div>
  );
});

export default Circle;
