"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import axios from "axios"

const chartConfig = {
    desktop: {
        label: "Value",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Balance() {
    const [chartData, setChartData] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/balance").then((res) => {
            console.log(res);
            setChartData(res.data);
        })
    }, [])

    return (

        <ChartContainer config={chartConfig} className="w-screen max-h-screen pt-20 px-5">
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={true} />
                <XAxis
                    dataKey="day"
                    tickLine={true}
                    axisLine={true}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 10)}
                    angle={-45}
                    textAnchor="end"
                    height={100}
                />
                <YAxis
                    // tickLine={true}
                    // axisLine={true}
                    tickMargin={8}
                    type="number"
                    domain={[0, 'dataMax + 200000']}
                    tickCount={20}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="value"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                />
            </LineChart>
        </ChartContainer>
    )
}
