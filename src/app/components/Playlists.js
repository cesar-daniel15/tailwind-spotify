import Image from 'next/image';
import { Play } from 'lucide-react';

const playlists = [
    { name: 'Fl4me Album 1' },
    { name: 'Fl4me Album 2' },
    { name: 'Fl4me Album 3' },
    { name: 'Fl4me Album 4' },
    { name: 'Fl4me Album 5' },
    { name: 'Fl4me Album 6' },
];

export function Playlists(){
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {playlists.map((playlist) => (
            <a key={playlist.name} className="bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.png" width={100} height={100} alt="Capa do album" />
                <strong>{playlist.name}</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
                </button>
            </a>
            ))}
        </div>
    )
}