import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {PopUpExplanationProps} from "../Interface/Interface";
import {EHebText} from "../hebText";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './PopUpExplanation.css';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const style = {
  position: 'absolute' as 'absolute',
//   top: '50%',
  top: {xs: '90%', md: '50%'},
  left: '50%',
//   right: '-50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  backgroundColor: '#023473',
  borderRadius: '20px',
  boxShadow: 24,
  p: 2,
  outline: 'none',
//   marginRight: '20px',
};


export const BasicModal: React.FC<PopUpExplanationProps> = ({ onCloseLogin }) => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 900);
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = React.useState(false);


    const handleContinuedButton = () =>{
        if (checked) {
            localStorage.setItem('wontExplanation', 'no')
        }
        onCloseLogin()
    } 


  

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 900);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div style={{border: 'unset'}}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        sx={{
            // '&::-webkit-scrollbar':{
            //     width: '0',
            // }
        }}
        style={{ overflow: 'scroll', width: '100%',
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box>
              <Box sx={{
                //   padding: '10px',
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
                //   height: '220px',
                  display: 'block',
                  padding: '10px 0 30px 0',
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
                      <Grid container justifyContent="center" rowSpacing={2} sx={{
                          paddingBottom: {md:'10px'},
                      }}>
                          {[0, 1, 2, 3, 4].map((value) => (
                              <Grid lg={2} md={2} sm={7} xs={9} key={value} item>
                                  {value % 2 === 0?
                                  <Box>
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
                                              margin: 'auto',
                                          }}
                                      ><span className="number-style">
                                        {value ? (value === 2 ? 2 : 3) : 1}
                                        </span></Paper>
                                        <Box sx={{
                                            textAlign: 'center',
                                            color: '#ffffff',
                                        }}>
                                        {!isLargeScreen ? 
                                            (value ? (value === 2 ? <p>{EHebText.STEP_TWO}</p> 
                                            : 
                                            <p>{EHebText.STEP_THREE} <span style={{fontWeight: 600}}>{EHebText.STEP_THREE_BOLD}</span></p>) 
                                            : 
                                            <p>{EHebText.STEP_ONE}</p>)
                                        :
                                        null
                                        }
                                        </Box>
                                        
                                    </Box>
                                  :
                                      <Box
                                          sx={{
                                              display: 'flex',
                                              height: 130,
                                              width: 130,
                                              borderRadius: '50%',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              transform: {sm: 'rotate(-90deg)', md: 'rotate(0)'},
                                              textAlign: 'center',
                                              margin: 'auto',
                                          }}
                                      ><span className="greater-than-entity">&#62;</span></Box>
                                  }

                              </Grid>
                          ))}
                      </Grid>
                  </Grid>
              </Box>

            {isLargeScreen && 
              <Box>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={19} sx={{
                            paddingBottom: '25px',
                            width: '100%',
                            
                            // alignItems: 'center',
                        }}>
                            {[0, 1, 2].map((value) => (
                                <Grid md={4} lg={4} key={value} item sx={{
                                    // display: 'flex',
                                    // alignContent: 'center',
                                    // alignItems: 'center',
                                    // "& .css-15qgr6d-MuiGrid-root .MuiGrid-item":{
                                    //     paddingLeft: 'none !important',
                                    // }
                                }}>
                                    <Box sx={{
                                        // border: '2px solid green',
                                        width: {lg: '250px', md: '200px', sm: '100px'},
                                        textAlign: 'center',
                                        color: '#f4f6f8',
                                        fontSize: '12px',
                                        paddingRight: '20px'
                                        // margin: 'auto'
                                        
                                    }}>
                                        {value ? (value === 1 ? <p style={{width: '100%', textAlign: 'center'}}>{EHebText.STEP_TWO}</p> 
                                        : 
                                        <p>{EHebText.STEP_THREE} <span style={{fontWeight: 600}}>{EHebText.STEP_THREE_BOLD}</span></p>) 
                                        : 
                                        <p>{EHebText.STEP_ONE}</p>}
                                    </Box>
                                </Grid>
                        ))}
                        </Grid>
                                
                    </Grid>
                    
              </Box>}
              <Box sx={{
                textAlign: 'left',
                paddingLeft: '50px',
                paddingTop: '10px',
                color: '#f4f6f8',
                fontSize: '30px',
                fontWeight: 500,
                marginBottom: 10,
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
                bottom: {md: '-2rem', xs: '-1rem'},
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '8px',
              }}>
                <Box sx={{
                    padding: '5px',
                    display: 'flex',
                    // marginBottom: '15px',
                }}>
                    <Box>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            size="small"
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Box>
                        <Box sx={{
                            width: {xs: '230px', md: '100%'}
                        }}>
                            <span>{EHebText.CHACKBOX}</span>
                        </Box>
                    </Box>
              </Box>
          </Box>

          <Box width={'100%'} sx={{
            display: 'flex',
            position: 'absolute',
            transform: 'translate(50%)',
            right: '50%',
            bottom: {md: '-7rem', xs: '-6rem'},
          }}>
          <Button
            variant="contained"
            onClick={handleContinuedButton}
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

        </Box>

      </Modal>
    </div>
  );
}




// <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>