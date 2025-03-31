'use client';

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

  // 日本時間で2025年4月1日0時から2025年4月1日19時までの間に、アスキーアートを表示する
  const progress = getProgressPercentage();
  const displayString = CatAscii.substring(0, Math.floor(CatAscii.length * progress));

  return (
    <div style={{ whiteSpace: "pre", textAlign: "center" }}>
      <h1>{progress}</h1>
      <h2></h2>
      <pre>
        {displayString}
      </pre>
    </div>
  );
}
