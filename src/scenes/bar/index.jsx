import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Topbar from "./../../scenes/global/Topbar";
import Sidebar from "./../../scenes/global/Sidebar";

const Bar = () => {
  return (
    <div className="app">
      {<Sidebar />}
      <main className="content">
        {<Topbar />}
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
    </main>
    </div>
  );
};

export default Bar;
