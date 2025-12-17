import Layout from "./layout/home";
import Page from "@/pages/page";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Layout>
        <Page />
      </Layout>
      <SpeedInsights />
    </>
  );
}

export default App;
