let isFeatureEnabled = false;

export const getFeatureStatus = () => isFeatureEnabled;

export const setFeatureStatus = (status) => {
    isFeatureEnabled = status;
};