import React, { useState } from "react";
import Container from "../common/Container";
import Book from "../common/Book";
import { Box, Pagination, Stack, Typography } from "@mui/material";

const ItemsContainer = ({ books, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Stack sx={{ paddingX: { md: "10%", xs: "20px" } }} gap="30px">
        <Stack>
          {title && (
            <Typography variant="h4" component={"h1"} fontWeight="900">
              {title}
            </Typography>
          )}
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
          }}
        >
          {currentBooks?.map((book, index) => (
            <Book key={index} book={book} fullWidth={true}/>
          ))}
        </Box>
        <Box
          mt={3}
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={Math.ceil(books.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="text"
            shape="rounded"
            color="primary"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default ItemsContainer;
