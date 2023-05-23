import { EHebText } from "./hebText";


export enum EException{
    expensesException = EHebText.EXPENSES_ERROR,
    selfFinancingException = EHebText.EXPENSES_ERROR,
    administrativeException = EHebText.EXPENSES_ERROR,
    revenuesException = EHebText.SUCCESS,
  }