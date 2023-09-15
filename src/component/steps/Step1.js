import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

export const Step1 = () => {
    return <Box height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={2}>
            <Typography>
                1. Download pedico aplication from apple store
            </Typography>
            <Box>

                <img src={"./apple-app-store-icon.png"} alt={"aa"} height={50}/>
            </Box>

        </Stack>
    </Box>
}