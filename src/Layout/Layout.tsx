import React, {MouseEvent} from 'react';
import ContentSquares from "../ContectSquares/ContentSquares";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import TypoHeadline from "../TypoHeadline/TypoHeadline";
import {EHebText} from "../hebText";
import PopUpExplanation from "../PopUpExplanation/PopUpExplanation";
import {useEffect, useState} from "react";
import { BasicModal } from "../PopUpExplanation/PopUptest";
import { CALCULATE_ACTION, useCalculateContext } from '../CalculateContext';
import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';


interface ICalaulateProps {
    revenues: number;
    expenses: number;
    selfFinancing: number;
    administrative: number;
}


const Layout = () =>{

    const [closeIcon, setCloseIcon] = useState<boolean>(true)
    const [explanationShow, setExplanationShow] = useState<boolean>(true)

    const { calculateState, calculateDispatch } = useCalculateContext();
    const {administrative, expenses, revenues, selfFinancing, errorType} = calculateState

    const handleClose = () => {
        setCloseIcon(!closeIcon)
    }


    const handleCalaulate = (event: MouseEvent) => {
        console.log(calculateState)

        const b = true
        let xin = true
        let sl = true
        let ad = true

        if (expenses !== null && selfFinancing !== null && administrative !== null && revenues !== null){
            const ex = expenses + administrative;
            const inRe =  revenues + selfFinancing;

            if (ex > inRe) {
                xin = false;
            }
            if (selfFinancing < ex * 0.1) {
                sl = false;

            }
            if (administrative > ex * 0.22) {
                ad = false;
            }

            calculateDispatch({
                type: CALCULATE_ACTION.SET_NUMBERS_CALCULATE,
                calculateButton: b,
                expensesLessThanIncome: xin,
                higheSelfFinancingThan: sl,
                lessAdministrativeExpenses: ad,
            })

        }
        
    }
    
    useEffect(()=>{
        const explanation = localStorage.getItem('wontExplanation')
        if (explanation === 'no') {
            setExplanationShow(false)
        }else{
            setCloseIcon(false)
        }
    }, [])

    return(
        <>
            <Container fixed>
                <Box sx={{marginRight: '10px'}}>
                    <Toolbar>
                        <img src={'https://final-yael.s3.amazonaws.com/logoBiroCat.png'}
                             alt={'logo'}
                             height={'60px'}
                             style={{
                                 margin: 'auto',
                                 paddingTop: "10px",
                             }}
                        />
                    </Toolbar>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '2px solid black',
                    minHeight: "87vh",

                }}>

                    <Box>
                        <TypoHeadline/>
                        <ContentSquares/>

                        {calculateState.isException &&
                            <Stack sx={{ width: '80%', margin: 'auto', marginTop: '50px'}} spacing={2}>
                            <Alert variant="outlined" severity={calculateState.errorType as AlertColor} sx={{
                                border: errorType === 'error' ? '10px solid #BF8174' : '10px solid #F2C46E',
                                backgroundColor: '#ffffff',
                                "& .css-1vooibu-MuiSvgIcon-root":{
                                    fill: errorType === 'error' ? '#BF8174' : '#F2C46E',
                                    marginLeft: '10px',
                                }
                            }}>
                              {calculateState.exceptionText}
                            </Alert>
                            </Stack>
                        }

                        {!calculateState.calculateButton?
                        <Box width={'100%'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '50px',
                                marginBottom: '30px',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    margin: 'auto',
                                    borderRadius: '8px',
                                    backgroundColor: '#023473',
                                    '&:hover': {
                                        backgroundColor: '#022a5e',
                                    },
                                    height: '60px',
                                    width: '150px',
                                    fontSize: '20px',
                                }}
                                size="large"
                                onClick={handleCalaulate}
                                disabled={calculateState.administrative === null || calculateState.expenses === null || calculateState.selfFinancing === null || calculateState.revenues === null || calculateState.errorTextField}
                            >
                                {EHebText.BUTTON_CALCULATE}
                            </Button>
                        </Box>
                        :
                        <Box width={'100%'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: 'auto',
                                marginTop: '50px',
                                marginBottom: '30px',
                                width: '50%'
                            }}
                        >
                            <Box sx={{
                                margin: 'auto',
                            }}>
                            <Button
                                variant="contained"
                                sx={{
                                    margin: 'auto',
                                    borderRadius: '8px',
                                    backgroundColor: '#023473',
                                    '&:hover': {
                                        backgroundColor: '#022a5e',
                                    },
                                    height: '60px',
                                    width: '60px',
                                    fontSize: '20px',
                                    marginLeft: '30px',
                                }}
                                size="large"
                                onClick={handleCalaulate}
                            >
                                <ShareRoundedIcon/>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    margin: 'auto',
                                    borderRadius: '8px',
                                    backgroundColor: '#023473',
                                    '&:hover': {
                                        backgroundColor: '#022a5e',
                                    },
                                    height: '60px',
                                    width: '60px',
                                    fontSize: '20px',
                                }}
                                size="large"
                                onClick={handleCalaulate}
                            >
                                <PrintRoundedIcon/>
                            </Button>
                            </Box>
                        </Box>
                        
                            }
                    </Box>

                    {explanationShow &&
                        (!closeIcon &&
                        
                        <>
                            {/* <PopUpExplanation onCloseLogin={handleClose}/> */}
                            <BasicModal onCloseLogin={handleClose}/>
                            </>
                
                        )
                    }
                </Box>
            </Container>
        </>
    )
}

export default Layout



