import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
<Sidebar />
    </main>
  );
}
