import { IoSunnyOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        <div
          className="top-0 z-10 h-16 pt-6"
          style={{ position: "var(--header-position)" }}
        >
          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="mx-auto max-w-7xl lg:px-8"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
