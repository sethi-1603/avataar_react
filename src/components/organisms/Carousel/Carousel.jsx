import React from "react";
import cx from "classnames";

import If from "../../atoms/If/If";
import Slides from "./partials/CarouselCtr/Slides";

import usecarouselConcept from "../../../hooks/useCarouselConcept";

import withInfiniteCarousel from "../../../hoc/withInfiniteCarousel";


import styles from "./Carousel.module.scss";

const Carousel = ({ customClass, title, subTitle, slidesData }) => {
  const { isInfinite, setIsInfinite } = usecarouselConcept();

  const InfiniteCarousel = withInfiniteCarousel(Slides);

  return (
    <div className={cx(styles.carousel, customClass)}>
      <If test={title}>
        <p className={styles.carousel__title}>{title}</p>
      </If>
      <If test={subTitle}>
        <p className={styles.carousel__subTitle}>{subTitle}</p>
      </If>

      <If test={isInfinite}>
        <InfiniteCarousel showButtons={true} slidesData={slidesData} />
      </If>

    </div>
  );
};

export default Carousel;
