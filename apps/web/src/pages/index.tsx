import dynamic from "next/dynamic";
/**
 * Use dynamic import for components using react-konva
 * @see https://zenn.dev/aldagram_tech/articles/7edc7f192fe861
 */
const Home = dynamic(() => import("../features/Home"), { ssr: false });

export default function Web() {
  return <Home />;
}
