import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">AI Resume Builder</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/builder">
            <Button variant="ghost">Build Resume</Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  )
} 