import React from "react";
import styled, { keyframes, css } from "styled-components";
import useIllustrationHearts from "./useIllustrationHearts";

const beat = keyframes`
  0%, 10% {
    transform: scale(1) translateZ(0);
  }
  90%, 100% {
    transform: scale(1.05) translateZ(0);
  }
`;
const circleBeat = keyframes`
  0%, 10% {
    transform: scale(1) translateZ(0);
  }
  90%, 100% {
    transform: scale(1.2) translateZ(0);
  }
`;
const Beat = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: center;
  animation: ${beat} 4.5s ease-in-out infinite alternate both;
`;
const BreathCircleSvg = styled.svg`
  overflow: visible;
  width: 100%;
  height: 100%;
  position: absolute;
  ${(props) =>
    props.pulse
      ? css`
          fill: var(--breath-circle-halo-bg);
          opacity: var(--breath-circle-halo-opacity);
          animation: ${circleBeat} 4.5s ease-in-out infinite alternate both;
        `
      : "fill: var(--breath-circle-bg);"}
`;
const BreathCircle = ({ pulse = false, style }) => {
  return (
    <BreathCircleSvg pulse={pulse} viewBox="0 0 234.82 234.82" style={style}>
      <circle cx="117.91" cy="117.58" r="114.91" />
    </BreathCircleSvg>
  );
};

const Cloud = () => {
  useIllustrationHearts();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        pointerEvents: "none", // Used to isolate our heart animation
      }}
    >
      <BreathCircle pulse />
      <BreathCircle />
      <Beat>
        <svg
          style={{
            overflow: "visible",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          viewBox="0 0 234.82 234.82"
        >
          <path
            d="M179.59,47.36a21,21,0,0,1-2.87.21A19.11,19.11,0,0,1,172,9.88a28.41,28.41,0,0,1,54.5,5.1h.38a16.3,16.3,0,1,1,0,32.59H179.59Z"
            style={{
              fill: "var(--step-1-cloud-extra-fill)",
              stroke: "var(--step-1-cloud-extra-stroke)",
              strokeLinejoin: "round",
              strokeWidth: 5,
              fillRule: "evenodd",
            }}
          />
          {/* Bottom Cloud */}
          <path
            d="M-.39,238.14H71.69a12.12,12.12,0,0,0,2-24.07,8.52,8.52,0,0,0,.36-2.44,8.15,8.15,0,0,0-8.08-8.23,8,8,0,0,0-2.56.42,24.05,24.05,0,0,0-40.91-4.1,17.1,17.1,0,0,0-23.76,15.8,17.34,17.34,0,0,0,.55,4.35A9.18,9.18,0,0,0-9.63,229,9.19,9.19,0,0,0-.39,238.14Z"
            style={{
              fill: "var(--step-1-cloud-extra-fill)",
              stroke: "var(--step-1-cloud-extra-stroke)",
              strokeLinejoin: "round",
              strokeWidth: 5,
              fillRule: "evenodd",
            }}
          />
          {/* Happy cloud */}
          <g className="floatTarget">
            <path
              d="M227,118a43.06,43.06,0,0,0,1.13-9.82,42.35,42.35,0,0,0-42.2-42.4,41.74,41.74,0,0,0-22.74,6.67A70,70,0,0,0,103,38.12c-38.62,0-70,31.57-70,70.37a71.58,71.58,0,0,0,1.16,12.85A31,31,0,0,0,50,178.85H219.18A31,31,0,0,0,227,118Z"
              style={{
                fill: "var(--illustration-bg)",
                stroke: "var(--illustration-stroke)",
                strokeLinejoin: "round",
                strokeWidth: 6,
              }}
            />
            <path
              d="M109.6,146.73a13.8,13.8,0,0,1-2.92-.31,14,14,0,0,1-9.6-7.41,2,2,0,1,1,3.56-1.8,10,10,0,0,0,15.8,2.84,2,2,0,1,1,2.71,2.93A14,14,0,0,1,109.6,146.73Z"
              style={{ fill: "var(--illustration-facial-feature)" }}
            />
            {/* Left eye */}
            <g className="eye">
              <ellipse
                cx="76.34"
                cy="116.04"
                rx="8.38"
                ry="8.42"
                style={{ fill: "var(--illustration-facial-feature)" }}
              />
              <circle
                cx="78.59"
                cy="113.98"
                r="3.1"
                style={{ fill: "var(--illustration-bg)" }}
              />
            </g>
            {/* Right eye */}
            <g className="eye">
              <ellipse
                cx="146.4"
                cy="124.52"
                rx="8.38"
                ry="8.42"
                style={{ fill: "var(--illustration-facial-feature)" }}
              />
              <circle
                cx="148.66"
                cy="122.46"
                r="3.1"
                style={{ fill: "var(--illustration-bg)" }}
              />
            </g>
          </g>
        </svg>
      </Beat>
    </div>
  );
};

export default Cloud;
