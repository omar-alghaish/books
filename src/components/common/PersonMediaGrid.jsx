import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import MediaItem from "./MediaItem";
import { toast } from "react-toastify";

const PersonMediaGrid = ({ personId }) => {
  const [medias, setMedias] = useState([]);
  const [filteredMedias, setFilteredMedias] = useState([]);
  const [page, setPage] = useState(1);
  const skip = 8;

 

  

  return (
    <>
      <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
        {filteredMedias.map((media, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <MediaItem media={media} mediaType={media.media_type} />
          </Grid>
        ))}
      </Grid>
      {filteredMedias.length < medias.length && (
        <Button >
          load more
        </Button>
      )}
    </>
  );

};

export default PersonMediaGrid;