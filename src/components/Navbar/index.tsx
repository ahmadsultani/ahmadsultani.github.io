import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type NavItem = { name: string; href: `#${string}` };

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isLandingPage) return;

    const sections = navItems
      .map((item) => {
        const id = item.href.slice(1);
        const section = document.getElementById(id);
        return section ? { href: item.href, section } : null;
      })
      .filter(
        (entry): entry is { href: NavItem["href"]; section: HTMLElement } =>
          entry !== null
      );

    if (!sections.length) return;

    const updateActiveSection = () => {
      const markerY = window.scrollY + window.innerHeight * 0.2 + 24;
      let current = sections[0].href;

      for (const entry of sections) {
        if (entry.section.offsetTop <= markerY) {
          current = entry.href;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].href;
      }

      setActive(current);
    };

    const updateFromHash = () => {
      if (window.location.hash) {
        const exists = sections.some((entry) => entry.href === window.location.hash);
        if (exists) {
          setActive(window.location.hash);
          return;
        }
      }
      updateActiveSection();
    };

    updateFromHash();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [isLandingPage, navItems]);

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-colors ${
          scrolled
            ? "border-slate-700/70 bg-[#0b0f16]/90"
            : "border-slate-700/40 bg-[#0b0f16]/70"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100"
          >
            Sultani
          </a>

          {isLandingPage ? (
            <>
              <div className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-800/80 text-slate-100"
                          : "text-slate-300 hover:text-slate-100"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700 bg-slate-900/70 text-slate-100 lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-transform ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[6px] h-[1.5px] w-5 rounded-full bg-current transition-opacity ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-[1.5px] w-5 rounded-full bg-current transition-transform ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </>
          ) : (
            <a
              href="/#projects"
              className="rounded-lg border border-slate-600/80 bg-slate-800/80 px-3.5 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-700/80"
            >
              Return to Projects
            </a>
          )}
        </div>

        <AnimatePresence>
          {open && isLandingPage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="overflow-hidden border-t border-slate-700/60 bg-[#0b0f16]/95 lg:hidden"
            >
              <div className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8 lg:px-12">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          active === item.href
                            ? "bg-slate-800/90 text-slate-100"
                            : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-16" />
    </LazyMotion>
  );
}
