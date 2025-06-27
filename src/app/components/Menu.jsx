'use client';

import { Menu } from 'antd';
import { useRouter } from 'next/navigation';
import { menuData } from '@/store/menuStore';


const convertMenuDataToAntdItems = (menuData, router) =>
  menuData.map((menu) => ({
    key: menu.id,
    icon: null,
    label: menu.title,
    children: menu.children?.map((child) => ({
      key: child.id,
      label: child.title,
      icon: null,
      onClick: () => router.push(child.Link),
    })),
}));

  
const CustomMenu = () => {
  const router = useRouter();
  const items = convertMenuDataToAntdItems(menuData, router);

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
}
export default CustomMenu;
