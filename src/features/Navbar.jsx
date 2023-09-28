function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-around bg-gray-900 py-6 opacity-90">
      <span className="font-eduSa text-[20px] font-bold uppercase tracking-wide">
        Pragadeesh
      </span>
      <ul className="flex gap-[60px]">
        <li>
          <div>
            <a
              className="border-orange-500 transition-all duration-100 hover:origin-center hover:border-b-[3px]"
              href="#about"
            >
              About me
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="border-orange-500 transition-all duration-100 hover:origin-center hover:border-b-[3px]"
              href="#skills"
            >
              Skills
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="border-orange-500 transition-all duration-100 hover:origin-center hover:border-b-[3px]"
              href="#projects"
            >
              Projects
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="border-orange-500 transition-all duration-100 hover:origin-center hover:border-b-[3px]"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </li>
      </ul>
      <div>
        <span className="border-orange-500 transition-all duration-100 hover:origin-center hover:border-b-[3px]">
          Resume
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
