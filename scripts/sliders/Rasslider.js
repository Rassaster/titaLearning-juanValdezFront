export class Rasslider {
  constructor (
    { sliderJumps = 1, prevBtnId, nextBtnId, wrapperId, paginatorCtnId,
      slideClass, paginatorsClassName }) {
      this.cIndex = 1;
      this.nIndex = 1;
      this.sliderJumps = sliderJumps;
      this.prevButton = document.querySelector(`${prevBtnId}`);
      this.nextButton = document.querySelector(`${nextBtnId}`);
      this.sliderWrapper = document.querySelector(`${wrapperId}`);
      this.paginator = document.querySelector(`${paginatorCtnId}`);
      this.arrElements = document.querySelectorAll(`${slideClass}`);
      this.elementWidth = document.querySelectorAll(`${slideClass}`)[0].clientWidth;
      this.classPaginatorCircles = paginatorsClassName;
    }
  createPaginator () {
    for (let i = 0; i < this.arrElements.length; i++) {
      let paginatorCircle = document.createElement("div");
      paginatorCircle.classList = `Rasslider__paginator__circle ${this.classPaginatorCircles}`
      paginatorCircle.setAttribute("index-id", i+1);
      this.paginator.appendChild(paginatorCircle);
    }
    document.querySelectorAll(`.${this.classPaginatorCircles}`)[0].classList.add(this.classPaginatorCircles + "__active")
  };
  paginatorLocation () {
    document.querySelectorAll(`.${this.classPaginatorCircles}`)[this.nIndex - 1].classList.add(this.classPaginatorCircles + "__active");
    document.querySelectorAll(`.${this.classPaginatorCircles}`)[this.cIndex - 1].classList.remove(this.classPaginatorCircles + "__active");
    this.nIndex-1 === this.cIndex-1 ? document.querySelectorAll(`.${this.classPaginatorCircles}`)[this.nIndex - 1].classList.add(this.classPaginatorCircles + "__active") : null; 
  }
  previousSlide () {
    this.prevButton.addEventListener("click", () => {
      this.sliderWrapper.scrollLeft -= (this.elementWidth * this.sliderJumps);
      this.cIndex = this.nIndex;
      this.nIndex = this.cIndex - this.sliderJumps;
      this.nIndex <= 0 ? this.nIndex = 1 : null;
      this.paginatorLocation();
    });
  }
  nextSlide () {
    this.nextButton.addEventListener("click", () => {
      this.sliderWrapper.scrollLeft += (this.elementWidth * this.sliderJumps);
      this.cIndex = this.nIndex;
      this.nIndex = this.cIndex + this.sliderJumps;
      this.nIndex >= this.arrElements.length ? this.nIndex = this.arrElements.length : null;
      this.cIndex >= this.arrElements.length ? this.nIndex = this.arrElements.length : null; 
      this.paginatorLocation();
    });
  }
  paginationJumper () {
    this.paginator.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList[0] === "Rasslider__paginator__circle") {
        this.cIndex = this.nIndex;
        this.nIndex = Number(target.getAttribute("index-id"));
        if (this.nIndex > this.cIndex) {
          this.sliderWrapper.scrollLeft += ((this.elementWidth * this.nIndex) - (this.elementWidth * this.cIndex));
        } else if (this.nIndex < this.cIndex) {
          this.sliderWrapper.scrollLeft -= ((this.elementWidth * this.cIndex) - (this.elementWidth * this.nIndex));
        }  
        this.paginatorLocation();
      }
    });
  }
}