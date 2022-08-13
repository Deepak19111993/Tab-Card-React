import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../Axios';
import SelectField from '../../Components/SelectField/SelectField';
import TextFieldComp from '../../Components/TextFieldComp/TextFieldComp';

const Settings = () => {
    const {response,error, loading} = Axios({url: "/api_category.php"});

    // console.log(response.trivia_categories);

    const naviagte = useNavigate();

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if(error){
        return (
            <Typography variant='h6' mt={20} color="red">
                Some Went Wrong!
            </Typography>
        )
    }
    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"},
    ]

    const typeOptions = [
        {id: "multiple",name: "Multiple Choice"},
        {id: "boolean", name: "true/false"}
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        naviagte('/question');
    }
    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3} width="100%">
                <Button fullWidth variant='contained' type="submit">
                    Get Started
                </Button>
            </Box>
        </form>
    );
};

export default Settings;