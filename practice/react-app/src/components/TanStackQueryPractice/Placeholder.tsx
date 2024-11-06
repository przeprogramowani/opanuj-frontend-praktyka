import React from 'react';

function Placeholder({ lines, height }: { lines: number; height: number }) {
  return (
    <>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={` animate-pulse bg-slate-950 mb-10`}
          style={{ height: `${height}px` }}
        />
      ))}
    </>
  );
}

export default Placeholder;
