import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

export default function Leads() {
  const [leads, setLeads] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    newLeads: 0,
    contacted: 0,
    closed: 0,
  });

  
  const [loading, setLoading] = useState(true);

 
  const [searchLoading, setSearchLoading] = useState(false);

  
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  
  const [status, setStatus] = useState("All");

  
  const fetchLeads = async (showLoader = false) => {
    try {
      if (showLoader) {
        setLoading(true);
      } else {
        setSearchLoading(true);
      }

      const query = new URLSearchParams();

      if (debouncedSearch.trim()) {
        query.append("search", debouncedSearch.trim());
      }

      if (status !== "All") {
        query.append("status", status);
      }

      const res = await api.get(`/leads?${query.toString()}`);

      setLeads(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      if (showLoader) {
        setLoading(false);
      }

      setSearchLoading(false);
    }
  };


  const fetchStats = async () => {
    try {
      const res = await api.get("/leads/stats");
      setStats(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleStatusChange = async (leadId, newStatus) => {
    try {
      await api.patch(`/leads/${leadId}`, {
        status: newStatus,
      });

      toast.success(`Lead marked as ${newStatus}`);

     
      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === leadId
            ? { ...lead, status: newStatus }
            : lead
        )
      );

      fetchStats();
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };

  const handleDelete = async (leadId) => {
    const confirmDelete = window.confirm(
      "Delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/leads/${leadId}`);

      toast.success("Lead deleted successfully");

      
      setLeads((prev) =>
        prev.filter((lead) => lead._id !== leadId)
      );

      fetchStats();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete lead");
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  
  useEffect(() => {
    fetchLeads(true);
    fetchStats();
  }, []);


  useEffect(() => {
    fetchLeads(false);
  }, [debouncedSearch, status]);


  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-lg font-medium">
            Loading leads...
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>
            <h1 className="text-4xl font-bold text-gray-900">
                Leads
            </h1>

            <p className="text-gray-500 mt-1">
                Manage all incoming leads
            </p>
            </div>

            <div className="w-full lg:w-80">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-lime-400"
            />
            </div>

        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap gap-3">
        <button
            onClick={() => setStatus("All")}
            className={`px-5 py-2 rounded-2xl text-sm font-medium ${
            status === "All"
                ? "bg-[#111827] text-white"
                : "bg-white border border-gray-200"
            }`}
        >
            All · {stats.total}
        </button>

        <button
            onClick={() => setStatus("New")}
            className={`px-5 py-2 rounded-2xl text-sm font-medium ${
            status === "New"
                ? "bg-[#111827] text-white"
                : "bg-white border border-gray-200"
            }`}
        >
            New · {stats.newLeads}
        </button>

        <button
            onClick={() => setStatus("Contacted")}
            className={`px-5 py-2 rounded-2xl text-sm font-medium ${
            status === "Contacted"
                ? "bg-[#111827] text-white"
                : "bg-white border border-gray-200"
            }`}
        >
            Contacted · {stats.contacted}
        </button>

        <button
            onClick={() => setStatus("Closed")}
            className={`px-5 py-2 rounded-2xl text-sm font-medium ${
            status === "Closed"
                ? "bg-[#111827] text-white"
                : "bg-white border border-gray-200"
            }`}
        >
            Closed · {stats.closed}
        </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-3xl border border-gray-200 overflow-hidden">
        <table className="w-full">

            <thead className="border-b border-gray-100">
            <tr className="text-xs uppercase tracking-wide text-gray-400">

                <th className="text-left px-6 py-5">
                Lead
                </th>

                <th className="text-left px-6 py-5">
                Budget
                </th>

                <th className="text-left px-6 py-5">
                Message
                </th>

                <th className="text-left px-6 py-5">
                Status
                </th>

                <th className="text-left px-6 py-5">
                Created
                </th>

                <th className="text-left px-6 py-5">
                Actions
                </th>

            </tr>
            </thead>

            <tbody>

            {leads.length === 0 ? (
                <tr>
                <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                >
                    No Leads Found
                </td>
                </tr>
            ) : (
                leads.map((lead) => (
                <tr
                    key={lead._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                >

                    <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                        <div className="h-11 w-11 rounded-full bg-lime-100 flex items-center justify-center font-semibold">
                        {lead.name
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                        </div>

                        <div>
                        <p className="font-semibold text-gray-900">
                            {lead.name}
                        </p>

                        <p className="text-sm text-gray-500">
                            {lead.email}
                        </p>
                        </div>

                    </div>
                    </td>

                    <td className="px-6 py-5 font-medium">
                    ₹{lead.budget}
                    </td>

                    <td className="px-6 py-5 max-w-xs truncate text-gray-600">
                    {lead.message}
                    </td>

                    <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                        <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                            lead.status === "New"
                            ? "bg-yellow-100 text-yellow-700"
                            : lead.status === "Contacted"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                        >
                        {lead.status}
                        </span>

                        <select
                        value={lead.status}
                        onChange={(e) =>
                            handleStatusChange(
                            lead._id,
                            e.target.value
                            )
                        }
                        className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"
                        >
                        <option value="New">
                            New
                        </option>

                        <option value="Contacted">
                            Contacted
                        </option>

                        <option value="Closed">
                            Closed
                        </option>
                        </select>

                    </div>

                    </td>

                    <td className="px-6 py-5 text-gray-500">
                    {new Date(
                        lead.createdAt
                    ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5">

                    <button
                        onClick={() =>
                        handleDelete(
                            lead._id
                        )
                        }
                        className="text-red-500 hover:text-red-700 font-medium"
                    >
                        Delete
                    </button>

                    </td>

                </tr>
                ))
            )}

            </tbody>

        </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">

        {leads.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-200 p-5 text-center text-gray-500">
            No Leads Found
            </div>
        ) : (
            leads.map((lead) => (
            <div
                key={lead._id}
                className="bg-white rounded-3xl border border-gray-200 p-5"
            >

                <h3 className="font-semibold">
                {lead.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                {lead.email}
                </p>

                <p className="mt-3 font-medium">
                ₹{lead.budget}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                {lead.message}
                </p>

                <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.status === "New"
                        ? "bg-yellow-100 text-yellow-700"
                        : lead.status === "Contacted"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                    >
                    {lead.status}
                    </span>

                    <select
                    value={lead.status}
                    onChange={(e) =>
                        handleStatusChange(
                        lead._id,
                        e.target.value
                        )
                    }
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white"
                    >
                    <option value="New">
                        New
                    </option>

                    <option value="Contacted">
                        Contacted
                    </option>

                    <option value="Closed">
                        Closed
                    </option>
                    </select>

                </div>

                <button
                    onClick={() =>
                    handleDelete(
                        lead._id
                    )
                    }
                    className="text-red-500 font-medium"
                >
                    Delete
                </button>

                </div>

                <p className="mt-3 text-xs text-gray-500">
                {new Date(
                    lead.createdAt
                ).toLocaleDateString()}
                </p>

            </div>
            ))
        )}

        </div>

      </div>
    </Layout>
  );
}