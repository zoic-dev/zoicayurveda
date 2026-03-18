"use client";

import { useState } from "react";
import { Box, Typography, Container, Button, Card, Grid, LinearProgress } from "@mui/material";

const quizQuestions = [
    {
        question: "Your body frame is generally:",
        options: [
            { text: "Thin and light", value: "Vata" },
            { text: "Medium and muscular", value: "Pitta" },
            { text: "Sturdy and solid", value: "Kapha" }
        ]
    },
    {
        question: "Your skin is usually:",
        options: [
            { text: "Dry or rough", value: "Vata" },
            { text: "Warm and slightly oily", value: "Pitta" },
            { text: "Soft, smooth, and oily", value: "Kapha" }
        ]
    },
    {
        question: "Your energy levels are:",
        options: [
            { text: "Variable and inconsistent", value: "Vata" },
            { text: "Strong with bursts of energy", value: "Pitta" },
            { text: "Steady but slower", value: "Kapha" }
        ]
    },
    {
        question: "You handle stress by:",
        options: [
            { text: "Becoming anxious or restless", value: "Vata" },
            { text: "Getting irritated or frustrated", value: "Pitta" },
            { text: "Feeling lethargic or withdrawing", value: "Kapha" }
        ]
    },
    {
        question: "Your digestion is usually:",
        options: [
            { text: "Irregular or weak", value: "Vata" },
            { text: "Strong and quick", value: "Pitta" },
            { text: "Slow and steady", value: "Kapha" }
        ]
    },
    {
        question: "Your sleep pattern is generally:",
        options: [
            { text: "Light and irregular", value: "Vata" },
            { text: "Moderate but can be disturbed by heat", value: "Pitta" },
            { text: "Deep and long", value: "Kapha" }
        ]
    },
    {
        question: "Your mood is usually:",
        options: [
            { text: "Restless, creative, excitable", value: "Vata" },
            { text: "Determined, ambitious, sometimes irritable", value: "Pitta" },
            { text: "Calm, patient, sometimes sluggish", value: "Kapha" }
        ]
    },
    {
        question: "Your appetite is generally:",
        options: [
            { text: "Variable, sometimes low", value: "Vata" },
            { text: "Strong and consistent", value: "Pitta" },
            { text: "Slow, tends to overeat occasionally", value: "Kapha" }
        ]
    },
    {
        question: "You prefer weather that is:",
        options: [
            { text: "Warm and moist", value: "Vata" },
            { text: "Cool and dry", value: "Pitta" },
            { text: "Warm and dry", value: "Kapha" }
        ]
    },
    {
        question: "Your response to new tasks is:",
        options: [
            { text: "Excited but inconsistent", value: "Vata" },
            { text: "Focused and goal-oriented", value: "Pitta" },
            { text: "Steady but slow to start", value: "Kapha" }
        ]
    },
    {
        question: "Your hair is usually:",
        options: [
            { text: "Dry, frizzy, or thin", value: "Vata" },
            { text: "Oily or prone to premature greying", value: "Pitta" },
            { text: "Thick, lustrous, and slow-growing", value: "Kapha" }
        ]
    },
    {
        question: "You feel energized by:",
        options: [
            { text: "Movement, activity, and variety", value: "Vata" },
            { text: "Challenges, competition, and learning", value: "Pitta" },
            { text: "Rest, stability, and comfort", value: "Kapha" }
        ]
    }
];

export default function KnowYourDoshaPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setAnswers([]);
        setResult(null);
    };

    const handleAnswerSelect = (value) => {
        const updatedAnswers = [...answers, value];
        setAnswers(updatedAnswers);

        if (currentQuestion + 1 < quizQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult(updatedAnswers);
        }
    };

    const calculateResult = (allAnswers) => {
        const count = { Vata: 0, Pitta: 0, Kapha: 0 };
        allAnswers.forEach(ans => count[ans] += 1);
        const highestDosha = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
        setResult(highestDosha);
    };

    const handleRestart = () => {
        setQuizStarted(false);
        setCurrentQuestion(0);
        setAnswers([]);
        setResult(null);
    };

    return (
        <Box sx={{ py: 10, backgroundColor: "#F3FFF8" }}>
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: "#1F6A36", mb: 2 }}>
                    Know Your Dosha
                </Typography>
                <Typography sx={{ fontSize: 18, color: "#4A4A4A", mb: 6 }}>
                    Discover your mind-body type by taking this quick, interactive quiz.
                </Typography>

                {/* Start Screen */}
                {!quizStarted && !result && (
                    <Button
                        onClick={handleStartQuiz}
                        sx={{
                            px: 6,
                            py: 2,
                            fontSize: 18,
                            fontWeight: 600,
                            borderRadius: 3,
                            background: "linear-gradient(135deg, #1F6A36 0%, #60B04A 100%)",
                            color: "#fff",
                            "&:hover": { background: "linear-gradient(135deg, #60B04A 0%, #1F6A36 100%)" },
                            transition: "all 0.3s"
                        }}
                    >
                        Start Quiz
                    </Button>
                )}

                {/* Quiz Section */}
                {quizStarted && !result && (
                    <>
                        {/* Progress Bar */}
                        <LinearProgress
                            variant="determinate"
                            value={((currentQuestion) / quizQuestions.length) * 100}
                            sx={{
                                mb: 4,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: "#c4dfbcff",
                                "& .MuiLinearProgress-bar": { backgroundColor: "#1F6A36" }
                            }}
                        />

                        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 5, mb: 4, transition: "all 0.3s" }}>
                            <Typography variant="h5" sx={{ fontWeight: 600, color: "#1F6A36", mb: 3 }}>
                                {quizQuestions[currentQuestion].question}
                            </Typography>
                            <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                                {quizQuestions[currentQuestion].options.map((opt, idx) => (
                                    <Grid size={{ xs: 10 }} key={idx}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                py: 1.5,
                                                fontSize: 16,
                                                borderColor: "#1F6A36",
                                                color: "#1F6A36",
                                                fontWeight: 500,
                                                borderRadius: 2,
                                                "&:hover": { backgroundColor: "#1F6A36", color: "#fff", transform: "scale(1.02)" },
                                                transition: "all 0.2s"
                                            }}
                                            onClick={() => handleAnswerSelect(opt.value)}
                                        >
                                            {opt.text}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Card>
                    </>
                )}

                {/* Result Section */}
                {result && (
                    <Card
                        sx={{
                            p: 5,
                            borderRadius: 5,
                            boxShadow: 10,
                            textAlign: "center",
                            color: "#1F3F2F",
                            transition: "all 0.5s",
                            animation: "fadeIn 0.5s ease-in"
                        }}
                    >

                        {/* Dosha Title */}
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                            Your Primary Dosha: {result}
                        </Typography>

                        {/* Dosha Description */}
                        <Typography sx={{ fontSize: 18, mb: 4 }}>
                            {result === "Vata" && "Vata types are energetic, creative, and flexible. They thrive on routine and grounding practices."}
                            {result === "Pitta" && "Pitta types are strong, determined, and intelligent. They need to manage heat and maintain balance."}
                            {result === "Kapha" && "Kapha types are calm, steady, and nurturing. They benefit from stimulation and regular activity."}
                        </Typography>

                        {/* Lifestyle / Tips */}
                        <Box sx={{ textAlign: "left", mb: 4 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>Tips for You:</Typography>
                            <ul style={{ paddingLeft: 20, fontSize: 16 }}>
                                {result === "Vata" && <>
                                    <li>Eat warm, nourishing meals</li>
                                    <li>Follow a regular daily routine</li>
                                    <li>Practice grounding exercises like yoga or meditation</li>
                                </>}
                                {result === "Pitta" && <>
                                    <li>Stay cool and hydrated</li>
                                    <li>Practice calming activities</li>
                                    <li>Include bitter and sweet foods in your diet</li>
                                </>}
                                {result === "Kapha" && <>
                                    <li>Stay active with regular exercise</li>
                                    <li>Eat light and spicy meals</li>
                                    <li>Incorporate stimulating activities</li>
                                </>}
                            </ul>
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                            <Button
                                onClick={handleRestart}
                                sx={{
                                    px: 5,
                                    py: 1.5,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    background: "#1F6A36",
                                    color: "#fff",
                                    "&:hover": { background: "#14532D" },
                                }}
                            >
                                Retake Quiz
                            </Button>
                        </Box>
                    </Card>
                )}

            </Container>
        </Box>
    );
}
