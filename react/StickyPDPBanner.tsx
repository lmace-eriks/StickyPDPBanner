import React, { ReactChildren, useEffect, useState } from "react";
// import { canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

interface StickyPDPBannerProps {

}

const StickyPDPBanner: StorefrontFunctionComponent<StickyPDPBannerProps> = ({ }) => {

  useEffect(() => {

  })

  return (
    <div>
      Sticky Banner
    </div>
  )

}

StickyPDPBanner.schema = {
  title: "Time Banner",
  description: "",
  type: "object",
  properties: {

  }
}

export default StickyPDPBanner;

// return (
//   <div className={styles.container}>
//     <div className={styles.wrapper}>
//       <div className={styles.leftContainer}>
//         <img src={leftImg} className={styles.leftImage} />
//       </div>
//       <div className={styles.rightContainer}>
//         <img src={rightImg} className={styles.rightImage} />
//       </div>
//     </div>
//   </div>
// )