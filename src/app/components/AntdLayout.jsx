'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb, Layout, theme } from 'antd';
import CustomHeader from './Header';
import CustomFooter from './Footer';
import CustomMenu from './Menu';

const { Content, Sider } = Layout;

const AntdLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const pathname = usePathname();
  const getBreadcrumbItems = (path) => {
    const items = [{ title: 'Home', href: '/' }];
    if (path === '/mathQuestion') {
      items.push({ title: 'Math Question' });
    } else if (path === '/integrated-reasoning') {
      items.push({ title: 'Integrated Reasoning' });
    }
    
    return items;
  };


  return (
    <Layout>
      <CustomHeader />      <div style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={getBreadcrumbItems(pathname)}
        />
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <CustomMenu />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>
      </div>
      <CustomFooter />
    </Layout>
  );
};
export default AntdLayout;