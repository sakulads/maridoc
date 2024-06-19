import React from "react";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <>
      <div className={styles.image_wrapper}>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom1.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom2.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom3.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom4.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom5.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom6.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom7.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom8.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
        <div className={styles.media}>
          <div className={styles.overlay}></div>
          <img className="image" src="/diplom9.jpg" alt="" />
          <div className={styles.image_details}></div>
        </div>
      </div>
    </>
  );
}
