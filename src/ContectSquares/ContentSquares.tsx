import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box, TextField, Typography} from "@mui/material";
import {EHebText} from "../hebText";
import Square from '../Square/Square';

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

    const [revenues, setRevenues] = React.useState<number>(0)
    const [expenses, setExpenses] = React.useState<number>(0)
    const [selfFinancing, setSelfFinancing] = React.useState<number>(0)
    const [administrative, setAdministrative] = React.useState<number>(0)

    
    const handleRevenuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRevenues(Number(event.target.value))
    };

    const handleExpensesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenses(Number(event.target.value))
    };

    const handleSelfFinancingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelfFinancing(Number(event.target.value))
    };
    
    const handleAdministrativeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdministrative(Number(event.target.value))
    };

    return(
        <>
            <Box sx={{
                marginBottom: {xs: 3},
            }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                    <Square headline={EHebText.REVENUES} plaseholder={EHebText.REVENUES_PLACEHOLDER} onChangeText={handleRevenuesChange} value={revenues}/>
                    <Square headline={EHebText.EXPENSES} plaseholder={EHebText.EXPENSES_PLACEHOLDER} onChangeText={handleExpensesChange} value={expenses}/>
                    <Square headline={EHebText.SELF_FINANCING} plaseholder={EHebText.SELF_FINANCING_PLACEHOLDER} subHeadline={EHebText.SELF_FINANCING_EXP} onChangeText={handleSelfFinancingChange} value={selfFinancing}/>
                    <Square headline={EHebText.ADMINISTRATIVE_AND_GENERAL_EXPENSES} plaseholder={EHebText.ADMINISTRATIVE_AND_GENERAL_EXPENSES_PLACEHOLDER} onChangeText={handleAdministrativeChange} value={administrative}/>
                    {/* {[0, 1, 2, 4].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 250,
                                    width: 250,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#F2F6F8' : '#3c3d41',
                                    borderRadius: '15px'
                                }}
                            >
                                <Box sx={{
                                    // display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Box sx={{
                                    // display: 'block',
                                    width: '100%',
                                    marginBottom: '30px',
                                }}>
                                <Typography sx={{
                                    // display: 'block',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    margin: 'auto',
                                }}
                                    variant={"h4"}
                                >
                                    {EHebText.REVENUES}
                                </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <TextField sx={s}
                                               // value={state.username}
                                               // onChange={}
                                               margin="normal"
                                               type="number"
                                               variant="outlined"
                                               placeholder={EHebText.REVENUES_PLACEHOLDER}
                                               required/>
                                </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))} */}
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default ContentSquares



