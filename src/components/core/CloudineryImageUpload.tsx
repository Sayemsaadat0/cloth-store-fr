import { useState, useEffect, type ChangeEvent } from "react";

interface CloudinaryImageUploadProps {
  fieldName: string;
  uploadPreset?: string;
  cloudName?: string;
  onImageUpload?: (imageUrl: string) => void;
  initialValue?: string;
}

interface CloudinaryResponse {
  secure_url?: string;
  url?: string;
  public_id?: string;
  error?: {
    message?: string;
  };
  [key: string]: unknown;
}

const CloudinaryImageUpload = ({
  fieldName,
  uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ,
  cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ,
  onImageUpload,
  initialValue = "",
}: CloudinaryImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState<string>(initialValue);
  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    setImageUrl(initialValue);
  }, [initialValue]);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = (await res.json()) as CloudinaryResponse;
      console.log("Cloudinary response:", data);

      if (data.error) {
        setError(data.error.message || "Upload failed");
        return;
      }

      if (data.secure_url) {
        setImageUrl(data.secure_url);
        setError("");
        // Call the callback if provided
        if (onImageUpload) {
          onImageUpload(data.secure_url);
        }
      } else {
        setError("Upload successful but no URL returned");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setError(
        error instanceof Error ? error.message : "Upload failed. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="file"
        onChange={handleUpload}
        disabled={uploading}
        accept="image/*"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
      />
      {uploading && (
        <p className="text-sm text-blue-600">Uploading...</p>
      )}
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-3 rounded border border-red-200">
          <p className="font-semibold">Error: {error}</p>
          {error.includes("whitelisted") && (
            <p className="mt-2 text-xs text-red-700">
              To fix: Go to Cloudinary Dashboard → Settings → Upload → Upload presets → 
              Edit "{uploadPreset}" → Set "Signing mode" to "Unsigned" → Save
            </p>
          )}
        </div>
      )}
      <input
        type="text"
        name={fieldName}
        value={imageUrl}
        placeholder="Image URL will appear here"
        readOnly
        className="border border-gray-300 p-2 w-full rounded-md"
      />
      {imageUrl && (
        <div className="mt-2">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-32 h-32 object-cover rounded-md border border-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default CloudinaryImageUpload;
