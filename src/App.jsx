import { Routes, Route } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import Home from './pages/Home'
import ResumeBuilder from './pages/ResumeBuilder'
import Navbar from './components/Navbar'
import { Toaster } from 'sonner'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  console.error('Missing Clerk Publishable Key')
}

function App() {
  if (!clerkPubKey) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
          <p className="text-muted-foreground">
            Please add your Clerk publishable key to the .env file
          </p>
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/builder"
              element={
                <>
                  <SignedIn>
                    <ResumeBuilder />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </ClerkProvider>
  )
}

export default App 