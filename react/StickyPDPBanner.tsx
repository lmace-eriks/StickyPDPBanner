import React, { ReactChildren, useEffect, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

interface StickyPDPBannerProps {

}

const StickyPDPBanner: StorefrontFunctionComponent<StickyPDPBannerProps> = ({ }) => {
  const [productName, setProductName] = useState<string>("");
  const [isStuck, setIsStuck] = useState<Boolean>(false);
  const [hasDescription, setHasDescription] = useState<Boolean>(false);
  const [hasFeatures, setHasFeatures] = useState<Boolean>(false);
  const [hasSpecs, setHasSpecs] = useState<Boolean>(false);
  const [hasExtras, setHasExtras] = useState<Boolean>(false);
  const [hasReviews, setHasReviews] = useState<Boolean>(false);
  const [hasArticles, setHasArticles] = useState<Boolean>(false);

  const classPrefix = "eriksbikeshop-stickypdpbanner-1-x-";
  const containerId = "sticky-pdp-banner-container";

  useEffect(() => {
    if (!canUseDOM) return;

    const productName: Element = document.getElementsByClassName("vtex-store-components-3-x-productBrand")[0];
    const productNameString: string = productName.innerHTML.replace("<!-- -->", "");
    setProductName(productNameString);
  })

  // Create / Destroy Intersection Observer
  useEffect(() => {
    if (!canUseDOM) return;

    const halfwayPoint = window.innerHeight / 2;
    const div: HTMLElement = document.getElementById(containerId)!;
    if (!div) return;

    const observer: IntersectionObserver = new IntersectionObserver(entries => {
      const entry: IntersectionObserverEntry = entries[0];
      setIsStuck(!entry.isIntersecting);
    }, { threshold: 1, rootMargin: `0px 0px ${halfwayPoint}px 0px` });

    observer.observe(div);

    return () => {
      observer.unobserve(div);
    }
  });

  // Change classes when Stuck and Unstuck
  useEffect(() => {
    if (!canUseDOM) return;
    const div: HTMLElement = document.getElementById(containerId)!;
    isStuck ? div.classList.add(classPrefix + "isStuck") : div.classList.remove(classPrefix + "isStuck");

  }, [isStuck]);

  const buildButtons = () => {
    if (!canUseDOM) return;

    const description: Boolean = !!document.getElementById("productOverview");
    const features: Boolean = !!document.getElementsByClassName("eriksbikeshop-product-attribute-0-x-productAttributeWrapper--pdp-features")[0];
    const specs: Boolean = !!document.getElementById("specs-section");
    const extras: Boolean = !!document.getElementById("eriks-extras");
    const articlesElement: Element = document.getElementsByClassName("vtex-wordpress-integration-2-x-relatedPostsBlockContainer")[0];
    const articles: Boolean = articlesElement ? !!articlesElement.innerHTML : false;
    const reviews: Boolean = !!document.getElementById("all-reviews");

    setHasDescription(description);
    setHasFeatures(features);
    setHasSpecs(specs);
    setHasExtras(extras);
    setHasArticles(articles);
    setHasReviews(reviews);
  }

  // Debounce for calling buildButtons
  useEffect(() => {
    if (!canUseDOM) return;

    const handleScroll = () => {
      window.removeEventListener("scroll", handleScroll);
      setTimeout(() => {
        buildButtons();
      }, 1000)
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (canUseDOM) window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleScrollTop = () => {
    if (canUseDOM) window.scrollTo(0, 0);
  }

  return (
    <div id={containerId} className={styles.stickyBannerContainer}>
      <div className={styles.stickyBannerWrapper}>
        {isStuck &&
          <>
            <div className={styles.productName}>{productName}</div>
            <button onClick={handleScrollTop} className={styles.selectProductButton}>Select Product</button>
            {hasDescription && <a href="#productOverview" className={styles.stickyAnchor}>Description</a>}
            {hasFeatures && <a href="#productFeatures" className={styles.stickyAnchor}>Features</a>}
            {hasSpecs && <a href="#specs-section" className={styles.stickyAnchor}>Specifications</a>}
            {hasExtras && <a href="#eriks-extras" className={styles.stickyAnchor}>Erik's Extras</a>}
            {hasArticles && <a href="#articles-section" className={styles.stickyAnchor}>Articles</a>}
            {hasReviews && <a href="#all-reviews" className={styles.stickyAnchor}>Reviews</a>}
          </>
        }
      </div>
    </div>
  )
}

StickyPDPBanner.schema = {
  title: "Sticky PDP Banner",
  description: "",
  type: "object",
  properties: {

  }
}

export default StickyPDPBanner;