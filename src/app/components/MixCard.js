import Image from 'next/image';

export function MixCard({ title, artists }) {
    return (
        <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.png" width={100} height={100} className="w-full" alt="Capa do álbum" />
            <strong className='font-semibold'>{title}</strong>
            <span className='text-sm text-zinc-500'>{artists}</span>
        </a>
    );
}
