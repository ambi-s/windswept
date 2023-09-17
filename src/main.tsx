import jsx from "dom-chef";
import wave from "./wave-haikei.svg";

document.querySelector<HTMLDivElement>("#app")!.appendChild(<img src={wave} />);