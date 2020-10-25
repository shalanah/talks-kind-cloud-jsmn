import React from "react";

const NotBuiltForThisDevice = () => {
  return (
    <div style={{ margin: "auto" }}>
      <h1 style={{ fontSize: "max(7vw, 2.5rem)" }}>
        Sorry, this deck wasn't made for this&nbsp;device.
      </h1>
      <p style={{ fontSize: "max(3vmin, 1.5rem)", marginBottom: ".5em" }}>
        Shalanah *might* make it work later. (no promises)
      </p>
      <p style={{ fontSize: "max(3vmin, 1.5rem)" }}>
        In the meantime... you can still checkout{" "}
        <a
          href={"https://kindcloud.app"}
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: 140, textDecoration: "underline" }}
        >
          kindcloud.app
        </a>
      </p>
    </div>
  );
};

export default NotBuiltForThisDevice;
