import { useEffect } from "react";
import { gsap } from "gsap/all";
import { floatHeart } from "./heartAnimation";

const useIllustrationHearts = () => {
  useEffect(() => {
    let heartTimer = null;
    let heartTargetClicked = false;
    const pointerDown = function (e) {
      let elem;
      if (e.target.classList.contains("floatTarget")) {
        elem = e.target;
      } else if (e.target.parentNode.classList.contains("floatTarget")) {
        elem = e.target.parentNode;
      }
      if (elem) {
        heartTargetClicked = true;
        floatHeart(elem);
        const shrink = gsap.timeline({});
        shrink
          .set(elem, {
            transformOrigin: "center",
          })
          .to(elem, {
            ease: "back.out(.8)",
            duration: 0.3,
            scale: 0.9,
          });
        const eyes = elem.querySelectorAll(".eye");
        if (eyes.length) {
          const pupils = elem.querySelectorAll(".eye circle");
          const whites = elem.querySelectorAll(".eye ellipse");
          const closeEyes = gsap.timeline({});
          closeEyes
            .set(whites, { transformOrigin: "center" })
            .to(whites, { duration: 0.08, scaleY: 0.3 }, 0)
            .to(pupils, { duration: 0.05, opacity: 0 }, 0);
        }
        if (heartTimer === null)
          heartTimer = setInterval(function () {
            if (!heartTargetClicked) {
              clearInterval(heartTimer);
              heartTimer = null;
            } else floatHeart(elem);
          }, 350);
      }
    };
    const pointerUp = function (e) {
      if (heartTargetClicked) {
        heartTargetClicked = false;
        clearInterval(heartTimer);
        heartTimer = null;
        const grow = gsap.timeline();
        grow
          .set(".floatTarget", {
            transformOrigin: "center",
          })
          .to(".floatTarget", {
            ease: "back.out(.8)",
            duration: 0.3,
            scale: 1,
          });
        const pupils = document.querySelectorAll(".eye circle");
        const whites = document.querySelectorAll(".eye ellipse");
        const openEyes = gsap.timeline();
        openEyes
          .set(whites, { transformOrigin: "center" })
          .to(whites, { duration: 0.1, scaleY: 1 }, 0)
          .to(pupils, { duration: 0.1, opacity: 1 }, 0.05);
      }
    };
    window.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointerup", pointerUp);
    return () => {
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointerup", pointerUp);
    };
  }, []);
};

export default useIllustrationHearts;
