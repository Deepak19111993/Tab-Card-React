import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from '../../Axios';
import { handleAmountChange, handleScoreChange } from '../../redux/actions';

const FinalScreen = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const data = useSelector((state) => state.questionReducer)

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        navigate("/");
    }

    return (
        <Box mt={30}>
            <Typography variant='h3' fontWeight="bold" mb={3}>
                Final Score {data.score}
            </Typography>
            <Button variant='outlined' onClick={handleBackToSettings}>Back to Setting!</Button>
        </Box>
    );
};

export default FinalScreen;