'use client';

import React, { useState } from 'react';
import { Button, Steps, theme } from 'antd';
import CustomImage from './Image';

const ImageTab = ({ data }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  const contentStyle = {
    padding: '2rem',
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
        items={data.link.map((_, index) => ({
          key: String(index + 1),
          title: `Trang ${index + 1}`,
        }))}
      />

      <div style={contentStyle}>
        <CustomImage
          src={data.link[current]}
          alt={data.alt?.[current] || `Trang ${current + 1}`}
        />
      </div>

      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button onClick={prev} style={{ marginRight: 8 }}>
            Previous
          </Button>
        )}
        {current < data.link.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default ImageTab;
