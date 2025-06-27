'use client';

import React from 'react';
import { Radio } from 'antd';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const DetailQuestion = ({ question, value, onChange, disabled }) => {
  if (!question) return <div>Loading...</div>;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>{`Câu hỏi ${question.id}: ${question.question}`}</h3>

      <Radio.Group
        style={style}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {question.options.map((option, index) => (
          <Radio key={index} value={index}>
            {option}
          </Radio>
        ))}
      </Radio.Group>

      {disabled && (
        <div style={{ marginTop: 8 }}>
          {value === question.answer ? (
            <span style={{ color: 'green' }}>Đúng</span>
          ) : (
            <span style={{ color: 'red' }}>
              Sai – Đáp án đúng: <strong>{question.options[question.answer]}</strong>
            </span>
          )}

          {question.explanation && (
            <div style={{ marginTop: 4, fontStyle: 'italic', color: '#888' }}>
              {question.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailQuestion;
