'use client';

import React from 'react';
import HomePage from '../components/HomePage';
import { useMenuData } from '@/hooks/useMenuData';

export default function TestExampleHome() {
  const { getMenuChildren, addDescriptions } = useMenuData();
  
  // Get Test Example menu items
  const testExampleItems = getMenuChildren('2');
  
  // Add custom descriptions
  const itemsWithDescriptions = addDescriptions(testExampleItems, {
    'Home': 'Trang chủ ví dụ đề thi',
    'Math': 'Xem ví dụ đề thi Toán học',
    'Literature': 'Xem ví dụ đề thi Ngữ văn', 
    'Chemistry': 'Xem ví dụ đề thi Hóa học',
    'Physics': 'Xem ví dụ đề thi Vật lý'
  });

  return (
    <HomePage
      title="Ví dụ đề thi THPT"
      subtitle="Xem các mẫu đề thi tốt nghiệp THPT"
      menuItems={itemsWithDescriptions}
      showIcons={true}
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
    />
  );
}
