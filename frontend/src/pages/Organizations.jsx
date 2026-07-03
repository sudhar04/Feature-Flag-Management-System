import {
  Building2,
  Sparkles,
  Users,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

const Organizations = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Organizations
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Organization Management
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Manage multiple organizations, members, permissions and
            workspaces from one place.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Main Card */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-lg border border-slate-200">

            <div className="flex flex-col items-center text-center">

              <div className="mb-6 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white shadow-lg">

                <Building2 size={70} />

              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                Coming Soon 🚀
              </h2>

              <p className="mt-4 max-w-xl text-slate-500 leading-7">
                We're building a powerful Organization Management module
                that will help teams collaborate, manage members,
                assign roles, and organize feature flags efficiently.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <div className="rounded-xl bg-blue-50 px-5 py-3 text-blue-700 font-medium">
                  Multi Organizations
                </div>

                <div className="rounded-xl bg-green-50 px-5 py-3 text-green-700 font-medium">
                  Team Management
                </div>

                <div className="rounded-xl bg-purple-50 px-5 py-3 text-purple-700 font-medium">
                  Role Permissions
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-white p-6 shadow-lg border">

              <div className="flex items-center gap-3">

                <Sparkles className="text-yellow-500" />

                <h3 className="text-xl font-semibold">
                  Upcoming Features
                </h3>

              </div>

              <div className="mt-6 space-y-5">

                <div className="flex items-center gap-3">

                  <Users className="text-blue-600" />

                  <span>Invite Team Members</span>

                </div>

                <div className="flex items-center gap-3">

                  <ShieldCheck className="text-green-600" />

                  <span>Role Based Access</span>

                </div>

                <div className="flex items-center gap-3">

                  <Building2 className="text-purple-600" />

                  <span>Workspace Support</span>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl">

              <Clock3 size={34} />

              <h3 className="mt-4 text-xl font-semibold">
                Under Development
              </h3>

              <p className="mt-2 text-blue-100">
                This module is currently being developed and will be
                available in a future release.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:scale-105">

                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Organizations;