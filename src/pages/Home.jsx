import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { ArrowRight, Code2, Terminal, GitBranch, Database, Code, Braces } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-[90vh] bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center lg:justify-start">
            <span className="text-sm font-mono bg-primary/10 text-primary px-4 py-1 rounded-full">
              npm install @dev-resume-builder
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
            <span className="text-primary">const</span>{" "}
            <span className="text-purple-500">yourResume</span>{" "}
            <span className="text-primary">=</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              buildCareer()
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-mono">
            // Create a resume that speaks in code. Built by developers, for developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/builder">
              <Button size="lg" className="text-lg w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                {">"} Start Building <Code2 className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto border-primary/20 hover:bg-primary/10">
              <Terminal className="mr-2 h-5 w-5" /> View Examples
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <pre className="rounded-lg bg-black/90 p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                <code className="text-sm font-mono text-gray-300">
                  <span className="text-blue-400">class</span> <span className="text-purple-400">Developer</span> {"{"}
                  <br />
                  {"  "}skills = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'TypeScript'</span>];
                  <br />
                  {"  "}experience = <span className="text-orange-400">5</span>;
                  <br />
                  {"  "}<span className="text-blue-400">async</span> buildResume() {"{"}
                  <br />
                  {"    "}await <span className="text-purple-400">AI</span>.optimize(this.skills);
                  <br />
                  {"  "}{"}"}<br />
                  {"}"}<br />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12 px-4">
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/40 hover:bg-black/50 border border-primary/10 hover:border-primary/20 transition-all">
          <Code className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-mono">Tech-Optimized</h3>
          <p className="text-muted-foreground font-mono">
            {"// "} Syntax-highlighted sections for your technical skills
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/40 hover:bg-black/50 border border-primary/10 hover:border-primary/20 transition-all">
          <GitBranch className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-mono">Version Control</h3>
          <p className="text-muted-foreground font-mono">
            {"// "} Track changes and maintain multiple resume versions
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/40 hover:bg-black/50 border border-primary/10 hover:border-primary/20 transition-all">
          <Braces className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-mono">JSON Export</h3>
          <p className="text-muted-foreground font-mono">
            {"// "} Export your resume in multiple formats including JSON
          </p>
        </div>
      </div>
    </div>
  )
} 