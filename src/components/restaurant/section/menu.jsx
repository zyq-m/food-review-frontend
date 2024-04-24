import Highlight from "../highlight";
import Menu from "../menu";

import { highlight, menu } from "../../../data/restaurant";

export default function MenuSection() {
  return (
    <>
      <Highlight img={highlight} />
      <Menu img={menu} />
    </>
  );
}
