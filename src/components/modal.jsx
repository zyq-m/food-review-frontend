export default function Modal({ modal }) {
  return (
    <dialog id="msg-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{modal.title}</h3>
        <p className="py-4">{modal.description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
