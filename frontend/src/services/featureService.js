import API from "../api/axios";

// Get All Features

export const getAllFeatures = async () => {

    const response = await API.get("/features");

    return response.data;

};

// Toggle Feature

export const toggleFeature = async (id) => {

    const response = await API.patch(`/features/${id}/toggle`);

    return response.data;

};

// Create Feature

export const createFeature = async (featureData) => {

    const response = await API.post(
        "/features",
        featureData
    );

    return response.data;

};

// Delete Feature

export const deleteFeature = async (id) => {

    const response = await API.delete(

        `/features/${id}`

    );

    return response.data;

};