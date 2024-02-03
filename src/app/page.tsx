import Login from "./components/Login";
import Navbar from "../components/common/Navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full flex justify-center h-screen ">
        <Login />
      </div>
    </main>
  );
}
