import {Box, Typography} from "@mui/material";
import {EHebText} from "../hebText";


const TypoHeadline = () => {
    return(
        <>
            <Box sx={{
                marginBottom: '70px'
            }}>
                <Typography
                    variant={"h3"}
                    sx={{
                        fontWeight: 700,
                    }}
                >
                    {EHebText.HELLO_GREETING}
                </Typography>
                <Typography
                    variant={"h3"}
                    sx={{
                        fontWeight: 300,
                    }}
                >
                    {EHebText.HELLO_GREETING_EXP_1}
                </Typography>
            </Box>
        </>
    )
}

export default TypoHeadline



