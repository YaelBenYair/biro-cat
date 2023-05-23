import React, {MouseEvent} from 'react';
import ContentSquares from "../ContectSquares/ContentSquares";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import TypoHeadline from "../TypoHeadline/TypoHeadline";
import {EHebText} from "../hebText";
import PopUpExplanation from "../PopUpExplanation/PopUpExplanation";
import {useEffect, useState} from "react";
import { BasicModal } from "../PopUpExplanation/PopUptest";
import { CALCULATE_ACTION, useCalculateContext } from '../CalculateContext';


interface ICalaulateProps {
    revenues: number;
    expenses: number;
    selfFinancing: number;
    administrative: number;
}


const Layout = () =>{

    const [closeIcon, setCloseIcon] = useState<boolean>(true)
    const [explanationShow, setExplanationShow] = useState<boolean>(true)
    const [calculateButtonB, setCalculateButton] = useState<boolean>(false)
    const [exIn, setExIn] = useState<boolean>(true)
    const [self, setSelf] = useState<boolean>(true)
    const [admini, setAdmini] = useState<boolean>(true)

    const { calculateState, calculateDispatch } = useCalculateContext();
    const {administrative, expenses, revenues, selfFinancing} = calculateState

    const handleClose = () => {
        setCloseIcon(!closeIcon)
    }

    const handleCalaulate = (event: MouseEvent) => {
        console.log(calculateState)

        setCalculateButton(true)
        const b = true
        let xin = true
        let sl = true
        let ad = true

        if (expenses !== null && selfFinancing !== null && administrative !== null && revenues !== null){
            const ex = expenses + selfFinancing;
            const inRe = administrative + revenues;

            if (ex > inRe) {
                setExIn(false);
                xin = false;
            }
            if (selfFinancing < ex * 0.1) {
                setSelf(false);
                sl = false;

            }
            if (administrative > ex * 0.22) {
                setAdmini(false);
                ad = false;
            }

            // calculateDispatch({
            //     type: CALCULATE_ACTION.SET_NUMBERS_CALCULATE,
            //     calculateButton: calculateButtonB,
            //     expensesHigherThanIncome: exIn,
            //     higheSelfFinancingThan: self,
            //     lessAdministrativeExpenses: admini,
            // })

            calculateDispatch({
                type: CALCULATE_ACTION.SET_NUMBERS_CALCULATE,
                calculateButton: b,
                expensesHigherThanIncome: xin,
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
                <Box>
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
                                disabled={calculateState.disabledButton}
                            >
                                {EHebText.BUTTON_CALCULATE}
                            </Button>
                        </Box>
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



