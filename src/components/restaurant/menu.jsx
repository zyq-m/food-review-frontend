export default function Menu({ img }) {
  return (
    <div className="flex gap-4">
      {img?.map((d) => {
        return (
          <div key={d.id}>
            <img
              src={d.src.original}
              alt={d.alt}
              className="w-[185px] h-[220px] object-cover rounded"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
