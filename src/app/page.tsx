import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';
import { NavigationButtons } from './components/NavigationButtons';
import { Playlists } from './components/Playlists';
import { MixGrid } from './components/MixGrid';

export default function Home(){
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <NavigationButtons />

          <h1 className='mt-10 font-semibold text-2xl'>Good Afternoon</h1>
          <Playlists />
        

          <h1 className='mt-10 font-semibold text-2xl'>Made for You</h1>
          <MixGrid />

        </main>
      </div>
      <Footer />
    </div> 
  )
}
