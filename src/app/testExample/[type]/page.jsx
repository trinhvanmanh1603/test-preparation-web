'use client';

import { usePathname } from "next/navigation";
import { fetchTestSampleByType } from "@/queries/testSampleQueries";  
import React, { useState, useEffect } from "react";
import ImageTab from "@/app/components/ImageTab";
import { Pagination } from 'antd';

const MathPage = () => {
  const pathname = usePathname();
  const type = pathname.split("/").pop();

  const [testSample, setTestSample] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestSampleByType(type);
      if (data && data[0]?.data) {
        setTestSample(data[0].data);
      }
    };

    fetchData();
  }, [type]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = testSample.length > 0 ? testSample[currentPage - 1] : null;

  return (
    <div>
      <h1>Math Example Test</h1>
      {currentData ? (
        <ImageTab data={currentData} />
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}

      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={testSample.length}
        pageSize={1}
        showSizeChanger={false}
        align="end" 
      />
    </div>
  );
};

export default MathPage;
