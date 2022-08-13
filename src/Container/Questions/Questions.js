import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import { handleScoreChange } from "../../redux/actions";
const getRendomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
  const navigate =useNavigate();
  const data = useSelector((state) => state.questionReducer);
  const dispatch= useDispatch();

  console.log("data",data);

  let apiUrl = `/api.php?amount=${data.amount_of_question}`;

  if(data.question_category){
    apiUrl= apiUrl.concat(`&category=${data.question_category}`)
  }
   if(data.question_difficulty){
    apiUrl= apiUrl.concat(`&difficulty=${data.question_difficulty}`)
  }
   if(data.question_type){
    apiUrl= apiUrl.concat(`&type=${data.question_type}`)
  }
  

  const { response, loading } = Axios({ url: apiUrl });
  const [questionIndex, setQuestionIndex]= useState(0);
  const [options, setOptions] = useState([]);

  console.log(options);

  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getRendomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
      // console.log(getRendomInt(3));
      
    }
  },[response, questionIndex])

  console.log(response);

  if(loading) {
    return (
      <Box mt={20} >
        <CircularProgress />
      </Box>
    )
  }

  const handleClickAnswer =(e) => {
    const question = response.results[questionIndex];
    console.log(e.target.textContent );
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(data.score + 1));
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
    }else{
      navigate(`/score`);
    }
  }

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
        <Button onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>
      </Box>
      // <Box mt={2}>
      //   <Button variant="contained">Answer 2</Button>
      // </Box>
      ))}
      <Box mt={5}>Score : {data.score} / {response.results.length}</Box>
    </Box>
  );
};

export default Questions;
