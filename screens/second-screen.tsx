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
            { word: "I have" },
            { word: "experience" },
            { word: "with:", style: "text-primary" },
          ]}
        />

        <TypingText
          className="self-end text-6xl text-right font-semibold leading-[0.6]"
          containerAnimation={{
            hidden: {
              x: 50,
            },
            visible: {
              x: { inView: -20, defaultValue: 0 },
            },
          }}
          words={[
            { word: "React | Next.js" },
            {
              word: "and I also use Nest.js",
              style: "text-yellow-500 text-2xl",
            },
          ]}
        />

        <TypingText
          className="self-start text-5xl font-semibold leading-[0.6]"
          containerAnimation={{
            hidden: {
              x: -50,
            },
            visible: {
              x: { inView: 20, defaultValue: 0 },
            },
          }}
          words={[
            { word: "Redux | Zustand" },
            {
              word: "for caching React Query | SWR",
              style: "text-indigo-500 text-2xl",
            },
          ]}
        />

        <TypingText
          className="self-end text-3xl text-wrap text-right font-semibold leading-[0.8]"
          containerAnimation={{
            hidden: {
              x: 20,
            },
            visible: {
              x: { inView: -20, defaultValue: 0 },
            },
          }}
          words={[
            { word: "MUI | Chakra UI | Next UI | Tailwind" },
            {
              word: "for animation Framer motion",
              style: "text-danger text-xl",
            },
          ]}
        />
      </div>
    </div>
  )
}
