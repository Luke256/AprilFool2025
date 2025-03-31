import CatAscii from "@/cat";


export default function Home() {

  // 日本時間で2025年4月1日0時から2025年4月1日19時までの間に、アスキーアートを表示する
  const startTime = new Date("2025-04-01T00:00:00.000Z");
  const endTime = new Date("2025-04-01T19:00:00.000Z");
  const currentTime = new Date();
  const progress = Math.min(
    Math.max((currentTime.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime()), 0),
    1
  );
  const displayString = CatAscii.substring(0, Math.floor(CatAscii.length * progress));

  return (
    <div style={{ whiteSpace: "pre", textAlign: "center" }}>
      <h1>{progress}</h1>
      <pre>
        {displayString}
      </pre>
    </div>
  );
}
