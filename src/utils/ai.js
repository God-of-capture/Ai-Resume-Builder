import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

export async function generateResume(formData) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const prompt = `Create a professional resume based on the following information:
  
  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  
  Professional Summary:
  ${formData.summary}
  
  Work Experience:
  ${formData.experience}
  
  Education:
  ${formData.education}
  
  Skills:
  ${formData.skills}
  
  Please format this information into a professional resume with proper sections and formatting.`

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
} 