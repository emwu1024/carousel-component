import React from 'react';
import Carousel, {CarouselItem} from "./Carousel";

const App = () => {
  return (
    <div>
      <h1>Carousel Example</h1>
      <div className="App">
        <Carousel>
          <CarouselItem itemNumber="first"> 
          </CarouselItem>
          <CarouselItem itemNumber="second"></CarouselItem>
          <CarouselItem itemNumber="third"></CarouselItem>
          <CarouselItem itemNumber="fourth"></CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
