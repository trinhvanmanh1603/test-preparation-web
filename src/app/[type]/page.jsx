'use client';

import { useParams } from "next/navigation";
import { QuickTestQueries } from "@/queries/quickTestQueries";
import React, { useEffect, useState } from "react";
import StepComponent from "../components/Steps";


const QuickTestPage = () => {
    const { type } = useParams();
    const [quickTestSample, setQuickTestSample] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await QuickTestQueries(type);
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 10);
            setQuickTestSample(selected);
        };
        fetchData();
    }, [type]);

    return (
        <StepComponent questions={quickTestSample} />
    );
}
export default QuickTestPage;