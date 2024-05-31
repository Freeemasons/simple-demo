import React from 'react';
import { Grid, TextField } from "@mui/material"

const SearchField = () => {


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
          // onChange={changeHandler}
          // onBlur={changeHandler}
          size={'small'}
          focused
        />

      </Grid>

    </Grid>
  );
};

export default SearchField;