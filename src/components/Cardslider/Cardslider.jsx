import { Navigation, Pagination } from "swiper/modules"; // Módulos de navegación y paginación de Swiper
import { Swiper, SwiperSlide } from "swiper/react"; // Componentes Swiper y SwiperSlide
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation"; // Estilos para la navegación de Swiper
import "./Cardslider.scss"; // Estilos personalizados

function Cardslider() {
  return (
    <div className="cardslider">
      {" "}
      {/* Contenedor principal del slider */}
      <Swiper
        modules={[Navigation, Pagination]} // Activa los módulos de navegación y paginación
        spaceBetween={50} // Espacio entre los slides
        slidesPerView={4} // Número de slides visibles por defecto
        navigation // Habilita los controles de navegación
        pagination={{ clickable: true }} // Paginación clickeable
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 90 }, // Configuración para pantallas pequeñas
          768: { slidesPerView: 2, spaceBetween: 90 }, // Configuración para tablets
          1024: { slidesPerView: 3, spaceBetween: 90 }, // Configuración para pantallas grandes
        }}
      >
        {/* Mapea el array 'cards' para crear un SwiperSlide para cada objeto */}
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            {" "}
            {/* Cada slide tiene una key única */}
            <div className="card-content">
              {" "}
              {/* Contenido de la card */}
              <img
                className="card-img"
                src={card.imageUrl}
                alt={card.title}
              />{" "}
              {/* Imagen de la card */}
              <h3>{card.title}</h3> {/* Título de la card */}
              <p>{card.description}</p> {/* Descripción de la card */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cardslider; // Exporta el componente

// Array de objetos 'cards' que contiene los datos de cada card
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
