'use client';

import React from 'react';
import Link from 'next/link';
import { Card, Row, Col, Typography, Space } from 'antd';
import {
    HomeOutlined,
    EditOutlined,
    BarChartOutlined,
    ExperimentOutlined,
    CalculatorOutlined
} from '@ant-design/icons';
import styles from '../../styles/index.scss';

const { Title, Paragraph } = Typography;

// Icon mapping
const iconMap = {
    home: HomeOutlined,
    dashboard: HomeOutlined,
    edit: EditOutlined,
    chart: BarChartOutlined,
    science: ExperimentOutlined,
    calculator: CalculatorOutlined,
};

const HomePage = ({
    title = "Trang chủ",
    subtitle = "Chọn một chủ đề để bắt đầu",
    menuItems = [],
    cardStyle = {},
    showIcons = true,
    columns = { xs: 1, sm: 2, md: 3, lg: 4 }
}) => {
    const getIcon = (iconName) => {
        const IconComponent = iconMap[iconName] || HomeOutlined;
        return <IconComponent style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1890ff' }} />;
    };

    return (
        <div className="container">
            <div className="header">
                <Title level={1} className="title">
                    {title}
                </Title>
                <Paragraph className="subtitle">
                    {subtitle}
                </Paragraph>
            </div>

            <div className="content">
                <Row gutter={[24, 24]} justify="center">
                    {menuItems.map((item) => (
                        <Col key={item.id} {...columns}>
                            <Link href={item.Link} className={styles.cardLink}>
                                <Card
                                    hoverable
                                    className={styles.card}
                                    style={cardStyle}
                                    styles={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        height: '200px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Space direction="vertical" size="middle" align="center">
                                        {showIcons && getIcon(item.icon)}
                                        <Title level={3} style={{ margin: 0, color: '#1f1f1f' }}>
                                            {item.title}
                                        </Title>
                                        <Paragraph
                                            style={{
                                                margin: 0,
                                                color: '#666',
                                                textAlign: 'center',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {item.description || `Truy cập ${item.title.toLowerCase()}`}
                                        </Paragraph>
                                    </Space>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default HomePage;
