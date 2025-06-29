export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto flex justify-between items-center py-6 px-4">
        <span className="text-2xl font-bold">ClearTest</span>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-black">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Smarter Testing for Modern Apps</h1>
        <p className="mb-8 text-xl">Automate and manage tests with confidence.</p>
        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded">Get Started</a>
      </section>

      <section id="features" className="container mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <img src="/file.svg" alt="" className="mx-auto mb-4 h-12" />
          <h3 className="text-xl font-semibold mb-2">Easy Authoring</h3>
          <p>Create tests quickly using an intuitive interface.</p>
        </div>
        <div>
          <img src="/globe.svg" alt="" className="mx-auto mb-4 h-12" />
          <h3 className="text-xl font-semibold mb-2">Cross Browser</h3>
          <p>Run your suites on multiple browsers in the cloud.</p>
        </div>
        <div>
          <img src="/window.svg" alt="" className="mx-auto mb-4 h-12" />
          <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
          <p>Understand failures quickly with comprehensive logs.</p>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white text-center py-8">
        <p className="mb-4">Ready to improve your testing?</p>
        <a href="mailto:info@example.com" className="px-6 py-3 bg-blue-500 rounded">Contact Us</a>
      </footer>
    </main>
  );
}
