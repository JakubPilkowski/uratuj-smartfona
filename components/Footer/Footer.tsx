import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={`section section-black ${styles.footer}`}>
      <div className="container">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.contactInfo}
          >
            <h2 className={styles.title}>Kontakt</h2>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Uratuj Smartfona</h3>
                <a
                  href="mailto:centrumtelefoniiolsztyn@gmail.com"
                  className={styles.contactLink}
                >
                  centrumtelefoniiolsztyn@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Telefon</h3>
                <a href="tel:604-436-345" className={styles.contactLink}>
                  604-436-345
                </a>
              </div>

              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Adres</h3>
                <p className={styles.contactText}>
                  Dom handlowy Manhattan
                  <br />
                  Plac Pułaskiego 7{" "}
                  <strong style={{ fontSize: "1.8rem" }}>lokal 62</strong> obok
                  stoiska z gazetami
                  <br />
                  Olsztyn
                </p>
              </div>

              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Godziny otwarcia</h3>
                <p className={styles.contactText}>
                  Poniedziałek-Piątek: 10:00-18:00
                  <br />
                  Sobota: 10:00-15:00
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <h3 className={styles.mapTitle}>Lokalizacja</h3>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5073313268567!2d20.488660815991853!3d53.78045744980634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27932a8723f9f%3A0x1f8d7a896ca9d506!2sCentrum%20Telefonii%20s.c.%20%C5%9Awi%C4%99cicki%20G.%2C%20Gromek-%20Pi%C5%82kowska%20H.E.!5e0!3m2!1spl!2spl!4v1600695864194!5m2!1spl!2spl"
                title="Mapa Google z lokalizacją serwisu na Placu Pułaskiego 7 lokal 62"
                allowFullScreen
                loading="lazy"
                className={styles.iframe}
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.bottom}
        >
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Uratuj Smartfona. Wszystkie prawa
            zastrzeżone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
