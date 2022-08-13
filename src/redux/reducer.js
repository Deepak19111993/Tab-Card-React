import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./actionsTypes";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: 50,
  score: 0,
};

const questionReducer = (state = initialState, action) => {
  // return state;


  // if(CHANGE_CATEGORY){
  //   return {
  //     ...state,
  //     question_category: action.payload,
  //   }
  // }
  // else if(CHANGE_DIFFICULTY){
  //   return {
  //     ...state,
  //       question_difficulty: action.payload,
  //   }
  // }
  // else if(CHANGE_TYPE){
  //   return {
  //     ...state,
  //     question_type: action.payload,
  //   }
  // }
  // else if(CHANGE_AMOUNT){
  //   return {
  //     ...state,
  //     amount_of_question: action.payload,
  //   }
  // }
  // else if(CHANGE_SCORE){
  //   return {
  //     ...state,
  //       score: action.payload,
  //   }
  // }
  // else{
  //   return state;
  // }

  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default:
      return state;
  }
};
export default questionReducer;
