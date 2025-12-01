
import CloudinaryImageUpload from "@/components/core/CloudineryImageUpload";

const Playground = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Playground</h1>
      <div className="max-w-md">
        <h2 className="text-lg font-semibold mb-4">Cloudinary Image Upload Test</h2>
        <CloudinaryImageUpload fieldName="image" />
      </div>
    </div>
  );
};

export default Playground;