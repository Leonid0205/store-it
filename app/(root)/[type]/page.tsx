import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const files = await getFiles();
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h-5">0 MB</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>
      {files.length > 0 ? (
        <section></section>
      ) : (
        <p className="empty-list">No files upload</p>
      )}
    </div>
  );
};

export default Page;
