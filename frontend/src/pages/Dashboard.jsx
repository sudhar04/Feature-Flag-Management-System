import { useEffect, useState } from "react";
import { getAllFeatures } from "../services/featureService";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Dashboard = () => {

    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const enabledCount = features.filter(

    feature => feature.enabled

    ).length;

    const disabledCount = features.length - enabledCount;

    

    useEffect(() => {
        fetchFeatures();
    }, []);

    const fetchFeatures = async () => {

        try {

            setLoading(true);

            const data = await getAllFeatures();

            setFeatures(data.featureFlags);

            setLoading(false);

        } catch (error) {

            console.log(error);

            setLoading(false);

        }

    };

    if (loading) {

        return <Loader />;

    }


   const filteredFeatures = features.filter((feature) => {

    const matchesSearch =
        feature.featureKey
            .toLowerCase()
            .includes(search.toLowerCase());

    const matchesFilter =
        filter === "all"
            ? true
            : filter === "enabled"
            ? feature.enabled
            : !feature.enabled;

    return matchesSearch && matchesFilter;

});

    return (
        

        <div>
            

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Dashboard
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage and monitor all feature flags.
                    </p>
                </div>

                <Link to="/create-feature">

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition">

                        + Create Feature

                    </button>

                </Link>

            </div>

            
            
            <div className="mb-6">

                <input
                    type="text"
                    placeholder="Search features..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

            </div>
            

            <div className="flex flex-wrap gap-3 mb-8">

  {/* All */}

            <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                    filter === "all"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                `}
            >
                All
            </button>

            {/* Enabled */}

            <button
                onClick={() => setFilter("enabled")}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                    filter === "enabled"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                `}
            >
                Enabled
            </button>

            {/* Disabled */}

            <button
                onClick={() => setFilter("disabled")}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                    filter === "disabled"
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                `}
            >
                Disabled
            </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

                <div className="bg-blue-500 text-white p-4 rounded">

                    <h2>Total Features</h2>

                    <h1>{features.length}</h1>

                </div>

                <div className="bg-green-500 text-white p-4 rounded">

                    <h2>Enabled</h2>

                    <h1>{enabledCount}</h1>

                </div>

                <div className="bg-red-500 text-white p-4 rounded">

                    <h2>Disabled</h2>

                    <h1>{disabledCount}</h1>

                </div>

            </div>

            {filteredFeatures.length === 0 ? (

                <div className="text-center mt-10">

                    <h2>No Features Found</h2>

                    <p>Try another search keyword.</p>

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

    );

};

export default Dashboard;