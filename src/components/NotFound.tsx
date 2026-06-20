import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display-tight text-[18vw] md:text-[10vw] text-ink leading-none">404</h1>
        <p className="mt-4 text-[12px] tracked text-ink/70">This road doesn’t exist yet.</p>
        <Link to="/" className="mt-8 inline-block bg-ink px-6 py-3 text-[11px] tracked font-bold text-paper">
          Back home
        </Link>
      </div>
    </div>
  );
}
