import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SwipeableViews from 'react-swipeable-views';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const StepperStep = () => {
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,#FFC554 0%,#F95738 50%,#181E4B 100%)',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,#FFC554 0%,#F95738 50%,#181E4B 100%)',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor:
                theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundImage:
                'linear-gradient( 136deg, #181E4B 0%, #F95738 50%, #FFC554 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            backgroundImage:
                'linear-gradient( 136deg, #181E4B 0%, #F95738 50%, #FFC554 100%)',
        }),
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;

        const icons  = {
            1: <FileDownloadIcon />,
            2: <OndemandVideoIcon />,
            3: <AssignmentIcon />,
            4: <CheckCircleIcon/>
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    const steps = ['Download', 'Watch the video', 'Fill the form', "Finish"];
    const [value,setValue] = useState(0)

    return <Stack sx={{
        width: '100%',
        height: "calc(100vh - 64px)",
        padding: "32px 0px"
    }} spacing={4} display={"flex"}>
        <Stepper alternativeLabel activeStep={value} connector={<ColorlibConnector />}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Box sx={{flexGrow:1}}>

        <SwipeableViews
            axis={ 'x'}
            index={value}
            disabled={true}

        >
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1} >
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} >
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3} >
                Item Four
            </TabPanel>
        </SwipeableViews>
        </Box>

        {
            value < 3 &&   <Box display={"flex"} justifyContent={"end"} padding={"0px 16px"}>
                <Button onClick={()=>setValue(pre=>pre+1)}>Next</Button>
            </Box>
        }

    </Stack>

}