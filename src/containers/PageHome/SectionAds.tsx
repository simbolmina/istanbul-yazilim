import React, { FC } from "react";
import imgAdsDef from "images/ads.png";

export interface SectionAdsProps {
  className?: string;
  imgAds?: string;
}

const SectionAds: FC<SectionAdsProps> = ({
  className = "",
  imgAds = imgAdsDef,
}) => {
  return (
    // <a
    //   href="/#"
    //   className={`nc-SectionAds block text-center mx-auto ${className}`}
    // >
    <div className="text-center">
      <span className=" text-xs text-neutral-600 ">- Entegrasyonlarimiz -</span>
      <img className="mx-auto" src={imgAds} alt="" />
    </div>
    // </a>
  );
};

export default SectionAds;
