import Image from "next/image";
import Link from "next/link";
import { MdOutlinePlayCircle } from "react-icons/md";

const ProdCustCard = ({ data = {} }) => {

    const { id, readable, title, title_short, link, duration, rank, explicit_lyrics, explicit_content_lyrics, explicit_content_cover, preview, md5_image, artist, album, type } = data || {}


    return (
        <Link href={`/prodcust/${id}`} className="w-[190] h-[190px] rounded-3xl overflow-hidden relative">
            <Image className="w-full h-full object-cover" alt="prodcustImg" src={album?.cover_medium} width={190} height={190} />

            <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-[#00000038]">
                <span className="text-[65px] text-white">
                    <MdOutlinePlayCircle />
                </span>
            </div>
        </Link>
    );
};

export default ProdCustCard;