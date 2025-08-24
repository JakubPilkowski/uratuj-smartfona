import React, { FC, useCallback } from "react";
import { motion } from "framer-motion";

import styles from "./Map.module.css";
import clsx from "clsx";
import { variants } from "components/Accessory/variants";

const Map: FC = () => {
  return (
    <section id="map" className={styles.map} aria-labelledby="map-title">
      <div className={styles.mapContainer}>
        <h1 id="map-title" className={clsx("title", styles.mapTitle)}>
          Dojazd
        </h1>

        <div className={styles.maps}>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={0}
            className={styles.mapWrapper}
          >
            <header className={styles.mapIframeHeader}>
              <h2 className={clsx("h5", styles.mapIframeTitle)}>
                Plac Pułaskiego 7 lokal 62
              </h2>
            </header>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5073313268567!2d20.488660815991853!3d53.78045744980634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27932a8723f9f%3A0x1f8d7a896ca9d506!2sCentrum%20Telefonii%20s.c.%20%C5%9Awi%C4%99cicki%20G.%2C%20Gromek-%20Pi%C5%82kowska%20H.E.!5e0!3m2!1spl!2spl!4v1600695864194!5m2!1spl!2spl"
              title="Mapa google z lokalizacją serwisu na Placu Pułaskiego 7 lokal 62"
              allowFullScreen
              allow=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
