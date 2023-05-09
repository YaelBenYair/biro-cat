import ContentSquares from "../ContectSquares/ContentSquares";
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import TypoHeadline from "../TypoHeadline/TypoHeadline";
import {EHebText} from "../hebText";
import PopUpExplanation from "../PopUpExplanation/PopUpExplanation";
import {useState} from "react";


const Layout = () =>{

    const [closeIcon, setCloseIcon] = useState<boolean>(false)

    const handleClose = () => {
        setCloseIcon(!closeIcon)
    }

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
                    position: 'relative',
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
                    {!closeIcon &&
                    <Box sx={{
                        position: 'absolute',
                        transform: 'translate(50%)',
                        right: '50%',
                        bottom: {xs: '50rem', md: '6rem'},
                        // zIndex: -1,
                    }}>
                        <PopUpExplanation onCloseLogin={handleClose}/>
                    </Box>
                    }
                </Box>
            </Container>
        </>
    )
}

export default Layout



