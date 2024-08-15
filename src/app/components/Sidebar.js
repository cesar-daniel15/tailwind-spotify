import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react';

export function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className='space-y-5'>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-100'>
                    <HomeIcon/>
                    Home
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-100'>
                    <Search/>
                    Search
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-100'>
                    <Library/>
                    Your Library
                </a>
            </nav>
            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 1</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 2</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 3</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 4</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 5</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 6</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 7</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 8</a>
                <a href="" className='text-sm text-zinc-500 hover:text-zinc-100'>PlayList Name 9</a>
            </nav>
        </aside>
    )
} 