export default function CircularShape() {
  return (
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath: "circle(50% at 50% 50%)",
        maskImage: "radial-gradient(circle, transparent 40%, black 40%)",
      }}
    />
  );
}
