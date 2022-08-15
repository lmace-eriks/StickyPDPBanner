import React, { ReactChildren, useEffect, useState } from "react";
// import { canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

interface SplitHeroProps {

}

const SplitHero: StorefrontFunctionComponent<SplitHeroProps> = ({ }) => {

  const leftImg = "https://shredshop.vtexassets.com/assets/vtex.file-manager-graphql/images/b7bf0076-5046-4fd0-be84-c82a17a2edf4___40264f10063b8c4b1786e3626954eb9b.jpg";
  const rightImg = "https://shredshop.vtexassets.com/assets/vtex.file-manager-graphql/images/2479522d-f547-4a6d-a63d-a5d0eeb86ee5___6da2d866d127bfaff06b9d4e2beb759a.jpg";

  useEffect(() => {

  })

  return (
    <div className={styles.container}>
      <p className={styles.title}>Looking for a discount code?</p>
      <div className={styles.wrapper}>
        <img src={rightImg} className={styles.carpet} />
      </div>
      <div className={styles.peekContainer}>
        <div className={styles.peekWrapper} style={{ backgroundColor: "#bf2228" }}>
          <a href="#" className={styles.peekButton}>Click Here!</a>
        </div>
      </div>
    </div>
  )

}

SplitHero.schema = {
  title: "Time Banner",
  description: "",
  type: "object",
  properties: {

  }
}

export default SplitHero;

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