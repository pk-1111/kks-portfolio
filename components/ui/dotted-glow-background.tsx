"use client";

import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils"; <-- ဒီလိုင်းကို ဖြုတ်ပစ်လိုက်ပါ

interface DottedGlowProps {
    className?: string;
    opacity?: number;
    gap?: number;
    radius?: number;
    colorLightVar?: string;
    glowColorLightVar?: string;
    colorDarkVar?: string;
    glowColorDarkVar?: string;
    backgroundOpacity?: number;
    speedMin?: number;
    speedMax?: number;
    speedScale?: number;
}

export default function DottedGlowBackground({
    className,
    opacity = 1,
    gap = 12,
    radius = 1.5,
    colorDarkVar = "--color-neutral-500",
    glowColorDarkVar = "--color-neutral-800",
    speedMin = 0.3,
    speedMax = 1.5,
}: DottedGlowProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let dots: { x: number; y: number; alpha: number; speed: number; growing: boolean }[] = [];

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots = [];
            const cols = Math.floor(canvas.width / gap);
            const rows = Math.floor(canvas.height / gap);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * gap + gap / 2,
                        y: j * gap + gap / 2,
                        alpha: Math.random(),
                        speed: Math.random() * (speedMax - speedMin) + speedMin,
                        growing: Math.random() > 0.5,
                    });
                }
            }
        };

        const draw = () => {
            // ၁။ တက်နေတဲ့ Frame အဟောင်းတွေကို အရင်ရှင်းထုတ်တယ်
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ၂။ နောက်ခံကို အနက်ရောင် (Black) ဖြင့် တိုက်ရိုက်ဆွဲထည့်ခြင်း
            ctx.fillStyle = "#000000"; // သို့မဟုတ် မိမိကြိုက်နှစ်သက်ရာ Dark Hex Code
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const dotColor = getComputedStyle(document.documentElement).getPropertyValue(colorDarkVar).trim() || "#666";
            const glowColor = getComputedStyle(document.documentElement).getPropertyValue(glowColorDarkVar).trim() || "#0284c7";

            dots.forEach((dot) => {
                if (dot.growing) {
                    dot.alpha += dot.speed * 0.01;
                    if (dot.alpha >= 1) dot.growing = false;
                } else {
                    dot.alpha -= dot.speed * 0.01;
                    if (dot.alpha <= 0.2) dot.growing = true;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);

                if (dot.alpha > 0.7) {
                    ctx.fillStyle = glowColor;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = glowColor;
                } else {
                    ctx.fillStyle = dotColor;
                    ctx.shadowBlur = 0;
                }

                ctx.globalAlpha = dot.alpha * opacity;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [gap, radius, colorDarkVar, glowColorDarkVar, opacity, speedMax, speedMin]);

    return (
        <canvas
            ref={canvasRef}
            /* cn(...) နေရာတွင် သာမန် Template Literal စာသားဖြင့် အစားထိုးလိုက်ခြင်း ဖြစ်သည် */
            className={`absolute inset-0 h-full w-full pointer-events-none ${className || ""}`}
        />
    );
}