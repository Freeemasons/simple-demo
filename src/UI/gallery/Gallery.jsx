import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../common/assets/styles/App.css';
import "react-image-gallery/styles/css/image-gallery.css";


const Gallery = ({ data, startIndex }) => {

  return (
    <>
      <ImageGallery
        items={data}
        thumbnailPosition={'left'}
        showIndex={true}
        startIndex={startIndex}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </>
  );
};

export default Gallery

