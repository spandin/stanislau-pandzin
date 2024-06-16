import TypingText from "@/shared/ui/typing-text"

export default function SecondScreen() {
  return (
    <div className="container h-full max-w-7xl mx-auto py-36 inline-flex flex-col flex-shrink items-start justify-start gap-20">
      <TypingText
        className="self-start text-7xl text-wrap font-semibold leading-[1]"
        containerAnimation={{
          hidden: {
            x: -50,
          },
          visible: {
            x: { inView: 20, defaultValue: 0 },
          },
        }}
        words={[
          { word: "I", style: "white" },
          { word: "have", style: "white" },
          { word: "experience ", style: "text-primary" },
          { word: "with:", style: "text-yellow-500" },
        ]}
      />

      <TypingText
        className="self-end text-6xl font-semibold leading-[1]"
        containerAnimation={{
          hidden: {
            x: 50,
          },
          visible: {
            x: { inView: -20, defaultValue: 0 },
          },
        }}
        words={[
          { word: "React,", style: "text-blue-500" },
          { word: "Next.js " },
        ]}
      />

      <TypingText
        className="self-start text-5xl font-semibold leading-[1]"
        containerAnimation={{
          hidden: {
            x: -50,
          },
          visible: {
            x: { inView: 20, defaultValue: 0 },
          },
        }}
        words={[
          { word: "Redux,", style: "text-purple-500" },
          { word: "Zustand " },
        ]}
      />

      <TypingText
        className="self-end text-4xl text-wrap text-right font-semibold leading-[1]"
        containerAnimation={{
          hidden: {
            x: 20,
          },
          visible: {
            x: { inView: -20, defaultValue: 0 },
          },
        }}
        words={[
          { word: "Chakra UI," },
          { word: "Mantine,", style: "text-yellow-500" },
          { word: "and" },
          { word: "Next UI", style: "text-primary" },
        ]}
      />
    </div>
  )
}
