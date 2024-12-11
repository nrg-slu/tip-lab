export default function RightCircularShape() {
  return (
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80b5ff] to-[#0066ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath: "circle(50% at 50% 50%)",
        maskImage: "radial-gradient(circle, transparent 40%, black 40%)",
      }}
    />
  );
}
