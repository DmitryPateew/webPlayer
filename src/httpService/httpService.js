import {VIDEO_URL} from "../constant/constant";

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export const getVideo = async () => {
    const res = await getResource(VIDEO_URL);
    return res.data.shift();
}