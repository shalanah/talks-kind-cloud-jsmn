import React from "react";
import { Container, useIsNotSupported } from "./Layout";
import Cloud from "./Cloud";

const CloudContainer = () => {
  const isNotSupported = useIsNotSupported();
  if (isNotSupported) return null;
  return (
    <div style={{ display: "fixed", width: "100%", height: "100%" }}>
      <Container>
        <div className="cloud">
          <Cloud />
        </div>
      </Container>
    </div>
  );
};

export default CloudContainer;
