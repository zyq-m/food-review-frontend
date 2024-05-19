import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { humanize } from "../../utils/date";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Modal from "../modal";
import useModal from "../../hooks/useModal";

export default function Review({ reviews, edit }) {
  const { modal, setModal, openModal } = useModal();
  const [data, setData] = useState();

  async function onEdit(e) {
    e.preventDefault();
    try {
      const [{ review_id, edited_review }] = data.filter(
        (d) => d.selected === true
      );
      const res = await api.put(`/review/edit/${review_id}`, { edited_review });

      setModal({ title: "Message", description: res.data.message });
      openModal();
      setData((prev) =>
        prev.map((d) => {
          if (d.review_id === review_id) {
            return { ...d, selected: false, review_description: edited_review };
          }
          return { ...d };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  function onTarget(id) {
    setData((prev) =>
      prev.map((d) => {
        if (d.review_id === id) {
          return { ...d, selected: true };
        }
        return { ...d, selected: false };
      })
    );
  }

  function onText(e) {
    setData((prev) =>
      prev.map((d) => {
        if (d.selected) {
          return { ...d, edited_review: e.target.value };
        }
        return { ...d };
      })
    );
  }

  useEffect(() => {
    setData(reviews);
  }, [reviews]);

  return (
    <>
      <div className="grid gap-5">
        {data?.map((d) => {
          return (
            <div key={d.review_id}>
              <div className="flex gap-1 items-center">
                <img
                  src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w"
                  alt=""
                  className="w-[26px] h-[26px] rounded-full"
                />
                <div>
                  <p className="capitalize text-xs">Mat Amin</p>
                  <p className="text-[7px] text-gray-500">11 reviews</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1 items-baseline w-fit">
                <div className="text-yellow-400">
                  <StarOutlinedIcon fontSize="13px" />
                  <StarOutlinedIcon fontSize="13px" />
                  <StarOutlinedIcon fontSize="13px" />
                  <StarOutlinedIcon fontSize="13px" />
                  <StarOutlinedIcon fontSize="13px" />
                </div>
                <p className="text-gray-400 text-xs">{humanize(d.timestamp)}</p>
              </div>

              {!d.selected ? (
                <p>{d.review_description}</p>
              ) : (
                <form onSubmit={onEdit}>
                  <textarea
                    className="textarea textarea-sm"
                    value={d.edited_review}
                    onChange={onText}
                  ></textarea>
                  <div className="flex justify-end">
                    <button className="btn btn-xs" type="submit">
                      Done
                    </button>
                    <button
                      className="btn btn-xs"
                      type="button"
                      onClick={() =>
                        setData((prev) =>
                          prev.map((e) => ({ ...e, selected: false }))
                        )
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {edit && !d.selected && (
                <button
                  className="btn btn-xs btn-ghost text-gray-400"
                  onClick={() => onTarget(d.review_id)}
                >
                  <EditOutlinedIcon fontSize="5px" />
                  Edit review
                </button>
              )}
            </div>
          );
        })}
      </div>

      <Modal modal={modal} />
    </>
  );
}
