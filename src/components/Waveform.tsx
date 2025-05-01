
import React from 'react';

type WaveformProps = {
  active?: boolean;
  bars?: number;
};

const Waveform = ({ active = false, bars = 30 }: WaveformProps) => {
  return (
    <div className="flex items-center h-12">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={`waveform-bar ${active ? 'bg-melody-purple' : 'bg-gray-500'}`}
          style={{ '--index': i } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};

export default Waveform;
