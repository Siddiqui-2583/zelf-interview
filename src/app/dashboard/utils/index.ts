export const formatViews = (num: number) => {
  if (num >= 1000000) {
    // Convert to millions (M)
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 1000) {
    // Convert to thousands (K)
    return (num / 1000).toFixed(0) + "K";
  } else {
    // No conversion needed
    return num.toString();
  }
};
