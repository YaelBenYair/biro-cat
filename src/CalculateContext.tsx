import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { EHebText } from "./hebText";
import { EException } from "./Exceptions";

interface ICalculateSetting {
    revenues: number | null;
    expenses: number | null;
    selfFinancing: number | null;
    administrative: number | null;
    errorType: string;
    calculateButton: boolean;
    expensesLessThanIncome: boolean;
    higheSelfFinancingThan: boolean;
    lessAdministrativeExpenses: boolean;
    income: boolean;
    exceptionText: string;
    isException: boolean;
    errorTextField: boolean;
}

interface ICalculateAction {
    type: string;
    revenues?: number | null;
    expenses?: number | null;
    selfFinancing?: number | null;
    administrative?: number | null;
    errorType?: string;
    calculateButton?: boolean;
    expensesLessThanIncome?: boolean;
    higheSelfFinancingThan?: boolean;
    lessAdministrativeExpenses?: boolean;
    income?: boolean;
    exceptionText?: string;
    isException?: boolean;
    errorTextField?: boolean;
}


const CALCULATE_SETTING: ICalculateSetting = {
    revenues: null,
    expenses: null,
    selfFinancing: null,
    administrative: null,
    errorType: "",
    calculateButton: false,
    expensesLessThanIncome: true,
    higheSelfFinancingThan: true,
    lessAdministrativeExpenses: true,
    income: true,
    exceptionText: "",
    isException: false,
    errorTextField: true,
}

export const CALCULATE_ACTION = {
    SET_REVENUES: "setRevenues",
    SET_EXPENSES: "setExpenses",
    SET_SELF_FINANCING: "setSelfFinancing",
    SET_ADMINISTRATIVE: "setAdministrative",
    CALCULATE_BUTTOM: "calculateButoon",
    SET_NUMBERS_CALCULATE: "setNumberCalculate",
    SET_ERROR_TEXT_FIELD: 'setErrorTextField'
  };


  // const chackDisable = (calculateState: ICalculateSetting) => {
  //   const {administrative, expenses, revenues, selfFinancing} = calculateState
  //   if (administrative === null || expenses === null || revenues === null || selfFinancing === null){
  //     return true
  //   }
  //   else{
  //       return false
  // }
  // }

  const chackExceptions = (calculateState: Partial<ICalculateAction>): [EException, boolean, string] => {
    const {expensesLessThanIncome, higheSelfFinancingThan, lessAdministrativeExpenses} = calculateState
    if (!expensesLessThanIncome) {
      return [EException.expensesException, true, 'error']
    }
    else if (!higheSelfFinancingThan) {
      return [EException.selfFinancingException, true, 'error']
    }
    else if (!lessAdministrativeExpenses) {
      return [EException.selfFinancingException, true, 'error']
    }
    else{
      return [EException.revenuesException, true, 'success']
    }
       
  }

function calculateSettingReducer(calculateState: ICalculateSetting, action: ICalculateAction): ICalculateSetting {
  switch (action.type) {

    case CALCULATE_ACTION.SET_REVENUES: {
        return {
          ...calculateState,
          revenues: action.revenues!,
        };
      }

      case CALCULATE_ACTION.SET_EXPENSES: {
        return {
          ...calculateState,
          expenses: action.expenses!,
        };
      }

      case CALCULATE_ACTION.SET_SELF_FINANCING: {
        return {
          ...calculateState,
          selfFinancing: action.selfFinancing!,

        };
      }

      case CALCULATE_ACTION.SET_ADMINISTRATIVE: {

        return {
          ...calculateState,
          administrative: action.administrative!,
        };
      }

      case CALCULATE_ACTION.CALCULATE_BUTTOM:{
        return{
          ...calculateState,
          calculateButton: action.calculateButton!,
        }
      }

      case CALCULATE_ACTION.SET_NUMBERS_CALCULATE:{
        const [errors, isExc, exceptionType] = chackExceptions({expensesLessThanIncome: action.expensesLessThanIncome, higheSelfFinancingThan: action.higheSelfFinancingThan, lessAdministrativeExpenses: action.lessAdministrativeExpenses})
        console.log(errors, isExc, exceptionType)
        return{
          ...calculateState,
          calculateButton: action.calculateButton!,
          expensesLessThanIncome: action.expensesLessThanIncome!,
          higheSelfFinancingThan: action.higheSelfFinancingThan!,
          lessAdministrativeExpenses: action.lessAdministrativeExpenses!,
          isException: isExc,
          exceptionText: String(errors),
          errorType: exceptionType,
        }
      }

      case CALCULATE_ACTION.SET_ERROR_TEXT_FIELD:{
        return{
          ...calculateState,
          errorTextField: action.errorTextField!,
        }
      }
    
    default:
      return calculateState;
  }
}



interface CalculateContextProps {
    calculateState: ICalculateSetting;
    calculateDispatch: Dispatch<ICalculateAction>;
  }
  
  const CalculateContext = createContext<CalculateContextProps | undefined>(undefined);
  
  export const CalculateProvider = ({ children }: { children: ReactNode }) => {
    const [calculateState, calculateDispatch] = useReducer(calculateSettingReducer, CALCULATE_SETTING);
  
    return (
      <CalculateContext.Provider value={{ calculateState, calculateDispatch }}>
        {children}
      </CalculateContext.Provider>
    );
  };
  
  export const useCalculateContext = () => {
    const context = useContext(CalculateContext);
    if (context === undefined) {
      throw new Error("useCalculateContext must be used within a CalculateProvider");
    }
    return context;
  };




