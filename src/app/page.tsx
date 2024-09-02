"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Timetable from '@/app/components/Timetable';

async function getData(){
  const response = await fetch("https://script.google.com/macros/s/AKfycbyiuvHKoKucQ-6TsQzxGhyZZ-rBbsMor4bAeOElB5n8VJqNO0vCNMehjpCmZSAbJehE/exec");
  const data = await response.json();
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

    return (
        <div>
            <Head>
                <title>Timetable</title>
            </Head>
            <main className="container mx-auto p-4">
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold mb-4">情報処理教室時間割表</h1>
                    <span className="text-xl">タワー6階</span>
                    <span className="text-xl">タワー7階</span>
                    <span className="text-xl">E棟</span>
                    <span className="text-xl">申請書対応済</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {timetable.t602 && <Timetable timetable={timetable.t602} roomName="T-602" />}
                    {timetable.t603 && <Timetable timetable={timetable.t603} roomName="T-603" />}
                    {/* 他の教室についても同様のコンポーネントを使用 */}
                </div>
            </main>
        </div>
    );
};

export default Home;

