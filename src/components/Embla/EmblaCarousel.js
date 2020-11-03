import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel-react';
import { DotButton } from './EmblaCarouselButtons';
import './Embla.css';
import CardComponent from '../../hoc/CardComponent/Card';

const EmblaCarouselComponent = ({ children }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla.scrollTo(index), [embla]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on('select', onSelect);
      onSelect();
    }
  }, [embla]);

  return (
    <div className="embla">
      <EmblaCarouselReact className="embla__viewport">
        <div className="embla__container">
          {children.map((Child, index) => (
            <div className="embla__slide" key={index}>
              <CardComponent class="embla__slide__inner" normal>
                {Child}
              </CardComponent>
            </div>
          ))}
        </div>
      </EmblaCarouselReact>
      <div className="embla__dots">
        {scrollSnaps.map((snap, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarouselComponent;
