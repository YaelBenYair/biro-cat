import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";
import { useNavigate } from "react-router-dom";


interface ICalculateSetting {
    revenues: number | null;
    expenses: number | null;
    selfFinancing: number | null;
    administrative: number | null;
    disabledButton: boolean;
    calculateButton: boolean;
    expensesHigherThanIncome: boolean;
    higheSelfFinancingThan: boolean;
    lessAdministrativeExpenses: boolean;
}

interface ICalculateAction {
    type: string;
    revenues?: number | null;
    expenses?: number | null;
    selfFinancing?: number | null;
    administrative?: number | null;
    disabledButton?: boolean;
    calculateButton?: boolean;
    expensesHigherThanIncome?: boolean;
    higheSelfFinancingThan?: boolean;
    lessAdministrativeExpenses?: boolean;
}

const CALCULATE_SETTING: ICalculateSetting = {
    revenues: null,
    expenses: null,
    selfFinancing: null,
    administrative: null,
    disabledButton: true,
    calculateButton: false,
    expensesHigherThanIncome: true,
    higheSelfFinancingThan: true,
    lessAdministrativeExpenses: true,
}

export const CALCULATE_ACTION = {
    SET_REVENUES: "setRevenues",
    SET_EXPENSES: "setExpenses",
    SET_SELF_FINANCING: "setSelfFinancing",
    SET_ADMINISTRATIVE: "setAdministrative",
    CALCULATE_BUTTOM: "calculateButoon",
    SET_NUMBERS_CALCULATE: "setNumberCalculate"
  };


  const chackDisable = (calculateState: ICalculateSetting) => {
    const {administrative, expenses, revenues, selfFinancing} = calculateState
    if (administrative === null || expenses === null || revenues === null || selfFinancing === null){
      return true
    }
    else{
        return false
  }
  }


function calculateSettingReducer(calculateState: ICalculateSetting, action: ICalculateAction): ICalculateSetting {
  switch (action.type) {

    case CALCULATE_ACTION.SET_REVENUES: {
        const buttonDis = chackDisable(calculateState)
        console.log(buttonDis)
        return {
          ...calculateState,
          revenues: action.revenues!,
          disabledButton: buttonDis,
        };
      }
      case CALCULATE_ACTION.SET_EXPENSES: {
        const buttonDis = chackDisable(calculateState)
        console.log(buttonDis)
        return {
          ...calculateState,
          expenses: action.expenses!,
          disabledButton: buttonDis,
        };
      }
      case CALCULATE_ACTION.SET_SELF_FINANCING: {
        const buttonDis = chackDisable(calculateState)
        console.log(buttonDis)
        return {
          ...calculateState,
          selfFinancing: action.selfFinancing!,
          disabledButton: buttonDis,
        };
      }
      case CALCULATE_ACTION.SET_ADMINISTRATIVE: {
        const buttonDis = chackDisable(calculateState)
        console.log(buttonDis)
        return {
          ...calculateState,
          administrative: action.administrative!,
          disabledButton: buttonDis,
        };
      }

      case CALCULATE_ACTION.CALCULATE_BUTTOM:{
        return{
          ...calculateState,
          calculateButton: action.calculateButton!,
        }
      }
      case CALCULATE_ACTION.SET_NUMBERS_CALCULATE:{
        return{
          ...calculateState,
          calculateButton: action.calculateButton!,
          expensesHigherThanIncome: action.expensesHigherThanIncome!,
          higheSelfFinancingThan: action.higheSelfFinancingThan!,
          lessAdministrativeExpenses: action.lessAdministrativeExpenses!,
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




