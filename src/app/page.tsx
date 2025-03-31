import CatAscii from "@/cat";


export default function Home() {

  // 日本時間で2025年4月1日0時から2025年4月1日19時までの間に、アスキーアートを表示する
  const startTime = new Date("2025-04-01T00:00:00+09:00")
  const endTime = new Date("2025-04-02T00:00:00+09:00")
  const now = new Date(new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));
  const duration = endTime.getTime() - startTime.getTime();
  const elapsed = now.getTime() - startTime.getTime();
  const progress = Math.min(Math.max(elapsed / duration, 0), 1);
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
