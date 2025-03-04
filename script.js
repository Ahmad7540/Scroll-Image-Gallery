let scrollContainer = document.querySelector(".gallery");
      let backBtn = document.querySelector("#backBtn");
      let nextBtn = document.querySelector("#nextBtn");

      scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollContainer.style.scrollBehavior = "auto";
        console.log(e.deltaY);
        
        scrollContainer.scrollLeft += e.deltaY;
      });

      backBtn.addEventListener("click", (e) => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft = -900;
      });
      nextBtn.addEventListener("click", (e) => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft = 900;
      });