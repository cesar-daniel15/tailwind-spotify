import { MixCard } from './MixCard';

export function MixGrid() {
const mixes = [
    { title: 'Daily Mix 1', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
    { title: 'Daily Mix 2', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
    { title: 'Daily Mix 3', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
    { title: 'Daily Mix 4', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
    { title: 'Daily Mix 5', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
    { title: 'Daily Mix 6', artists: 'Artist Name1, Artist Name2, Artist Name3, ...' },
];

    return (
        <div className='grid grid-cols-6 gap-4 mt-4'>
        {mixes.map(mix => (
            <MixCard key={mix.title} title={mix.title} artists={mix.artists} />
        ))}
        </div>
    );
}
