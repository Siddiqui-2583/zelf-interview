"use client";

import React from "react";
import { useQuery } from "react-query";
import DataTable from "./DataTable";

const dummyData = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

const fetchData = async (page: number) => {
  const response = await fetch(
    `https://44c1-202-84-41-238.ngrok-free.app/api/contents?page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PaginationComponent = () => {
  const { data, isLoading, isError } = useQuery("contents", () => fetchData(1));

  if (isLoading) {
    return (
      <div className="loadingio-eclipse mx-auto">
        <div className="ldio-rpinwye8j0b">
          <div></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log("dashboard", data);
  return (
    <div>
      <DataTable data={data?.data} />

      {/* Pagination controls */}
      <button
      className=""
        onClick={() => {
          // Fetch the next page when the button is clicked
          fetchData(data?.page + 1);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default PaginationComponent;
