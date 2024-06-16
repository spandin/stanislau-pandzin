import TypingText from "@/shared/ui/typing-text"

export default function SecondScreen() {
  return (
    <div className="relative flex flex-col">
      <div className="container max-w-7xl mx-auto py-20 flex flex-col gap-10  ">
        <TypingText
          className="self-start text-7xl font-semibold leading-[1]"
          containerAnimation={{
            hidden: {
              x: -50,
            },
            visible: {
              x: { inView: 20, defaultValue: 0 },
            },
          }}
          words={[
            { word: "I have", style: "white" },
            { word: "experience", style: "text-primary" },
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
          words={[{ word: "React/Next.js" }]}
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
          words={[{ word: "Redux/Zustand" }]}
        />

        <TypingText
          className="self-end text-3xl text-wrap text-right font-semibold leading-[1]"
          containerAnimation={{
            hidden: {
              x: 20,
            },
            visible: {
              x: { inView: -20, defaultValue: 0 },
            },
          }}
          words={[
            { word: "Chakra UI/Next UI" },
            { word: "Tailwind/Framer motion", style: "text-[#f32078]" },
          ]}
        />
      </div>
    </div>
  )
}
