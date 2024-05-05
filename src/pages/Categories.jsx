import React, { useState, useEffect } from "react";
import Container from "../components/common/Container";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { books } from "../utils/data";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const uniqueCategories = {};
    books.forEach((book) => {
      book.categories.forEach((category) => {
        if (!uniqueCategories[category.name]) {
          uniqueCategories[category.id] = category;
        }
      });
    });

    setCategories(Object.values(uniqueCategories));
  }, []);

  return (
    <Container>
      <Stack gap="30px" sx={{ paddingX: "10%" }}>
        <Stack>
          <Typography variant="h4" component={"h1"} fontWeight="900">
            Categories
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {currentCategories?.map((category) => (
            <Button
              component={Link}
              to={`${category?.id}`}
              key={category?.id}
              variant="contained"
            >
              {category?.name}
            </Button>
          ))}
        </Box>
        <Box
          mt={3}
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={Math.ceil(categories?.length / itemsPerPage)}
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

export default Categories;
