import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Instagram.module.css";

const Instagram: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const mockPosts = [
    {
      id: 1,
      image: "/phone_fixing.jpg",
      caption: "Naprawa ekranu iPhone - jak nowy! 📱✨",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      image: "/screen_fixing.jpg",
      caption: "Wymiana baterii Samsung - szybko i profesjonalnie 🔋",
      likes: 38,
      comments: 5,
    },
    {
      id: 3,
      image: "/camera_fixing.jpg",
      caption: "Naprawa aparatu - znowu robi świetne zdjęcia 📸",
      likes: 51,
      comments: 12,
    },
    {
      id: 4,
      image: "/slot_fixing.jpg",
      caption: "Wymiana gniazda ładowania - problem rozwiązany ⚡",
      likes: 29,
      comments: 3,
    },
    {
      id: 5,
      image: "/phone_black_d.jpg",
      caption: "Nowe etui w ofercie - zabezpiecz swój telefon 🛡️",
      likes: 45,
      comments: 7,
    },
  ];

  return (
    <section
      id="instagram"
      className={`section section-white ${styles.instagram}`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Nasze realizacje</h2>
          <p className={styles.subtitle}>
            Zobacz przykłady naszych napraw i śledź nas na Instagramie
          </p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {mockPosts.map((post) => (
                <div key={post.id} className={styles.emblaSlide}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.post}
                  >
                    <div className={styles.postImage}>
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 250px, 300px"
                      />
                    </div>
                    <div className={styles.postContent}>
                      <p className={styles.postCaption}>{post.caption}</p>
                      <div className={styles.postStats}>
                        <span className={styles.likes}>❤️ {post.likes}</span>
                        <span className={styles.comments}>
                          💬 {post.comments}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.followUs}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Śledź nas na Instagramie
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
