// src/app/page.js
import React from "react";
import UserTable from "@/components/Usertable";

export default function UsersList() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <UserTable />
    </main>
  );
}
