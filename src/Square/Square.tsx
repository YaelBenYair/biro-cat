import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box, TextField, Typography} from "@mui/material";
import {EHebText} from "../hebText";

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


interface ISquareProps {
    headline: string;
    plaseholder: string;
    subHeadline?: string;
    onChangeText: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: number;
}

const Square = (props: ISquareProps): JSX.Element =>{

    const {headline, plaseholder, subHeadline, onChangeText, value} = props

    return(
        <>
        <Grid item>
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
            </Paper>
        </Grid>
        </>
    )
}

export default Square

