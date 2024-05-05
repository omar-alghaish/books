import React from "react";
import ItemsContainer from "../components/layout/ItemsContainer";
import { books } from "../utils/data";
import Container from "../components/common/Container";

const Reading = () => {
  return (
    <Container>
      <ItemsContainer books={books} title="Reading" />
    </Container>
  );
};

export default Reading;
