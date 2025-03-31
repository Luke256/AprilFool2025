'use client';
import { useEffect, useState } from "react";

import CatAscii from "@/cat";

function getProgressPercentage(): number {
  // 2025年4月1日 0:00:00 JST（UTC+9）を取得
  const start = new Date(Date.UTC(2025, 3, 0, 15, 0, 0)).getTime(); // 4月1日 = (3, 0)（0-indexed）
  // 2025年4月2日 0:00:00 JST（UTC+9）を取得
  const end = new Date(Date.UTC(2025, 3, 1, 15, 0, 0)).getTime(); // 4月2日 = (3, 1)

  // 現在時刻を取得し、日本時間（UTC+9）で扱う
  const nowUTC = new Date(); // UTC基準
  const nowJST = new Date(nowUTC.getTime()).getTime(); // JSTに変換

  // 進捗率を計算
  const progress = ((nowJST - start) / (end - start));

  return Math.min(Math.max(progress, 0), 1); // 0から1の範囲に制限
}

export default function Home() {

  const [progress, setProgress] = useState(getProgressPercentage());

  // 毎秒更新
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(getProgressPercentage());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // const progress = getProgressPercentage();
  const displayString = CatAscii.substring(0, Math.floor(CatAscii.length * progress));

  return (
    <div style={{ whiteSpace: "pre", textAlign: "center" }}>
      <h1 suppressHydrationWarning>{progress.toFixed(20)}</h1>
      <pre>
        {displayString}
      </pre>
    </div>
  );
}
