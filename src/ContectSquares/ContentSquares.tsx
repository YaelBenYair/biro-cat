import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box, TextField, Typography} from "@mui/material";
import {EHebText} from "../hebText";
import Square from '../Square/Square';
import { CALCULATE_ACTION, useCalculateContext } from '../CalculateContext';

const s = {
    "& .MuiInputLabel-root": { color: '#000000'},//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '10px', color: '#000000'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
    backgroundColor: '#F2F6F8',
    borderRadius: '10px',
    maxWidth: '80%'
}

const ContentSquares = () =>{

    const [revenues, setRevenues] = React.useState<string>("")
    const [expenses, setExpenses] = React.useState<string>("")
    const [selfFinancing, setSelfFinancing] = React.useState<string>("")
    const [administrative, setAdministrative] = React.useState<string>("")

    const { calculateState, calculateDispatch } = useCalculateContext();
    const patternNumber = /^\d+(\.\d+)?$/;

    
    const errorChack = (value: string): boolean => {
        if (patternNumber.test(value)){
            calculateDispatch({
                type: CALCULATE_ACTION.SET_ERROR_TEXT_FIELD,
                errorTextField: false
            })
            return false
        }
        else{
            calculateDispatch({
                type: CALCULATE_ACTION.SET_ERROR_TEXT_FIELD,
                errorTextField: true
            })
            return true
        }
    }

    const handleRevenuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRevenues(event.target.value)
        console.log(event.target.value)
        if (event.target.value.length > 0) {
            calculateDispatch({
                type: CALCULATE_ACTION.SET_REVENUES,
                revenues: Number(event.target.value),
            }) 
        }
        else{
            calculateDispatch({
                type: CALCULATE_ACTION.SET_REVENUES,
                revenues: null,
            })
        }
        errorChack(event.target.value)
        
    };

    const handleExpensesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenses(event.target.value)
        if (event.target.value.length > 0) {
            calculateDispatch({
                type: CALCULATE_ACTION.SET_EXPENSES,
                expenses: Number(event.target.value),
            })
        }
        else{
            calculateDispatch({
                type: CALCULATE_ACTION.SET_EXPENSES,
                expenses: null,
            })
        }
        errorChack(event.target.value)
    };

    const handleSelfFinancingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelfFinancing(event.target.value)
        if (event.target.value.length > 0) {
            calculateDispatch({
                type: CALCULATE_ACTION.SET_SELF_FINANCING,
                selfFinancing: Number(event.target.value),
            })
        }
        else{
            calculateDispatch({
                type: CALCULATE_ACTION.SET_SELF_FINANCING,
                selfFinancing: null,
            })
        }
        errorChack(event.target.value)
        
    };
    
    const handleAdministrativeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdministrative(event.target.value)
        if (event.target.value.length > 0) {
            calculateDispatch({
                type: CALCULATE_ACTION.SET_ADMINISTRATIVE,
                administrative: Number(event.target.value),
            })
        }
        else{
            calculateDispatch({
                type: CALCULATE_ACTION.SET_ADMINISTRATIVE,
                administrative: null,
            })
        }
        errorChack(event.target.value)
        
    };

    return(
        <>
            <Box sx={{
                marginBottom: {xs: 3},
            }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                    <Square headline={EHebText.REVENUES} plaseholder={EHebText.REVENUES_PLACEHOLDER} onChangeText={handleRevenuesChange} value={revenues} outcome={calculateState.income}/>
                    <Square headline={EHebText.EXPENSES} plaseholder={EHebText.EXPENSES_PLACEHOLDER} onChangeText={handleExpensesChange} value={expenses} outcome={calculateState.expensesLessThanIncome}/>
                    <Square headline={EHebText.SELF_FINANCING} plaseholder={EHebText.SELF_FINANCING_PLACEHOLDER} subHeadline={EHebText.SELF_FINANCING_EXP} onChangeText={handleSelfFinancingChange} value={selfFinancing} outcome={calculateState.higheSelfFinancingThan}/>
                    <Square headline={EHebText.ADMINISTRATIVE_AND_GENERAL_EXPENSES} plaseholder={EHebText.ADMINISTRATIVE_AND_GENERAL_EXPENSES_PLACEHOLDER} onChangeText={handleAdministrativeChange} value={administrative} outcome={calculateState.lessAdministrativeExpenses}/>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default ContentSquares



