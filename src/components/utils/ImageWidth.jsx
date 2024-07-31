import { useState, useEffect } from 'react';

const ImageWidth = ({ image, alt, className }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageWidth = () => {
    if (windowWidth < 576) return image.mobile;
    if (windowWidth >= 576 && windowWidth < 768) return image.tablet;
    if (windowWidth >= 768 && windowWidth < 992) return image.desktop;
    return image.desktop;
  };

  return <img className={className} src={getImageWidth()} alt={alt} />;
};

export default ImageWidth;
