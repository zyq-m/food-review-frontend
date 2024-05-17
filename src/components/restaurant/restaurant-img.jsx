import { useForm } from "react-hook-form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Menu from "./menu";
import Highlight from "./highlight";
import { useState } from "react";

export default function RestaurantImg() {
  const { handleSubmit, register } = useForm();
  const [highlight, setHighlight] = useState({ files: [], temp: {} });
  const [menu, setMenu] = useState([]);

  function onHighlight(data) {
    setHighlight((prev) => {
      const files = prev.files;
      const src = prev.temp.src;

      const obj = {
        name: data.name,
        src: src,
      };

      files.push(obj);

      return { files, temp: {} };
    });

    console.warn("inside onHighlight");
  }

  function onMenu(data) {
    console.log(data.target.files);
  }

  return (
    <div>
      <h2 className="font-semibold mb-4">Menu</h2>
      <div className="mb-4">
        <h3 className="text-sm">Add highlight</h3>
        {highlight.files.length > 0 && <Highlight img={highlight.files} />}
        <button
          className="btn mt-2"
          onClick={() => document.getElementById("highlight-modal").showModal()}
        >
          <AddPhotoAlternateIcon fontSize="medium" />
          Add Photo
        </button>
      </div>

      <div>
        <h3 className="text-sm">Add Menu</h3>
        <Menu />
        <button
          type="btn"
          className="btn mt-2"
          onClick={() => document.getElementById("menu-img").click()}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            id="menu"
            className="hidden"
            {...register("menuImg", { onChange: onMenu })}
          />
          <AddPhotoAlternateIcon fontSize="medium" />
          Add Photo
        </button>
      </div>

      <dialog
        id="highlight-modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Upload your highlight</h3>
          <form onSubmit={handleSubmit(onHighlight)} className="grid gap-2">
            {!highlight.temp?.src ? (
              <button
                type="button"
                className="flex flex-col items-center backdrop-brightness-95 rounded-md pb-4"
                onClick={() => document.getElementById("highlight").click()}
              >
                <p className="text-9xl">
                  <CloudUploadIcon fontSize="inherit" />
                </p>
                <p>Choose photo</p>
              </button>
            ) : (
              <img src={highlight.temp.src} />
            )}
            <input
              type="file"
              accept="image/*"
              id="highlight"
              className="hidden"
              {...register("highlightImg", {
                onChange: (data) => {
                  setHighlight((prev) => ({
                    ...prev,
                    temp: {
                      src: URL.createObjectURL(data.target.files[0]),
                    },
                  }));
                },
              })}
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-md"
              {...register("name")}
            />
            <button type="submit" className="btn btn-accent btn-md">
              Upload
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
