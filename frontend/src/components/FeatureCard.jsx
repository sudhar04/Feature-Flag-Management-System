import { toggleFeature , deleteFeature} from "../services/featureService";

const FeatureCard = ({ feature, refreshFeatures }) => {

    const handleToggle = async () => {

        try {

            await toggleFeature(feature._id);

            refreshFeatures();

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Unable to toggle feature"

            );

        }

    };

    const handleDelete = async () => {

            const confirmDelete = window.confirm(

                "Are you sure you want to delete this feature?"

            );

            if (!confirmDelete) return;

            try {

                await deleteFeature(feature._id);

                refreshFeatures();

            }

            catch (error) {

                alert(

                    error.response?.data?.message ||

                    "Unable to delete feature"

                );

            }

        };

    return (

        <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">

            <div >

                <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold">

                    {feature.featureKey}

                </h2>

                <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                        feature.enabled
                            ? "bg-green-500"
                            : "bg-red-500"
                    }`}
                >

                    {

                        feature.enabled

                            ? "Enabled"

                            : "Disabled"

                    }

                </span>

            </div>

            <div className="flex gap-3">

                <button
                    onClick={handleToggle}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >

                    Toggle

                </button>

                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >

                    Delete

                </button>

            </div>

        </div>
        </div>

    );

};

export default FeatureCard;