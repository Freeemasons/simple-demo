import React from 'react';
import { Grid, TextField } from "@mui/material"

const SearchField = (props) => {

  const {handleSearch, handleKeyPress, searchText} = props

  return (
    <Grid container>

      <Grid item xs={12}>

        <TextField
          fullWidth
          id="search"
          label="search"
          margin="normal"
          name="search"
          type="text"
          variant="outlined"
          onChange={handleSearch}
          // onBlur={handleSearch}
          size={'small'}
          focused
          value={searchText}
        />

      </Grid>

    </Grid>
  );
};

export default SearchField;