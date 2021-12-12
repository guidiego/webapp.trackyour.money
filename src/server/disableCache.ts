export const disableCache = (res) => {
  res.setHeader(
    "Cache-Control",
    "no-cache, no-store, max-age=0, must-revalidate"
  );
  res.setHeader("Expires", "-1");
};

export default disableCache;
