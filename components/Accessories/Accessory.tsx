import React from "react";
import Image from "next/image";
import styles from "./Accessory.module.css";

interface AccessoryProps {
  title: string;
  price: string;
  image: string;
  imageAlt: string;
  className?: string;
}

const Accessory: React.FC<AccessoryProps> = ({
  title,
  price,
  image,
  imageAlt,
  className,
}) => {
  return (
    <div className={`${styles.accessory} ${className || ""}`}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 200px, 250px"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default Accessory;
