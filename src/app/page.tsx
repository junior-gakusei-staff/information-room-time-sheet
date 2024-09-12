import { HomeProps } from "@/types/types";
import type { Metadata } from "next";
import { getProcessedRequestData } from "@/utils/request";
import { getData } from "@/utils/actions";
export const metadata: Metadata = {
  title: "情報処理教室時間割表",
};
const Home: React.FC<HomeProps> = async () => {
  const data = await getProcessedRequestData();
  const test = await getData()
  console.log(test)
  // console.log(data);
  return <main></main>;
};

export default Home;
