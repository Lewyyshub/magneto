export const uploadMultipleImages = async (files) => {
  const uploadPreset = "magnetoPhotos"; // your Cloudinary upload preset
  const cloudName = "dehxuhgq8"; // your Cloudinary cloud name

  const uploadPromises = files.map(async (file) => {
    if (!file) throw new Error("No file provided for upload");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    if (!res.ok) {
      console.error("Cloudinary error:", data);
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }
    return data.secure_url;
  });

  return Promise.all(uploadPromises);
};
