import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Topbar from "../../components/global/Topbar";
import Sidebar from "../../components/global/Sidebar";

const Pie = () => {
  return (
    <div className="app">
      {<Sidebar />}
      <main className="content">
        {<Topbar />}
        <Box m="20px">
          <Header title="Pie Chart" subtitle="Simple Pie Chart" />
          <Box height="75vh">
            <PieChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Pie;
