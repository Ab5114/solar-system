document.addEventListener("DOMContentLoaded", function () {
   const originalDurations = {
    earth: 30,
    moon: 2.7,
    mars: 36.5,
  };

   const speedSelectors = document.querySelectorAll(".speed-select");

  speedSelectors.forEach(function (select) {
    select.addEventListener("change", function () {
       const targetClass = this.dataset.target;
       const multiplier = parseFloat(this.value);
       const newDuration = originalDurations[targetClass] / multiplier;
       const targetElem = document.querySelector("." + targetClass);

      if (targetElem) {
         targetElem.style.animation = "none";
         void targetElem.offsetWidth;
         
        targetElem.style.animation = `orbit ${newDuration}s linear infinite`;
      }
    });
  });
});
