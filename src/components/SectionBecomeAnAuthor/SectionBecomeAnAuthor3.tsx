import { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { Link } from "react-router-dom";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor2: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
          Hayalinizdeki web sayfasını beraber yapalım.
        </span>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
          Bizimle Çalışmak İster Misiniz?
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          Web ve mobil yazılım geliştiricileri ile durmaksızın yeni projeler
          geliştiriyor ve sürekli yeni yazılımcıları ekibimize katıyoruz.
          Aramızda yer almak istiyorsan iletişim formnundan özgeçmiş ve github
          linkini paylaşabilirsin.
        </span>
        <Link to="/contact">
          <ButtonPrimary className="mt-8">
            Beraber Çalışmak İstiyorum
          </ButtonPrimary>
        </Link>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor2;
