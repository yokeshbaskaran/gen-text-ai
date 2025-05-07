import { columns } from "@/utlis/Columns";
import { db } from "@/utlis/db";
import { AIOutput } from "@/utlis/schema";
import { DataTable } from "../_components/DataTable";

const History = async () => {
  const allPosts = await db.select().from(AIOutput);
  console.log("allPosts", allPosts);

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">All Posts</h1>
        <DataTable columns={columns} data={allPosts} />
      </div>
    </>
  );
};

export default History;
