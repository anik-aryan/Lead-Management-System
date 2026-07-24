import Layout from "../components/Layout";

export default function Leads() {
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
                placeholder="Search leads..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-lime-400"
            />
            </div>

        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap gap-3">

            <button className="px-5 py-2 rounded-2xl bg-[#111827] text-white text-sm font-medium">
            All · 24
            </button>

            <button className="px-5 py-2 rounded-2xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
            New · 10
            </button>

            <button className="px-5 py-2 rounded-2xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Contacted · 8
            </button>

            <button className="px-5 py-2 rounded-2xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Closed · 6
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

              </tr>

            </thead>

            <tbody>

              {[
                {
                  name: "Anik Aryan",
                  email: "anik@gmail.com",
                  budget: "₹50,000+",
                  message: "Need Shopify Store",
                  status: "New",
                  date: "25 Jul 2026",
                },

                {
                  name: "Rahul Sharma",
                  email: "rahul@gmail.com",
                  budget: "₹20,000",
                  message: "Need Landing Page",
                  status: "Contacted",
                  date: "24 Jul 2026",
                },

                {
                  name: "Priya Gupta",
                  email: "priya@gmail.com",
                  budget: "₹80,000",
                  message: "Need Full Website",
                  status: "Closed",
                  date: "23 Jul 2026",
                },
              ].map((lead, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="h-11 w-11 rounded-full bg-lime-100 flex items-center justify-center font-semibold">
                        {lead.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
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
                    {lead.budget}
                  </td>

                  <td className="px-6 py-5 max-w-xs truncate text-gray-600">
                    {lead.message}
                  </td>

                  <td className="px-6 py-5">

                    {lead.status === "New" && (
                      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                        New
                      </span>
                    )}

                    {lead.status === "Contacted" && (
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        Contacted
                      </span>
                    )}

                    {lead.status === "Closed" && (
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Closed
                      </span>
                    )}

                  </td>

                  <td className="px-6 py-5 text-gray-500">
                    {lead.date}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">

          {[
            {
              name: "Anik Aryan",
              email: "anik@gmail.com",
              budget: "₹50,000+",
              status: "New",
            },

            {
              name: "Rahul Sharma",
              email: "rahul@gmail.com",
              budget: "₹20,000",
              status: "Contacted",
            },

            {
              name: "Priya Gupta",
              email: "priya@gmail.com",
              budget: "₹80,000",
              status: "Closed",
            },
          ].map((lead, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 p-5"
            >
              <h3 className="font-semibold">
                {lead.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {lead.email}
              </p>

              <p className="mt-3 font-medium">
                {lead.budget}
              </p>

              <div className="mt-3">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                  {lead.status}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </Layout>
  );
}