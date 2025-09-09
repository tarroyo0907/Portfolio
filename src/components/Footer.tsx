import React from 'react';

interface FooterProps {
  visited: {
    mars: number;
    moon: number;
    earth: number;
  };
  totals: {
    mars: number;
    moon: number;
    earth: number;
  };
}

const Footer: React.FC<FooterProps> = ({ visited, totals }) => {
  return (
    <footer className="w-full bg-black/75 text-white p-4 text-center fixed bottom-0 z-40 py-5 px-8 flex flex-col items-center justify-center">
      <h1 id="footerText">
        Click on a planet to learn more information about a specific subject!
      </h1>
      <div className="mt-2 flex gap-8">
        <span>Mars: {visited.mars}/{totals.mars}</span>
        <span>Moon: {visited.moon}/{totals.moon}</span>
        <span>Earth: {visited.earth}/{totals.earth}</span>
      </div>
    </footer>
  );
};

export default Footer;