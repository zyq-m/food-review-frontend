export default function Highlight({ img }) {
  return (
    <div className="flex gap-4">
      {img?.map((d) => {
        return (
          <div className="relative" key={d.id}>
            <img
              src={d.src.original}
              alt={d.alt}
              className="w-[185px] h-[220px] object-cover rounded"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
            <p className="absolute z-20 bottom-0 text-sm text-white pl-2 pb-2">
              {d.alt}
            </p>
          </div>
        );
      })}
    </div>
  );
}
