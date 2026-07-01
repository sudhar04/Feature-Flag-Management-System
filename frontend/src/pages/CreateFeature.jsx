import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFeature } from "../services/featureService";
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

                enabled

            });

            toast.success(

                "Feature Created Successfully"

            );

            setTimeout(() => {

                    navigate("/dashboard");

                }, 1000);

            }

        

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to Create Feature"

            );

        }

    };

    return (

        <div>

            <h1>Create Feature</h1>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    placeholder="Feature Name"

                    value={featureKey}

                    onChange={(e) =>

                        setFeatureKey(e.target.value)

                    }

                />

                <br /><br />

                <label>

                    <input

                        type="checkbox"

                        checked={enabled}

                        onChange={(e) =>

                            setEnabled(e.target.checked)

                        }

                    />

                    Enabled

                </label>

                <br /><br />

                <button type="submit">

                    Create Feature

                </button>

            </form>

        </div>

    );

};

export default CreateFeature;