import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

export const Step2 = () => {
    return <>
        <Box height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Stack spacing={2}>
                <Typography>
                    2. Watch this Tutorial Video
                </Typography>
                <iframe style={{width:"calc(100vw - 16px)"}} width="100%" height="345" src="https://www.youtube.com/embed/078RzlDejmU">
                </iframe>
            </Stack>

        </Box>

    </>
}