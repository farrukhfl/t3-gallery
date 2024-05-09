import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/32cd9802-633e-40e9-a055-800f530a49ce-cpl7fw.jpg",
  "https://utfs.io/f/3bc06c77-621b-4160-b07c-d15c58cb3bef-25r4.png",
  "https://utfs.io/f/04b9608c-2fb0-432b-b8b7-65922328592d-n0nyyb.jpg",
  "https://utfs.io/f/9175ff76-b71f-4a37-bdb2-a1955bb7bf4c-qe1ym2.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
