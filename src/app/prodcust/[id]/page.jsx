"use client";
import Image from "next/image";
import PrivateRoute from "@/Components/PrivateRoute";
import ProdCustDisplay from "@/Components/ProdCustDisplay";
import React, { useEffect, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiPauseCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { shuffleArray } from "@/functions/suffle";

const ProdcustDetail = ({ params }) => {

    let { data } = useSelector(state => state.data)
    const this_prodcust = data?.find((prod) => prod.id == params.id)

    const { id, readable, title, title_short, link, duration, rank, explicit_lyrics, explicit_content_lyrics, explicit_content_cover, preview, md5_image, artist, album, type } = this_prodcust || {}

    const [audio] = useState(new Audio(preview));
    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, SetCurrentTime] = useState(0)
    const [audioDuraiton, setAudioDuration] = useState(0)

    const [suf, setsuf] = useState([])





    useEffect(() => {

        audio.src = preview;
        audio.load();


        const loadData = () => {
            setAudioDuration(audio.duration);
        }

        audio.addEventListener('loadedmetadata', loadData);


        return () => {
            audio.removeEventListener('loadedmetadata', loadData);
        };
    }, [audio, preview]);



    useEffect(() => {
        audio.play();
        setIsPlaying(true);
        setAudioDuration(audio.duration)

        return () => {
            audio.pause();
        };
    }, [audio]);

    useEffect(() => {
        const suffleData = shuffleArray(data)
        setsuf(suffleData)
    }, [data])


    const handleMusicToggle = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };


    const handleTrack = (e) => {
        const track = e.target.value;
        audio.currentTime = track;

        if (duration == track) {
            SetCurrentTime(0)
            setIsPlaying(true)
            return
        }
        SetCurrentTime(track)
        setIsPlaying(true)
        audio.play()

    };





    return (
        <PrivateRoute>
            <div className="w-full flex flex-col justify-center items-start gap-[20px] ">
                <div className="w-full h-[346px] relative">
                    <Image alt="details image" src={album?.cover_xl} width={700} height={400} className="w-full h-full object-cover" />

                    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-[#00000042]">

                        <button className="text-white text-[65px]">
                            {isPlaying ?
                                <RiPauseCircleLine onClick={handleMusicToggle} />
                                :
                                <IoPlayCircleOutline onClick={handleMusicToggle} />
                            }
                        </button>

                        <input type="range" value={currentTime} max={audioDuraiton} min={0} onChange={handleTrack} className="audioRange" />

                    </div>

                    <p className="absolute left-[40px] top-[20px] text-[18px] font-[600] text-white">{title}</p>
                </div>

                <p className="font-[600] text-[18px] text-white max-w-[882px]">{"Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked"}</p>
                {
                    <ProdCustDisplay title={"Related"} data={suf} />
                }

            </div>
        </PrivateRoute>
    );
};

export default ProdcustDetail;
