type ContactFormData = {
  name: string
  email: string
  message: string
}

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const res = await fetch("api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to send message")
    return res.json()
  } catch (error: any) {
    console.error("Error sending contact form:", error)
    throw new Error(error.message)
  }
}
