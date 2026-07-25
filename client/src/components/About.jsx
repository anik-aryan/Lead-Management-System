import {
  ShieldCheck,
  Clock3,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Clock3 size={32} />,
    title: "Fast Response",
    description:
      "Our team reviews every enquiry quickly and responds within 24 hours.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure & Reliable",
    description:
      "Your personal information is protected with secure data handling practices.",
  },
  {
    icon: <Users size={32} />,
    title: "Trusted Support",
    description:
      "Helping businesses connect with genuine customers through an efficient lead process.",
  },
];

const stats = [
  {
    icon: <TrendingUp size={26} />,
    number: "500+",
    label: "Leads Generated",
  },
  {
    icon: <Clock3 size={26} />,
    number: "24 Hrs",
    label: "Average Response",
  },
  {
    icon: <ShieldCheck size={26} />,
    number: "100%",
    label: "Secure Data",
  },
  {
    icon: <CheckCircle2 size={26} />,
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-[#f5f6f8] to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-5 py-2 rounded-full font-semibold">
            <Sparkles size={18} />
            About LeadDesk CRM
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-gray-900">
            Built To Simplify Lead Management
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            LeadDesk CRM helps businesses collect, organize and manage
            customer enquiries from one place. Our platform ensures every
            lead is tracked, secure and easy to manage.
          </p>
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-lime-100 text-lime-600 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}

        <div className="mt-24 bg-black rounded-[32px] p-10 lg:p-14 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Trusted By Growing Businesses
            </h2>

            <p className="text-gray-300 mt-4">
              Businesses rely on LeadDesk CRM to streamline their
              customer enquiries and improve follow-up efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-8 text-center hover:bg-white/20 transition"
              >
                <div className="flex justify-center text-lime-400">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold mt-4">
                  {item.number}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}