import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  const services = [
    {
      title: "Wymiana",
      price: "50 zł*",
      image: "/screen_fixing.jpg",
      imageAlt: "Wymiana ekranu",
      list: ["ekranów", "modułów", "gniazd", "baterii", "aparatów"],
    },
    {
      title: "Naprawa",
      price: "30 zł*",
      image: "/camera_fixing.jpg",
      imageAlt: "Skręcanie aparatu",
      list: ["głośników", "mikrofonów", "aparatów w telefonie"],
    },
    {
      title: "Inne",
      price: "30 zł*",
      image: "/phone_fixing.jpg",
      imageAlt: "Instalacja układu",
      list: [
        "usługi programistyczne",
        "wgrywanie nowego oprogramowania",
        "ściąganie simlocków, hasła redmi oraz hasła google",
        "czyszczenie telefonów po zalaniu",
        "drobne usługi (zgrywanie danych, konfiguracja)",
      ],
    },
  ];

  return (
    <section
      id="services"
      className={`section section-white ${styles.services}`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Cennik usług</h2>
          <p className={styles.subtitle}>
            Profesjonalne usługi serwisowe w konkurencyjnych cenach
          </p>
        </motion.div>

        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.cardPrice}>{service.price}</div>

                <ul className={styles.serviceList}>
                  {service.list.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.serviceItem}>
                      <span className={styles.bullet}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={styles.additionalInfo}
        >
          <p className={styles.adnotation}>* - Cena minimalna</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
