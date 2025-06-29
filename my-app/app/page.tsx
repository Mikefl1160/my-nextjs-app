export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Synthetic Water Bags</h1>
      <p className="mb-6 text-xl">Efficient irrigation for your farm</p>
      <ul className="text-left space-y-2">
        <li>Durable and UV resistant</li>
        <li>Easy to transport and store</li>
        <li>Reduces water waste</li>
      </ul>
      <a
        href="mailto:info@example.com"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Contact Us
      </a>
    </main>
  );
}
