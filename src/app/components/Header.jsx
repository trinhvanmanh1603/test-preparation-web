import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const CustomHeader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link className="logo" style={{ color: 'white', fontSize: '24px', marginRight: '20px' }} href="/">
        MyApp
      </Link>
    </Header>
  );
}
export default CustomHeader;