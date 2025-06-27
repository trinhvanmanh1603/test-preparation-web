'use client';

import { usePathname } from "next/navigation";
import { fetchTestSampleByType } from "@/queries/testSampleQueries";  
import React, { useState, useEffect } from "react";
import ImageTab from "@/app/components/ImageTab";

const MathPage = () => {
  const pathname = usePathname();
  const type = pathname.split("/").pop();

  const [testSample, setTestSample] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestSampleByType(type);
      setTestSample(data);
    };

    fetchData();
  }, [type]);

  return (
    <div>
      <h1>Math Example Test</h1>
      {testSample && testSample.length > 0 ? (
        <ImageTab data={testSample[0].data[0]} />
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
};

export default MathPage;
