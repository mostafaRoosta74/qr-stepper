import {Box, Button, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Confetti from 'react-confetti'


export const Step4 = () => {

    return <Box height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>

        <Stack spacing={2}>
            <Typography>
                4. Click on this button to scan your feat
            </Typography>
            <Box>

                <Button size={"large"} variant={"contained"}>Lunch to Application</Button>

            </Box>

        </Stack>
    </Box>
}