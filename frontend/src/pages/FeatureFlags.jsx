import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Flag,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { getAllFeatures } from "../services/featureService";
import FeatureCard from "../components/FeatureCard";

const FeatureFlags = () => {
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const data = await getAllFeatures();
      setFeatures(data.featureFlags);
    } catch (error) {
      console.log(error);
    }
  };

  const enabledCount = features.filter((f) => f.enabled).length;
  const disabledCount = features.length - enabledCount;

  const filteredFeatures = features.filter((feature) =>
    feature.featureKey
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Feature Flags
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all your application feature flags.
          </p>

        </div>

        <Link to="/create-feature">

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white font-semibold shadow">

            <Plus size={18} />

            Create Feature

          </button>

        </Link>

      </div>

      {/* Stats */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-blue-600 text-white p-5 shadow">

          <Flag size={28} />

          <p className="mt-4 text-sm opacity-80">
            Total Features
          </p>

          <h2 className="text-3xl font-bold">
            {features.length}
          </h2>

        </div>

        <div className="rounded-2xl bg-green-600 text-white p-5 shadow">

          <CheckCircle2 size={28} />

          <p className="mt-4 text-sm opacity-80">
            Enabled
          </p>

          <h2 className="text-3xl font-bold">
            {enabledCount}
          </h2>

        </div>

        <div className="rounded-2xl bg-red-600 text-white p-5 shadow">

          <XCircle size={28} />

          <p className="mt-4 text-sm opacity-80">
            Disabled
          </p>

          <h2 className="text-3xl font-bold">
            {disabledCount}
          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search feature..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Feature List */}

      <div className="space-y-5">

        {filteredFeatures.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

            <Flag
              size={50}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-xl font-semibold text-gray-700">

              No Features Found

            </h3>

            <p className="mt-2 text-gray-500">

              Create a new feature to get started.

            </p>

          </div>

        ) : (

          filteredFeatures.map((feature) => (
            <FeatureCard
              key={feature._id}
              feature={feature}
              refreshFeatures={fetchFeatures}
            />
          ))

        )}

      </div>

    </div>
  );
};

export default FeatureFlags;