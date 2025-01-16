import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-300 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
            Auth
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">
            App
          </span>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <SignInButton />
              </SignedOut>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
