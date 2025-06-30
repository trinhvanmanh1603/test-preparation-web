'use client';

import React, { useState } from 'react';
import { Button, message, Steps, theme, Collapse } from 'antd';
import DetailQuestion from './detailQuestion';

const StepComponent = ({ questions }) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onChange = (e) => {
        setAnswers({
            ...answers,
            [questions[current]?.id]: e.target.value,
        });
    };

    const checkAnswers = () => {
        let correctCount = 0;

        questions.forEach((q) => {
            const userAnswerIndex = answers[q.id];
            if (userAnswerIndex === q.answer) {
                correctCount++;
            }
        });

        setScore(correctCount);
        setShowResult(true);
        message.success('Bạn đã hoàn thành!');
    };

    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);

    const contentStyle = {
        padding: 24,
        color: token.colorText,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <Steps
                current={current}
                items={questions.map((q) => ({ key: String(q.id) }))}
            />

            <div style={contentStyle}>
                <DetailQuestion
                    question={questions[current]}
                    value={answers[questions[current]?.id] ?? null}
                    onChange={onChange}
                    disabled={showResult}
                />
            </div>

            <div style={{ marginTop: 24 }}>
                {current < questions.length - 1 && (
                    <Button type="primary" onClick={next}>
                        Next
                    </Button>
                )}
                {current === questions.length - 1 && !showResult && (
                    <Button type="primary" onClick={checkAnswers}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={prev}>
                        Previous
                    </Button>
                )}
            </div>

            {showResult && (
                <Collapse
                    defaultActiveKey={['1']}
                    style={{ marginTop: 24 }}
                    items={[
                        {
                            key: '1',
                            label: 'Kết quả',
                            children: (
                                <p>
                                    Bạn đã trả lời đúng <strong>{score}</strong> trên{' '}
                                    <strong>{questions.length}</strong> câu hỏi.
                                </p>
                            ),
                        },
                    ]}
                />
            )}
        </>
    );
};

export default StepComponent;
