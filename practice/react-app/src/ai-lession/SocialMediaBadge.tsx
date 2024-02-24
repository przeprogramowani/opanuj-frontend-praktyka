import { useState, ChangeEvent } from 'react';

const SocialMediaBadge = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file || null);
  };

  const handleDownloadBadge = () => {
    // Handle the badge download logic here
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full m-auto">
        <div className="flex items-center gap-2 space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>

          <button className="relative cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Wybierz zdjęcie
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="
              absolute opacity-0
              cursor-pointer
              z-10
              inset-0 w-full h-full
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              "
            />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={handleDownloadBadge}
            disabled={!image}
          >
            Pobierz odznakę
          </button>
        </div>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Image"
            className="mt-4 mx-auto"
            style={{ maxWidth: '200px' }}
          />
        )}
      </div>
    </div>
  );
};

export default SocialMediaBadge;
