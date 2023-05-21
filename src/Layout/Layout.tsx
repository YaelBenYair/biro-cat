import ContentSquares from "../ContectSquares/ContentSquares";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import TypoHeadline from "../TypoHeadline/TypoHeadline";
import {EHebText} from "../hebText";
import PopUpExplanation from "../PopUpExplanation/PopUpExplanation";
import {useEffect, useState} from "react";
import { BasicModal } from "../PopUpExplanation/PopUptest";



const Layout = () =>{

    const [closeIcon, setCloseIcon] = useState<boolean>(true)
    const [explanationShow, setExplanationShow] = useState<boolean>(true)

    const handleClose = () => {
        setCloseIcon(!closeIcon)
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



