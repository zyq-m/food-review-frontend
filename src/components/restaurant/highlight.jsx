export default function Highlight({ img }) {
  return (
    <div>
      <h3 className="font-medium mb-4">Highlights</h3>
      <div className="flex gap-4">
        {img?.map((d, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={d.src}
                alt=""
                className="w-[185px] h-[220px] object-cover rounded"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
              <p className="absolute z-20 bottom-0 text-sm text-white pl-2 pb-2">
                {d.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
