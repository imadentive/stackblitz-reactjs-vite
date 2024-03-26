import { Link } from "react-router-dom";
// import { Button } from 'antd';
import { Button } from "antd-mobile";
import { Tag, Space } from 'antd-mobile'
function Profile() {
  return <div>Profile</div>;
}
function Gallery() {
  return (
    <>
      <section>
        <h1>了不起的科学家们</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <Link to="about">About Us</Link>
      <br />
      <Button size="mini" color="primary">
        Mini
      </Button>
      <Space>
          <Tag color='primary' fill='outline'>
            Primary
          </Tag>
          <Tag color='#87d068' fill='outline'>
            #87d068
          </Tag>
          <Tag color='#ff6430' fill='outline'>
            #ff6430
          </Tag>
        </Space>
    </>
  );
}

export default function App() {
  return <Gallery />;
}
