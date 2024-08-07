import React from 'react';

const Placeholder = ({ lines, height }: { lines: number; height: number }) => (
  <>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`animate-pulse h-${height} bg-gray-300 rounded-lg mb-2`}
      />
    ))}
  </>
);

export default Placeholder;
