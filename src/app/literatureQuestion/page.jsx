'use client';

import StepComponent from "../components/Steps";
import { getAllQuestions } from '@/queries/literatureDbQueries';
import { useEffect, useState } from 'react';
const LiteratureQuestion = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getAllQuestions();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    return (
        <StepComponent questions={questions} />
    );
};

export default LiteratureQuestion;
