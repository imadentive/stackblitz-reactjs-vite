import { Link } from "react-router-dom";
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
    </>
  );
}

export default function App() {
  return <Gallery />;
}
