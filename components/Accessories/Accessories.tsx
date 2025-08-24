import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./Accessories.module.css";
import Accessory from "./Accessory";
import accessoryItems from "./accessoryItems";

const Accessories: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1.5, playOnInit: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      autoScroll?.play();
    }
  }, [emblaApi]);

  return (
    <section id="accessories" className={styles.accessories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Akcesoria</h2>
          <p className={styles.subtitle}>
            Profesjonalne akcesoria do Twojego smartfona
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {accessoryItems.map(({ id, ...props }) => (
                <Accessory key={id} {...props} className={styles.emblaSlide} />
              ))}
            </div>
          </div>
          <div className={styles.emblaShadowRight} />
          <div className={styles.emblaShadowLeft} />
        </div>
      </div>
    </section>
  );
};

export default Accessories;
