export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e3a8a] text-white text-center px-6">
      {/* Logo or Brand Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-[#c9a227] tracking-wide">
        SereBraide
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-2xl text-[#a8a9ad] mt-4 max-w-2xl">
        Luxury scents & premium activewear – elegance in every detail.
      </p>

      {/* Countdown Timer (Optional Placeholder) */}
      <div className="flex space-x-6 text-4xl md:text-6xl font-bold mt-8">
        <span className="bg-[#c9a227] text-[#1e3a8a] px-6 py-3 rounded-lg">
          Coming Soon
        </span>
      </div>

      {/* Email Subscription Form */}
      <div className="mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-l-lg border-none outline-none text-black w-64"
        />
        <button className="bg-[#c9a227] text-[#1e3a8a] px-6 py-3 rounded-r-lg font-bold hover:bg-[#b08e1a]">
          Notify Me
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-8">
        <a href="#" className="text-[#c9a227] text-2xl hover:text-[#b08e1a]">
          Instagram
        </a>
        <a href="#" className="text-[#c9a227] text-2xl hover:text-[#b08e1a]">
          Twitter
        </a>
        <a href="#" className="text-[#c9a227] text-2xl hover:text-[#b08e1a]">
          Facebook
        </a>
      </div>
    </div>
  );
}
