import Highlight from "../highlight";
import Menu from "../menu";

export default function MenuSection({ highlight, menu }) {
  return (
    <>
      <div>
        <h3 className="font-medium mb-4">Highlights</h3>
        <Highlight img={highlight} />
      </div>
      <div>
        <h3 className="font-medium mb-4">Menu</h3>
        <Menu img={menu} />
      </div>
    </>
  );
}
