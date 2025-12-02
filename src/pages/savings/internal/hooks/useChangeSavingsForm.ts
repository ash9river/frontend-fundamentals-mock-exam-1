import { useReducer } from 'react';

type FormState = {
  goalAmount: string;
  monthlyDeposit: string;
  savingsPeriod: 6 | 12 | 24;
};

type FormAction =
  | {
      type: 'GOAL_AMOUNT';
      payload: FormState['goalAmount'];
    }
  | {
      type: 'MONTHLY_DEPOSIT';
      payload: FormState['monthlyDeposit'];
    }
  | {
      type: 'SAVINGS_PERIOD';
      payload: FormState['savingsPeriod'];
    };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'GOAL_AMOUNT':
      return {
        ...state,
        goalAmount: action.payload,
      };
    case 'MONTHLY_DEPOSIT':
      return {
        ...state,
        monthlyDeposit: action.payload,
      };
    case 'SAVINGS_PERIOD':
      return {
        ...state,
        savingsPeriod: action.payload,
      };
    default:
      return state;
  }
}

const initialState: FormState = {
  goalAmount: '',
  monthlyDeposit: '',
  savingsPeriod: 12,
};

export function useChangeSavingsForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChangeGoalAmount(value: string) {
    dispatch({ type: 'GOAL_AMOUNT', payload: value });
  }

  function handleChangeMonthlyDeposit(value: string) {
    dispatch({ type: 'MONTHLY_DEPOSIT', payload: value });
  }

  function handleChangeSavingsPeriod(value: 6 | 12 | 24) {
    switch (value) {
      case 6:
      case 12:
      case 24:
        dispatch({ type: 'SAVINGS_PERIOD', payload: value });
        break;
      default:
        throw new Error('저축 기간이 잘못되었습니다.');
    }
  }

  return { savingsFormState: state, handleChangeGoalAmount, handleChangeMonthlyDeposit, handleChangeSavingsPeriod };
}
