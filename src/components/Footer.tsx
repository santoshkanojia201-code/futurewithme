export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-slate-950 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} FutureWithMe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
