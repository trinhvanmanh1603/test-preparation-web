'use client';

import React from 'react';
import HomePage from './components/HomePage';
import { useMenuData } from '@/hooks/useMenuData';

export default function Home() {
  const { getMenuChildren, addDescriptions } = useMenuData();
  
  const quickTestItems = getMenuChildren('1');
  
  const itemsWithDescriptions = addDescriptions(quickTestItems, {
    'Home': 'Trang chủ tổng quan',
    'Math': 'Luyện tập câu hỏi Toán học',
    'Literature': 'Luyện tập câu hỏi Ngữ văn',
    'Chemistry': 'Luyện tập câu hỏi Hóa học',
    'Physics': 'Luyện tập câu hỏi Vật lý'
  });

  return (
    <HomePage
      title="Ôn thi tốt nghiệp THPT"
      subtitle="Chọn môn học để bắt đầu luyện tập"
      menuItems={itemsWithDescriptions}
      showIcons={true}
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
    />
  );
}
