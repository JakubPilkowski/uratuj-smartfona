import React, { FC, useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import styles from "./Accessory.module.css";

export type AccessoryProps = {
  image: string | StaticImageData;
  imageAlt: string;
  icon: string;
  name: string;
  price: string;
  className: string;
};

const Accessory: FC<AccessoryProps> = ({
  image,
  imageAlt,
  icon,
  name,
  price,
  className,
}) => {
  return (
    <div className={clsx(styles.accessory, className)}>
      <div className={styles.accessoryImageWrapperOuter}>
        <div className={styles.accessoryImageWrapperInner}>
          <Image src={image} alt={imageAlt} className={styles.accessoryImage} />
        </div>
      </div>
      <div className={styles.accessoryFooter}>
        <div className={styles.accessoryIconWrapper}>
          <span className={clsx("material-icons", styles.accessoryIcon)}>
            {icon}
          </span>
        </div>
        <div className={styles.accessoryTextWrapper}>
          <h2 className={clsx("p", styles.accessoryTextName)}>{name}</h2>
          <h2 className={clsx("p", styles.accessoryTextPrice)}>{price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
