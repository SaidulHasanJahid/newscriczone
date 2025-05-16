 const track = document.getElementById("videoTrack");
    let currentSlide = 0;

    function getSlideWidth() {
      return track.querySelector(".video-slider-item").offsetWidth;
    }

    function slideNextes() {
      const slideWidth = getSlideWidth();
      const totalSlides = track.children.length;
      const visibleSlides = Math.floor(track.offsetWidth / slideWidth);

      if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    }

    function slidePreves() {
      if (currentSlide > 0) {
        currentSlide--;
        const slideWidth = getSlideWidth();
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    }

    window.addEventListener("resize", () => {
      const slideWidth = getSlideWidth();
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    });

    // Autoplay every 3 seconds
    setInterval(() => {
      const slideWidth = getSlideWidth();
      const totalSlides = track.children.length;
      const visibleSlides = Math.floor(track.offsetWidth / slideWidth);

      if (currentSlide < totalSlides - visibleSlides) {
        slideNextes();
      } else {
        currentSlide = 0;
        track.style.transform = `translateX(0px)`;
      }
    }, 3000);