import Stack from "@mui/material/Stack";
import {Box, Typography} from "@mui/material";
import {FetchingDataEnum, Formalite, useFormaliteRef, ViewTypes} from "@novin-dev/formalite";
import * as Yup from "yup";


const builderForm = Yup.object({
    TextView_1_0: Yup.string().required(),
    TextView_2_0: Yup.string().required(),
    TextView_3_0: Yup.string().required(),
    Select_4_0: Yup.string().required(),
    TextView_5_0: Yup.string().required(),
    DatePicker_6_0: Yup.string().required(),
});

const ini ={
    TextView_1_0: "",
    TextView_2_0: "",
    TextView_3_0: "",
    Select_4_0: "",
    TextView_5_0: "",
    DatePicker_6_0: null,
}

const formString ={
    TextView_1_0: {
        type: ViewTypes.TextView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "First Name",
        },
    },
    TextView_2_0: {
        type: ViewTypes.TextView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "Last Name",
        },
    },
    TextView_3_0: {
        type: ViewTypes.TextView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "Patient id",
        },
    },
    Select_4_0: {
        type: ViewTypes.SelectView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "Gender",
            helperText: "SelectView helper",
        },
        dataFetching: {
            type: FetchingDataEnum.MANUAL,
            loading: false,
            error: false,
            onRetry: () => {},
            data: {
                one: {
                    label: "Male",
                },
                two: {
                    label: "Female",
                },
            },
        },
    },
    TextView_5_0: {
        type: ViewTypes.TextView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "Email",
        },
    },
    DatePicker_6_0: {
        type: ViewTypes.DatePickerView,
        layoutProps: {
            sm: 12,
            xs: 12,
        },
        inputProps: {
            label: "Birth Date",
            helperText: "helper text",
        },
    },
}

export const Step3 = () => {
    const formRef = useFormaliteRef()
    return <div>
        <Stack spacing={2}>
            <Typography>
                3. Fill out this form
            </Typography>
            <Box>
                <Formalite formString={formString} onSubmit={()=>{}} validationSchema={builderForm} initialValues={ini} formRef={formRef}/>
            </Box>

        </Stack>
    </div>
}