import { Box } from "@chakra-ui/react";
import StateCard from "../../../components/Dashboard/stateCard";
import PieChart from "../../../components/Dashboard/PieChart";
import BarChart from "../../../components/Dashboard/BarChart";

function DepartmentDashboard() {
  return (
    <Box w="full">
        <StateCard />
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full">
               <BarChart/>
                <PieChart/>
            </div>
        
    </Box>
  )
}

export default DepartmentDashboard;