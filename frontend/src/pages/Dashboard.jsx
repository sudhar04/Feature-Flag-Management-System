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
            

            <h1>Dashboard</h1>

            <Link to="/create-feature">

                <button>

                    Create New Feature

                </button>

            </Link>

            <br /><br />
            
            <input
                type="text"
                placeholder="Search Feature..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            

            <div className="flex gap-3 mb-4">

                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded text-white ${
                        filter === "all"
                            ? "bg-blue-700"
                            : "bg-blue-500"
                    }`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("enabled")}
                    className={`px-4 py-2 rounded text-white ${
                        filter === "enabled"
                            ? "bg-green-700"
                            : "bg-green-500"
                    }`}
                >
                    Enabled
                </button>

                <button
                    onClick={() => setFilter("disabled")}
                    className={`px-4 py-2 rounded text-white ${
                        filter === "disabled"
                            ? "bg-red-700"
                            : "bg-red-500"
                    }`}
                >
                    Disabled
                </button>

            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">

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