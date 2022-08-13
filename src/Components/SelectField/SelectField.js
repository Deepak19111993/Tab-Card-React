import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCateoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../../redux/actions";

const SelectField = ({ label, options }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {

    setValue(e.target.value);
    
    // if(label === "Category"){
    //   dispatch(handleCateoryChange(e.target.value));
    // }
    // else if(label === "Difficulty"){
    //   dispatch(handleDifficultyChange(e.target.value));
    // }
    // else if(label === "Type"){
    //   dispatch(handleTypeChange(e.target.value));
    // }
    // else{
    //   return;
    // }
    switch (label) {
      case "Category":
        dispatch(handleCateoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break
      default:
        return;
    }
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
