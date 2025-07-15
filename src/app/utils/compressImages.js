import imageCompression from "browser-image-compression";

export const compressImages = async (files) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
  };

  const compressed = await Promise.all(
    files.map((file) => imageCompression(file, options))
  );
  return compressed;
};
