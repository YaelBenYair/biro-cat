import {Box, Button, Container, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from "react";
import {PopUpExplanationProps} from "../Interface/Interface";
import {EHebText} from "../hebText";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './PopUpExplanation.css';
import Checkbox from '@mui/material/Checkbox';


const PopUpExplanation: React.FC<PopUpExplanationProps> = ({onCloseLogin}) =>{
    console.log()

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    return(
      <>
      {/* <Container fixed>
          <Box sx={{
              height: '600px',
              width: {xs: '300px', md: '1100px'},
              backgroundColor: '#023473',
              borderRadius: '20px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              position: 'relative',
          }}>
              <Box sx={{
                  padding: '10px',
              }}>
                  <CloseIcon onClick={onCloseLogin} sx={{
                      cursor: 'pointer',
                      color: '#023473',
                      padding: '5px',
                      backgroundColor: '#F4F6F8',
                      borderRadius: '30px'
                  }}/>
              </Box>

              <Box sx={{
                  height: '220px',
                  display: 'block'
              }}>
                  <Typography
                      variant={"h3"}
                      sx={{
                          fontWeight: 700,
                          color: '#F4F6F8',
                          paddingRight: '20px',
                          fontFamily: "'Poppins', sans-serif",
                      }}
                  >
                      {EHebText.POPUP_GREETING_1}
                  </Typography>
                  <Typography
                      variant={"h3"}
                      sx={{
                          fontWeight: 300,
                          color: '#F4F6F8',
                          paddingRight: '20px',
                          fontFamily: "'Poppins', sans-serif",
                      }}
                  >
                      {EHebText.POPUP_GREETING_2}
                  </Typography>
              </Box>

              <Box sx={{
                  backgroundColor: '#3C3D41',
                  height: 'fit-content',
              }}>
                  <Grid item xs={12}>
                      <Grid container justifyContent="center" spacing={5} sx={{
                          paddingBottom: '25px',
                      }}>
                          {[0, 1, 2, 3, 4].map((value) => (
                              <Grid key={value} item>
                                  {value % 2 === 0?
                                      <Paper
                                          sx={{
                                              display: 'flex',
                                              height: 130,
                                              width: 130,
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              backgroundColor: (theme) =>
                                                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                              borderRadius: '50%',
                                          }}
                                      ><span className="number-style">
                                        {value ? (value === 2 ? 2 : 3) : 1}
                                        </span></Paper>
                                  :
                                      <Box
                                          sx={{
                                              display: 'flex',
                                              height: 130,
                                              width: 130,
                                              borderRadius: '50%',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                          }}
                                      ><span className="greater-than-entity">&#62;</span></Box>
                                  }

                              </Grid>
                          ))}
                      </Grid>
                  </Grid>
              </Box>

              <Box>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={19} sx={{
                            paddingBottom: '25px',
                        }}>
                            {[0, 1, 2].map((value) => (
                                <Grid key={value} item>
                                    <Box sx={{
                                        // border: '2px solid green',
                                        width: '200px',
                                        textAlign: 'center',
                                        color: '#f4f6f8',
                                        fontSize: '12px'
                                    }}>
                                        {value ? (value === 1 ? <p>{EHebText.STEP_TWO}</p> 
                                        : 
                                        <p>{EHebText.STEP_THREE} <span style={{fontWeight: 600}}>{EHebText.STEP_THREE_BOLD}</span></p>) 
                                        : 
                                        <p>{EHebText.STEP_ONE}</p>}
                                    </Box>
                                </Grid>
                        ))}
                        </Grid>
                                
                    </Grid>
                    
              </Box>
              <Box sx={{
                textAlign: 'left',
                paddingLeft: '50px',
                color: '#f4f6f8',
                fontSize: '30px',
                fontWeight: 500,
              }}>
                 <p style={{padding: 0, margin: 0}}>{EHebText.END_POPUP}</p>
              </Box>

              <Box sx={{
                // height: '30px',
                // width: '500px',
                backgroundColor: '#ffffff',
                position: 'absolute',
                transform: 'translate(50%)',
                right: '50%',
                bottom: '-1rem',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '8px',
              }}>
                <Box sx={{
                    padding: '1px 1px 2px 8px',
                }}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        size="small"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span>{EHebText.CHACKBOX}</span>
                    </Box>
              </Box>
          </Box>

          <Box width={'100%'} sx={{
            position: 'flex',
            width: '100%',
            marginTop: '40px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            variant="contained"
            sx={{
                
                borderRadius: '8px',
                backgroundColor: '#023473',
                '&:hover': {
                    backgroundColor: '#022a5e',
                },
                height: '60px',
                width: '150px',
                fontSize: '20px',
                margin: 'auto',
            }}
            size="large"
        >המשך
        </Button>
        </Box>
        </Container> */}
      </>
    );
}


export default PopUpExplanation



