import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ClipLoader } from "react-spinners";
import placeholderCat from "../assets/imgs/placeholder--cat.png";
import placeholderDog from "../assets/imgs/placeholder--dog.png";

import 'swiper/css';

interface PetGalleryProps {
  imagesUrl: { secure_url: string }[];
  name: string;
  type: "cat" | "dog";
}

const PetGallery: React.FC<PetGalleryProps> = ({ imagesUrl, name, type }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mainPhoto, setMainPhoto] = useState<string>(imagesUrl[0]?.secure_url || "");
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="pet-card__gallery">
      <div className="pet-card__main-photo-container" style={{ position: 'relative' }}>
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <ClipLoader loading={isLoading} size={40} color="gray" />
          </div>
        )}

        <img
          className="pet-card__main-photo"
          src={imgError ? (type === "cat" ? placeholderCat : placeholderDog) : mainPhoto}
          alt={name}
          onError={() => setImgError(true)}
          onLoad={handleImageLoad}
        />
      </div>

      <Swiper
        tag="ul"
        className="pet-card__slider"
        slidesPerView={3}
        centeredSlides={false}
        slideToClickedSlide={true}
        spaceBetween={15}
        speed={500}
        direction="vertical"
        watchOverflow={true}
        watchSlidesProgress={true}
        onSlideChange={(swiper) => {
          const { activeIndex } = swiper;
          setActivePhotoIndex(activeIndex);

          if (activeIndex >= 1) {
            swiper.params.centeredSlides = true;
          } else {
            swiper.params.centeredSlides = false;
          }
          swiper.update();
        }}
        onSlideChangeTransitionStart={(swiper) => {
          setMainPhoto(imagesUrl[swiper.activeIndex]?.secure_url);
        }}
      >
        {imagesUrl.map((image, index) => (
          <SwiperSlide
            tag="li"
            className={`pet-card__slider-item ${activePhotoIndex === index ? 'pet-card__slider-item--active' : ''}`}
            key={index}
          >
            <img
              src={image.secure_url}
              alt={`${name} ${index + 1}`}
              onClick={() => {
                if (index >= imagesUrl.length - 3) {
                  setMainPhoto(image.secure_url);
                  setActivePhotoIndex(index);
                }
              }}
              onError={(e) => {
                e.currentTarget.src = type === "cat" ? placeholderCat : placeholderDog;
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetGallery;
