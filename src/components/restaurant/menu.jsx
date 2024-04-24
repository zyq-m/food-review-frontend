export default function Menu({ img }) {
  return (
    <div>
      <h3 className="font-medium mb-4">Menu</h3>
      <div className="flex gap-4">
        {img?.map((d, i) => {
          return (
            <div key={i}>
              <img
                src={d.src}
                alt=""
                className="w-[185px] h-[220px] object-cover rounded"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
