import {Box, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import {PopUpExplanationProps} from "../Interface/Interface";
import {EHebText} from "../hebText";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const PopUpExplanation: React.FC<PopUpExplanationProps> = ({onCloseLogin}) =>{
    console.log()

    return(
      <>
          <Box sx={{
              height: '600px',
              width: {xs: '300px', md: '1000px'},
              backgroundColor: '#023473',
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
                      }}
                  >
                      {EHebText.POPUP_GREETING_2}
                  </Typography>
              </Box>

              <Box sx={{
                  backgroundColor: '#3C3D41',
                  height: 'fit-content',
              }}>
                  <Grid item xs={12} height={'fit-content'}>
                      <Grid container justifyContent="center" spacing={12}>
                          {[0, 1, 2].map((value) => (
                              <Grid key={value} item>
                                  <Paper
                                      sx={{
                                          height: 140,
                                          width: 140,
                                          backgroundColor: (theme) =>
                                              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                      }}
                                  />
                              </Grid>
                          ))}
                      </Grid>
                  </Grid>
              </Box>
          </Box>
      </>
    );
}


export default PopUpExplanation



