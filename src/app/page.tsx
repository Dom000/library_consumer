"use client";
import { Audio } from "@dom000/1ui";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Audio
        controlBox={{
          className: "!bg-yellow-500",

          // you can use inline styling or tailwind css


          // style: {
          //   background: "yellow",
          // },
        }}
        audioSrc="https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
      />
    </main>
  );
}
