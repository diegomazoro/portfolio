export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#52525b]">
        <p>© {new Date().getFullYear()} Diego Mazo. All rights reserved.</p>
        <p className="font-mono text-xs">diegomazo.com</p>
      </div>
    </footer>
  );
}
