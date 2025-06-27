import { Header } from "antd/es/layout/layout";

const CustomHeader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white', fontSize: '24px', marginRight: '20px' }}>
        MyApp
      </div>
    </Header>
  );
}
export default CustomHeader;