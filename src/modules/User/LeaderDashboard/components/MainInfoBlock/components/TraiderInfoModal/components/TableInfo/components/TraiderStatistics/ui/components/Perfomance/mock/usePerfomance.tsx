import { TokenDistribution } from "@/src/modules/User/LeaderDashboard/components/MainInfoBlock/api/query/getLeaderBoard";

export const usePerfomance = ({
  performanceBreakdown,
}: {
  performanceBreakdown: TokenDistribution;
}) => {
  const defaultPerformanceBreakdown = [
    { range: ">500%", count: performanceBreakdown[">500"], color: "#1D4237" },
    {
      range: "0%~500%",
      count: performanceBreakdown["0-500"],
      color: "#3A7A6B",
    },
    { range: ">-50%", count: performanceBreakdown[">-50"], color: "#28A27C" },
    { range: "<-50%", count: performanceBreakdown["<-50"], color: "#F23B79" },
  ];

  return { defaultPerformanceBreakdown };
};

/* 
import { TokenDistribution } from "@/src/modules/User/LeaderDashboard/components/MainInfoBlock/api/query/getLeaderBoard";

export const usePerfomance = ({
  performanceBreakdown,
}: {
  performanceBreakdown: TokenDistribution;
}) => {
  const defaultPerformanceBreakdown = [
    { range: ">500", count: performanceBreakdown[">500"], color: "#1D4237" },
    {
      range: "0%~500%",
      count: performanceBreakdown["0-500"],
      color: "#1D4C3F",
    },
    { range: ">-50%", count: performanceBreakdown[">-50"], color: "#28A27C" },
    { range: "-50%", count: performanceBreakdown["<-50"], color: "#F23B79" },
    { range: "<-50%", count: performanceBreakdown["<-50"], color: "#512135" },
  ];

  return { defaultPerformanceBreakdown };
};
*/
