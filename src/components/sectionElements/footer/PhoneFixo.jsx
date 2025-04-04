import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { FaWhatsapp } from "react-icons/fa";
import content from "../../../content/content";

const whatsappContactLink = `${content.texts.links.phoneFixo}`;

function PhoneFixo({ LightMode }) {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <FaWhatsapp size={24} color={LightMode ? "black" : "white"} />

        <a
          href={whatsappContactLink}
          target="_blank"
          className="hover:underline"
        >
          {content.texts.infos.phoneFixo}
        </a>
      </div>
    </MotionDivDownToUp>
  );
}

export default PhoneFixo;
