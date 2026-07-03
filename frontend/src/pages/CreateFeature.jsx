import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFeature } from "../services/featureService";
import { Flag, Save } from "lucide-react";
import toast from "react-hot-toast";

const CreateFeature = () => {
  const navigate = useNavigate();

  const [featureKey, setFeatureKey] = useState("");
  const [enabled, setEnabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFeature({
        featureKey,
        enabled,
      });

      toast.success("Feature Created Successfully");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to Create Feature"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-10">

      <div className="mx-auto max-w-2xl">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Create Feature
          </h1>

          <p className="mt-2 text-gray-500">
            Create and configure a new feature flag.
          </p>

        </div>

        {/* Card */}

        <div className="rounded-2xl border border-gray-200 bg-white shadow-xl">

          <div className="border-b p-6">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-100 p-3">

                <Flag className="text-blue-600" />

              </div>

              <div>

                <h2 className="font-semibold text-lg">
                  Feature Details
                </h2>

                <p className="text-sm text-gray-500">
                  Fill in the information below.
                </p>

              </div>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6"
          >

            {/* Input */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Feature Name
              </label>

              <input
                type="text"
                placeholder="Example: dark_mode"
                value={featureKey}
                onChange={(e) =>
                  setFeatureKey(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />

            </div>

            {/* Toggle */}

            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">

              <div>

                <h3 className="font-medium">
                  Enable Feature
                </h3>

                <p className="text-sm text-gray-500">
                  Activate this feature immediately.
                </p>

              </div>

              <label className="relative inline-flex cursor-pointer items-center">

                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) =>
                    setEnabled(e.target.checked)
                  }
                  className="peer sr-only"
                />

                <div className="peer h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"></div>

              </label>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >

              <Save size={18} />

              Create Feature

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateFeature;