import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Cardslider.scss";

function Cardslider() {
  return (
    <div className="cardslider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card-content">
              <img className="card-img" src={card.imageUrl} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p></p>
    </div>
  );
}

export default Cardslider;

const cards = [
  {
    id: 1,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
  {
    id: 7,
    imageUrl: "https://placehold.co/400",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod vitae, totam quis, rerum quidem error libero dolores accusantium suscipit obcaecati.",
  },
];
