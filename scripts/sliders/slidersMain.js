import { Rasslider } from "./Rasslider.js";

const sliderMainBanner = new Rasslider ({
  sliderJumps         : 1,
  prevBtnId           : "#sliderMainBanner_prevButton",
  wrapperId           : "#sliderMainBanner_wrapper",
  nextBtnId           : "#sliderMainBanner_nextButton",
  paginatorCtnId      : "#sliderMainBanner_paginator",
  slideClass          : ".section__mainBanner__slider__wrapper__slide",
  paginatorsClassName : "section__mainBanner__slider__paginator__circle"
});

sliderMainBanner.createPaginator();
sliderMainBanner.previousSlide();
sliderMainBanner.nextSlide();
sliderMainBanner.paginationJumper();

const sliderPromo = new Rasslider ({
  sliderJumps         : 1,
  prevBtnId           : "#sliderPromo_prevButton",
  wrapperId           : "#sliderPromo_wrapper",
  nextBtnId           : "#sliderPromo_nextButton",
  paginatorCtnId      : "#sliderPromo_paginator",
  slideClass          : ".section__showcasePromo__slider__wrapper__product",
  paginatorsClassName : "section__showcasePromo__slider__paginator__circle"
});

sliderPromo.createPaginator();
sliderPromo.previousSlide();
sliderPromo.nextSlide();
sliderPromo.paginationJumper();

const sliderCategories = new Rasslider ({
  sliderJumps         : 1,
  prevBtnId           : "#sliderCategories_prevButton",
  wrapperId           : "#sliderCategories_wrapper",
  nextBtnId           : "#sliderCategories_nextButton",
  paginatorCtnId      : "#sliderCategories_paginator",
  slideClass          : ".section__showcaseCategories__slider__wrapper__product",
  paginatorsClassName : "section__showcaseCategories__slider__paginator__circle"
});

sliderCategories.createPaginator();
sliderCategories.previousSlide();
sliderCategories.nextSlide();
sliderCategories.paginationJumper();

const sliderHighlights = new Rasslider ({
  sliderJumps         : 1,
  prevBtnId           : "#sliderHighlights_prevButton",
  wrapperId           : "#sliderHighlights_wrapper",
  nextBtnId           : "#sliderHighlights_nextButton",
  paginatorCtnId      : "#sliderHighlights_paginator",
  slideClass          : ".section__showcaseHighlights__slider__wrapper__product",
  paginatorsClassName : "section__showcaseHighlights__slider__paginator__circle"
});

sliderHighlights.createPaginator();
sliderHighlights.previousSlide();
sliderHighlights.nextSlide();
sliderHighlights.paginationJumper();

const sliderNewReleases = new Rasslider ({
  sliderJumps         : 1,
  prevBtnId           : "#sliderNewReleases_prevButton",
  wrapperId           : "#sliderNewReleases_wrapper",
  nextBtnId           : "#sliderNewReleases_nextButton",
  paginatorCtnId      : "#sliderNewReleases_paginator",
  slideClass          : ".section__showcaseNewReleases__slider__wrapper__product",
  paginatorsClassName : "section__showcaseNewReleases__slider__paginator__circle"
});

sliderNewReleases.createPaginator();
sliderNewReleases.previousSlide();
sliderNewReleases.nextSlide();
sliderNewReleases.paginationJumper();
