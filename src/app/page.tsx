"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Timetable from '@/app/components/Timetable';
import Link from 'next/link'
async function getData(){
  const response = await fetch("https://script.google.com/macros/s/AKfycbyiuvHKoKucQ-6TsQzxGhyZZ-rBbsMor4bAeOElB5n8VJqNO0vCNMehjpCmZSAbJehE/exec");
  const data = await response.json();
  console.log(data)
  return data;
}

const Home = () => {
    const [timetable, setTimetable] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setTimetable(data);
            
        };
        fetchData();
    }, []);

    if (!timetable) return <div>Loading...</div>;

    console.log(timetable.Ｔ602.monDay)
    console.log(timetable)

    return (
        <div>
            <Head>
                <title>Timetable</title>
            </Head>
            <main className="container mx-auto p-4">
                <nav className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold mb-4">情報処理教室時間割表</h1>
                    <ul className='flex '>
                        <li><Link href="/" className="text-xl">タワー6階</Link></li>
                        <li><Link href="/" className="text-xl">タワー7階</Link></li>
                        <li><Link href="/" className="text-xl">E棟</Link></li>
                        <li><Link href="/" className="text-xl">申請書対応済</Link></li>
                    </ul>
                    
                    
                    
                    
                </nav>
                <div className="grid grid-cols-1 gap-4">
                    {timetable.Ｔ602 && <Timetable timetable={timetable?.Ｔ602} roomName="T-602" />}
                    {timetable.Ｔ603 && <Timetable timetable={timetable.Ｔ603} roomName="T-603" />}
                </div>
            </main>
        </div>
    );
};

export default Home;

