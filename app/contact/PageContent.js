"use client";

import { AccessTime, Email, LocationPin, Phone } from "@mui/icons-material";
import { Container, Grid, IconButton, Snackbar, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/contact-form";
import { forwardRef, useState } from "react";
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import ReCAPTCHA from "react-google-recaptcha";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PageContent() {
    const [isLoading, setLoading] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
    const [failureMessage, setFailureMessage] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);

    const contactSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email("Email must be a valid email address"),
        phone: Yup.string().required("Phone number is required"),
        city: Yup.string(),
        message: Yup.string().required("Message is required")
    });

    const defaultValues = {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    }

    const methods = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        if (!captchaToken) {
            setOpenFailure(true);
            setFailureMessage("Please verify that you are not a robot and try again.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    captchaToken,
                }),
            });

            if (response.ok) {
                setOpenSuccess(true);
            }
            else {
                setOpenFailure(true);
                setFailureMessage("Failed to send query at the moment. Try again after sometime.")
            }
        }
        catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
            setOpenFailure(true);
            setFailureMessage("Failed to send query at the moment. Try again after sometime.")
        }
        finally {
            reset();
            setCaptchaToken(null);
            setFailureMessage("");
            setLoading(false);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        setOpenFailure(false);
    };

    return (
        <Container>

            <Snackbar open={openSuccess}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Query sent successfully
                </Alert>
            </Snackbar>

            <Snackbar open={openFailure}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    {failureMessage}
                </Alert>
            </Snackbar>

            {/* Contact Grid */}
            <Grid
                container
                spacing={4}
                py={5}
                textAlign="center"
                alignItems="stretch"
            >
                <Grid size={{ xs: 12, sm: 6, md: 6 }} display="flex">
                    <Stack
                        spacing={2}
                        p={3}
                        alignItems="center"
                        sx={{
                            borderRadius: 3,
                            flexGrow: 1,
                            justifyContent: "space-between",
                            boxShadow: "rgb(0 0 0 / 10%) 0px 3px 8px",
                            transition: "all 0.3s ease",
                            backgroundColor: "#fff",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "rgb(0 0 0 / 20%) 0px 6px 12px",
                            },
                        }}
                    >
                        <IconButton
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                color: "#fff",
                                backgroundColor: "#E64A19",
                                "&:hover": { backgroundColor: "#E64A19" },
                            }}
                        >
                            <LocationPin fontSize="medium" />
                        </IconButton>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Corporate Office
                        </Typography>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <Link target="_blank" href="https://maps.app.goo.gl/nd6LxA7mMFaggy3p9">
                                <Typography variant="body1">Plot No 193, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140306</Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }} display="flex">
                    <Stack
                        spacing={2}
                        p={3}
                        alignItems="center"
                        sx={{
                            borderRadius: 3,
                            flexGrow: 1,
                            justifyContent: "space-between",
                            boxShadow: "rgb(0 0 0 / 10%) 0px 3px 8px",
                            transition: "all 0.3s ease",
                            backgroundColor: "#fff",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "rgb(0 0 0 / 20%) 0px 6px 12px",
                            },
                        }}
                    >
                        <IconButton
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                color: "#fff",
                                backgroundColor: "#E64A19",
                                "&:hover": { backgroundColor: "#E64A19" },
                            }}
                        >
                            <LocationPin fontSize="medium" />
                        </IconButton>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Manufacturing Plant
                        </Typography>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <Link target="_blank" href="https://maps.app.goo.gl/7F7H5bZTmywnbAvZ6">
                                <Typography variant="body1">Plot No. C-15, Industrial Focal Point, Chanalon, Kurali, SAS Nagar, Punjab, 140103</Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Toolbar />

            {/* Contact Form */}

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} alignItems={"start"}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Stack spacing={2} mb={4}>
                            {!!errors.afterSubmit && (
                                <Alert severity="error">{errors.afterSubmit.message}</Alert>
                            )}

                            <Typography variant="h4">
                                Get in Touch
                            </Typography>

                            <RHFTextField
                                name="name"
                                label="Your name"
                            />
                            <RHFTextField
                                name="email"
                                label="Email address"
                            />
                            <RHFTextField
                                name="phone"
                                label="Phone number"
                            />
                            <RHFTextField
                                name="city"
                                label="City"
                            />
                            <RHFTextField
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                            />

                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                            />

                            <Button
                                type="submit"
                                variant="outlined"
                                size="large"
                                loading={isLoading}
                                sx={{
                                    borderColor: "#1F6A36",
                                    backgroundColor: "#1F6A36",
                                    color: "#fff",
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 600,
                                    px: 3, // adds horizontal padding
                                    alignSelf: "flex-start", // prevents full width if inside flex/stack
                                    width: "auto", // makes width fit the content
                                    "&:hover": {
                                        backgroundColor: "#319950ff",
                                        color: "#fff",
                                    },
                                }}
                            >
                                Send Query
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.196480749173!2d76.72753!3d30.6565953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9abcf4c984b%3A0xf26902378d627be7!2sZoic%20Biotech%20-%20Best%20Softgels%20Gummies%20Manufacturer%7C%20Top%20Nutraceuticals%20%26%20Health%20Food%20Supplements%20Manufacturing!5e0!3m2!1sen!2sin!4v1772085270388!5m2!1sen!2sin" width="100%" height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                </Grid>
            </FormProvider>
        </Container>
    );
}
