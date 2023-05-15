import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
function Banner({ data }) {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay={true}
        useKeyboardArrows
        transitionTime={1000}
      >
        {data &&
          data.slides &&
          data.slides.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt={item.image} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
export default Banner;
