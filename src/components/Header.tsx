import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4 md:mb-0">情報処理教室時間割表</h1>
          <ul className="flex space-x-4 text-sm md:text-base">
            <li><Link href="/six" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">タワー6階</Link></li>
            <li><Link href="/seven" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">タワー7階</Link></li>
            <li><Link href="/five" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">E棟</Link></li>
            <li><Link href="/request" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">申請書対応済</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;