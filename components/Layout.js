import { Children } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title> {title ? title + ' - NextShop' : 'NextShop'} </title>
          <meta name="description" content="'Nextjs Ecommerce" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
              <Link href="/">
                <a className="text-lg font-bold">NextShop</a>
              </Link>
              <div>
                <Link href="/cart">
                  <a className="p-2">Cart</a>
                </Link>
                <Link href="/login">
                  <a className="p-2">login</a>
                </Link>
              </div>
            </nav>
          </header>
          <main className="container m-auto px-4">{children}</main>
          <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
            <p>Copyright & Copy; 2022 NextShop</p>
          </footer>
        </div>
      </div>
    </>
  );
}
