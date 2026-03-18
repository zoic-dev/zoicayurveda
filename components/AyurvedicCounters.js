"use client";

import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const statsData = [
    { label: "Ayurvedic Products", value: 450 },
    { label: "Franchise Partners", value: 5000 },
    { label: "Years of Expertise", value: 35 },
    { label: "Formulations", value: 300 },
];

export default function StatsSection() {
    const [stats, setStats] = useState(
        statsData.map(() => 0) // all counters start at 0
    );

    useEffect(() => {
        const duration = 2000; // 2 seconds (same finish time for all)
        const frameRate = 1000 / 60; // ~60fps
        const totalFrames = duration / frameRate;

        let frame = 0;

        const interval = setInterval(() => {
            frame++;

            setStats(
                statsData.map((item) =>
                    Math.min(Math.round((item.value / totalFrames) * frame), item.value)
                )
            );

            if (frame >= totalFrames) clearInterval(interval);
        }, frameRate);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {stats.map((display, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 3, md: 3 }}>
                        <Box textAlign="center">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: "#1F6A36",
                                }}
                            >
                                {display}
                                <Box component="span" sx={{ fontSize: "1.5rem", ml: 0.6 }}>
                                    +
                                </Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 1,
                                    fontWeight: 500,
                                    color: "#333",
                                }}
                            >
                                {statsData[index].label}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
