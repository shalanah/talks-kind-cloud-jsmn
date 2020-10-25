import { gsap, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);

const heartColors = [
  "#fc3ad8",
  "#c53df7",
  "#f7e522",
  "#fc4c46",
  "#10f204",
  "#f21d2b",
  "#11e0dc",
  "#31a9f9",
];

export const pickRandom = (list) => {
  const len = list.length;
  return list[Math.floor(Math.random() * len)];
};

export const floatHeart = (target, isCloud = false) => {
  const {
    left: targetLeft,
    width: targetWidth,
    top: targetTop,
    height: targetHeight,
  } = target.getBoundingClientRect();
  const sign = Math.round(Math.random()) ? -1 : 1;

  let heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  const height = Math.min(window.innerWidth, window.innerHeight) * 0.08; // TODO: get height of heart from style globals

  const float = gsap.timeline({
    onComplete: function () {
      heart.remove();
      heart = null;
    },
  });
  const left = isCloud
    ? Math.random() * targetWidth * 0.4 + targetWidth * 0.1 + targetLeft
    : Math.random() * targetWidth * 0.5 + targetWidth * 0.1 + targetLeft;
  const top = Math.random() * targetHeight * 0.1 * sign + targetTop;
  const cubicPoints = 2;
  const heartUp = (top + height) / cubicPoints;
  const horizDelta = targetWidth * 0.05 * Math.random() + targetWidth * 0.03;
  const cubicPath = [];
  [...Array(cubicPoints)].forEach((v, i) => {
    const dir = (i % 2 ? -1 : 1) * sign;
    let point1 = { x: 0, y: -i * heartUp };
    let point2 = { x: 0, y: -(i + 1) * heartUp };
    if (i === 0) cubicPath.push(point1);
    cubicPath.push({
      x: dir * horizDelta,
      y: point1.y + (point2.y - point1.y) / 3,
    }); // tangent 1
    cubicPath.push({
      x: dir * horizDelta,
      y: point2.y - (point2.y - point1.y) / 3,
    }); // tangent 2
    cubicPath.push(point2);
  });
  float
    .set(
      heart,
      {
        visibility: "visible",
        scale: 0.4,
        left,
        top,
        color: pickRandom(heartColors),
      },
      0
    )
    .to(heart, {
      duration: top / 120,
      ease: "none",
      motionPath: {
        type: "cubic",
        curviness: 0,
        // resolution: 20,
        path: cubicPath,
      },
      scale: 0.6,
      color: pickRandom(heartColors),
    });
};
