import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box, TextField, Typography} from "@mui/material";
import {EHebText} from "../hebText";
import CheckIcon from '@mui/icons-material/Check';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { CALCULATE_ACTION, useCalculateContext } from '../CalculateContext';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const s = {
    "& .MuiInputLabel-root": { color: '#000000'},//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '10px', color: '#000000'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center', fontSize: '14px'},
    backgroundColor: '#F2F6F8',
    borderRadius: '10px',
    maxWidth: '80%',
    
}


interface ISquareProps {
    headline: string;
    plaseholder: string;
    subHeadline?: string;
    onChangeText: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: number;
    outcome: boolean;
}

const Square = (props: ISquareProps): JSX.Element =>{

    const { calculateState, calculateDispatch } = useCalculateContext();

    const {headline, plaseholder, subHeadline, onChangeText, value, outcome} = props

    return(
        <>
        <Grid item>
            <Paper
                sx={{
                    position: 'relative',
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    height: 230,
                    width: 230,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#F2F6F8' : '#3c3d41',
                    borderRadius: '15px',
                    // paddingTop: '30px',
                }}
            >
                <Box sx={{
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    
                }}>
                <Box sx={{
                    // display: 'block',
                    width: '100%',
                    marginBottom: '15px',
                    marginTop: '25px',
                }}>
                <Typography sx={{
                    // display: 'block',
                    textAlign: 'center',
                    color: '#ffffff',
                    margin: 'auto',
                    width: '100%',
                }}
                    variant={"h4"}
                >
                    {headline}
                </Typography>

                {subHeadline &&
                <Typography variant='subtitle1' color={'#ffffff'} width={'80%'} textAlign={'center'} margin={'auto'}>
                    {subHeadline}
                </Typography>
                }
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: '14px',
                    transform: 'translate(50%)',
                    right: '50%',
                    width: '200px',
                    
                }}>
                    <TextField sx={s}
                        // value={value}
                        onChange={onChangeText}
                        margin="normal"
                        type="number"
                        variant="outlined"
                        placeholder={plaseholder}
                        required/>
                </Box>
                </Box>

                {calculateState.calculateButton && 
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: '-20px',
                        transform: 'translate(50%)',
                        right: '98%',
                    
                        width: '200px',
                        
                        
                    }}>
                        {outcome?
                            <CheckRoundedIcon fontSize="large" sx={{
                                color:'#F2C46E',
                                border: '2px solid #3C3D41',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                            }}/>
                            :
                            <CloseRoundedIcon fontSize="large" sx={{
                                color:'#BF8174',
                                border: '2px solid #3C3D41',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                            }}/>
                        }
                    </Box>
                }
            </Paper>
        </Grid>
        </>
    )
}

export default Square

