import { Table } from "@/src/shared/ui/Table";

export const ReferalsActivityTable = () => {
  return (
    <div className="flex flex-col gap-2.5 z-10">
      <p className="font-inter fon-bold text-white-2 text-2xl">
        Referrals Activity
      </p>
      <Table
        columns={[
          {
            key: "wallet",
            title: "Email/Wallet",
          },
          {
            key: "data",
            title: "Data Joined",
          },
          {
            key: "type",
            title: "Type",
          },
          {
            key: "points",
            title: "Points Earned",
          },
          {
            key: "USDC Earned",
            title: "USDC Earned",
          },
        ]}
        data={[]}
      />
    </div>
  );
};
