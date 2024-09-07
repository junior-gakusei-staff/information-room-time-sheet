"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Timetable from '@/app/components/Timetable';
import Link from 'next/link'
import { ApiResponse, Timetables, ClassInfo, HomeProps, TimetableProps } from '@/app/types/types';

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}

const Home: React.FC<HomeProps> = () => {
    const [timetable, setTimetable] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setTimetable(data);
        };
        fetchData();
    }, []);

    if (!timetable) return <div>Loading...</div>;

    return (
        <div>
            <Head>
                <title>Timetable</title>
            </Head>
            
            <main className="container mx-auto p-4">
                <nav className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold mb-4">情報処理教室時間割表</h1>
                    <ul className='flex space-x-4 '>
                        <li><Link href="/" className="text-xl border-b">タワー6階</Link></li>
                        <li><Link href="/" className="text-xl border-b">タワー7階</Link></li>
                        <li><Link href="/" className="text-xl border-b">E棟</Link></li>
                        <li><Link href="/" className="text-xl border-b">申請書対応済</Link></li>
                    </ul>   
                </nav>
                <div className="grid grid-cols-1 gap-4 ">
                    {timetable.T602 && <Timetable timetable={timetable.T602} roomName="T-602" />}
                    {timetable.T603 && <Timetable timetable={timetable.T603} roomName="T-603" />}
                </div>
            </main>
        </div>
    );
};

export default Home;

