import { variants } from "components/Accessory/variants";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";

export default function ServiceCard({
  title,
  image,
  imageAlt,
  list,
  price,
  index,
}: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className={styles.ServiceCard}
    >
      <div className={styles.ServiceCardImageOuter}>
        <div className={styles.ServiceCardImageInner}>
          <Image
            src={image}
            width={300}
            height={280}
            alt={imageAlt}
            className={styles.ServiceCardImage}
          />
        </div>
        <div className={styles.ServiceCardImageIcon}>
          <Icon icon="mdi:auto-fix" />
        </div>
        <h2 className={clsx("h5", styles.ServiceCardTitle)}>{title}</h2>
      </div>
      <h2 className={clsx("h5", styles.ServiceCardPrice)}>{price}</h2>
      <div className={styles.ServiceCardDescription}>
        <ul>
          {list.map((item) => (
            <li key={item}>
              <h3 className="p">{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

type Props = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  list: string[];
  price: string;
  index: number;
};
