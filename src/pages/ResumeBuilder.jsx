import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useToast } from '../hooks/use-toast'
import { generateResume } from '../utils/ai'

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const resume = await generateResume(formData)
      // Handle the generated resume (e.g., show preview, download)
      toast({
        title: "Success",
        description: "Resume generated successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Build Your Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Professional Summary</label>
          <Textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Work Experience</label>
          <Textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Education</label>
          <Textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Skills</label>
          <Textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Resume'}
        </Button>
      </form>
    </div>
  )
} 