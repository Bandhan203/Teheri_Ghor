export function Footer() {
  return (
    <footer className="bg-black px-8">
      {/* Gold divider */}
      <div className="max-w-[1000px] mx-auto">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent" />
      </div>

      <div className="max-w-[1000px] mx-auto py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p
            className="font-['Playfair_Display',serif] text-white text-[18px] tracking-[0.06em] mb-1"
            style={{ fontWeight: 700 }}
          >
            TEHARI <span className="text-[#C6A75E]">GHAR</span>
          </p>
          <p
            className="font-['Poppins',sans-serif] text-white/25 text-[11px] tracking-[0.1em]"
            style={{ fontWeight: 300 }}
          >
            &copy; 2026 All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <span
            className="font-['Poppins',sans-serif] text-white/20 text-[11px] tracking-[0.1em]"
            style={{ fontWeight: 400 }}
          >
            Follow
          </span>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] border border-white/10 flex items-center justify-center hover:border-[#C6A75E]/50 transition-all duration-300 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/30 group-hover:text-[#C6A75E] transition-colors duration-300"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] border border-white/10 flex items-center justify-center hover:border-[#C6A75E]/50 transition-all duration-300 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/30 group-hover:text-[#C6A75E] transition-colors duration-300"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
