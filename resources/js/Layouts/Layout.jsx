import { Link } from '@inertiajs/react';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-4 shadow-md">
        <nav className="flex justify-center space-x-6">
          <Link className="nav-link text-lg font-semibold hover:text-yellow-200 transition" href="/">Home</Link>{/* if we use a tag it reload the entire page whenever clicked, whereas link tag only reloads the component */}
          <Link className="nav-link text-lg font-semibold hover:text-yellow-200 transition" href="/posts/create">Create</Link>
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default Layout;
