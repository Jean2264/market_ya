import "./Home.css";
import HomeSections from "../../components/home/HomeSections";
import NavBar from "../../components/common/NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar />

      <div className="home-container">
        <HomeSections />
      </div>
    </div>
  );
}
export default Home;
