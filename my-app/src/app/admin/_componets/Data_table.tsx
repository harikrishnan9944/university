"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Pencil, Plus, Download } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function Data_table() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/admin");
      setData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (email: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/admin?email=${email}`);
      setData((prev) => prev.filter((item) => item.email !== email));
      alert("Record deleted successfully ");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed ");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const filteredData = data.filter((item) =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Download function
  const handleDownload = () => {
    const exportData = filteredData.map((item) => ({
      Name: `${item.firstName} ${item.lastName}`,
      Email: item.email,
      Contact: item.contact,
      College: item.college,
      Year: item.year,
      "Date & Time": item.createdAt ? formatDateTime(item.createdAt) : "—",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const dataBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(dataBlob, "Registered_Students.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Registered Students
          </h2>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              className="bg-blue-500 py-1 px-2 rounded text-white cursor-pointer"
              onClick={fetchData}
            >
              Refresh
            </button>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <Download size={18} />
              Download
            </button>

            <Link
              href="/admin/adduser"
              className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Plus size={18} />
              Add User
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 sm:p-3 text-left">Name</th>
                <th className="p-2 sm:p-3 text-left">Email</th>
                <th className="p-2 sm:p-3 text-left">Contact</th>
                <th className="p-2 sm:p-3 text-left">College</th>
                <th className="p-2 sm:p-3 text-left">Year</th>
                <th className="p-2 sm:p-3 text-left">Date & Time</th>
                <th className="p-2 sm:p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-2 sm:p-3">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="p-2 sm:p-3 break-words">{item.email}</td>
                    <td className="p-2 sm:p-3">{item.contact}</td>
                    <td className="p-2 sm:p-3">{item.college}</td>
                    <td className="p-2 sm:p-3">{item.year}</td>
                    <td className="p-2 sm:p-3 text-gray-600">
                      {item.createdAt ? formatDateTime(item.createdAt) : "—"}
                    </td>
                    <td className="p-2 sm:p-3 flex flex-col sm:flex-row gap-2">
                      <Link
                        href={`/admin/${item._id}`}
                        className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                      >
                        <Pencil size={14} />
                        Update
                      </Link>

                      <button
                        onClick={() => handleDelete(item.email)}
                        className="flex items-center gap-1 px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-3 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Data_table;
