import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../api/modules/media.api";
import AutoSwiper from "./AutoSwiper";
import { toast } from "react-toastify";
import Book from "./Book";

const MediaSlide = ({ books }) => {
  // const [books, setBooks] = useState([]);

  useEffect(() => {
    
  }, []);
  return (
    <AutoSwiper>
      {books?.map((book, index) => (
        <SwiperSlide key={index} style={{ width:"max-content"}}>
          {/* <MediaItem media={media} mediaType={mediaType} /> */}
          <Book book={book} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default MediaSlide;