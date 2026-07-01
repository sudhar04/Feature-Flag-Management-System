import { useEffect, useState } from "react";
import { getAllFeatures } from "../services/featureService";
import FeatureCard from "../components/FeatureCard";

const FeatureFlags = () => {

    const [features, setFeatures] = useState([]);

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

    return (

        <div>

            <h1>Feature Flags</h1>

            <h3>Total Features : {features.length}</h3>

            {features.map((feature) => (

                <FeatureCard
                    key={feature._id}
                    feature={feature}
                    refreshFeatures={fetchFeatures}
                />

            ))}

        </div>

    );

};

export default FeatureFlags;