function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Project Info */}
          <div>
            <h3 className="font-serif text-lg tracking-wider text-white">
              Echoes of Time
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              A visual exploration of history, memory, and landscape.
              This website is designed to preserve and present the
              essence of a historical place through storytelling.
            </p>
          </div>

          {/* Credits */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white">
              CREDITS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Design & Development: Project Team</li>
              <li>Photography: Public Sources</li>
              <li>Video: YouTube Documentaries</li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white">
              SOURCES
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Historical Records</li>
              <li>Archaeological Studies</li>
              <li>Regional Archives</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white">
              CONTACT US
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Email: example@email.com</li>
              <li>Phone: +91 9XXXXXXXXX</li>
              <li>Location: Wayanad, Kerala</li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Echoes of Time. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
