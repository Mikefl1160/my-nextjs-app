export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto flex justify-between items-center py-6 px-4">
        <span className="text-2xl font-bold">CleanTest</span>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Products</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Clean Products for Passed Tests</h1>
        <p className="mb-8 text-xl">Stay prepared for any situation</p>
      </section>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-16">
        <div className="border rounded-lg shadow-sm p-6 text-center">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80" alt="Starter Kit" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Starter Kit</h3>
          <p>Essential supplies for quick tests on the go.</p>
        </div>
        <div className="border rounded-lg shadow-sm p-6 text-center">
          <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&q=80" alt="Advanced Kit" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Advanced Kit</h3>
          <p>Enhanced tools for more precise results.</p>
        </div>
        <div className="border rounded-lg shadow-sm p-6 text-center">
          <img src="https://images.unsplash.com/photo-1558009254-50e1d2c4fd37?w=400&q=80" alt="Pro Kit" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Pro Kit</h3>
          <p>Comprehensive set for professionals.</p>
        </div>
        <div className="border rounded-lg shadow-sm p-6 text-center">
          <img src="https://images.unsplash.com/photo-1581091215367-59a37313f3d9?w=400&q=80" alt="Ultimate Kit" className="mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Ultimate Kit</h3>
          <p>All-in-one package to handle any testing scenario.</p>
        </div>
      </section>
    </main>
  );
}
