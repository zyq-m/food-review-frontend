import Highlight from "../highlight";
import Menu from "../menu";

export default function MenuSection({ restaurant }) {
  return (
    <>
      <div>
        <h3 className="font-medium mb-4">Highlights</h3>
        <Highlight img={restaurant?.highlight} />
      </div>
      <div>
        <h3 className="font-medium mb-4">Menu</h3>
        <Menu img={restaurant?.menu_img} />
      </div>
    </>
  );
}
