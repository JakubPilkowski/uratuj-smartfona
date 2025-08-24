import React, { forwardRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import phoneFixing from "public/phone_fixing.jpg";
import screenFixing from "public/screen_fixing.jpg";
import slotFixing from "public/slot_fixing.jpg";
import cameraFixing from "public/camera_fixing.jpg";

import styles from "./Service.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = forwardRef<HTMLElement>(function Service(_, ref) {
  return (
    <section
      id="service"
      className={clsx(styles.service)}
      aria-labelledby="service-title"
    >
      <div className={styles.serviceContainer}>
        <h1 id="service-title" className={styles.serviceTitle}>
          Serwis
        </h1>
        <motion.div className={styles.serviceList}>
          <ServiceCard
            title="Wymiana"
            price="50 zł*"
            index={1}
            image={screenFixing}
            imageAlt="Wymiana ekranu"
            list={["ekranów", "modułów", "gniazd", "baterii", "aparatów"]}
          />
          <ServiceCard
            title="Naprawa"
            price="30 zł*"
            index={2}
            image={cameraFixing}
            imageAlt="Skręcanie aparatu"
            list={["głośników", "mikrofonów", "aparatów w telefonie"]}
          />
          <ServiceCard
            title="Inne"
            price="30 zł*"
            index={3}
            image={phoneFixing}
            imageAlt="Instalacja układu"
            list={[
              "wgrywanie nowego oprogramowania",
              "ściąganie simlocków, hasła redmi oraz hasła google",
              "czyszczenie telefonów po zalaniu",
              "drobne usługi (zgrywanie danych, konfiguracja)",
            ]}
          />
        </motion.div>
        <p className={clsx("h6", styles.serviceAdnotation)}>
          * - Cena minimalna
        </p>
      </div>
    </section>
  );
});

export default Service;
