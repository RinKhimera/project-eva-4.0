type ContactFormData = {
  name: string
  email: string
  message: string
}

export const sendContactForm = async (data: ContactFormData) => {
  fetch("api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message")
    return res.json()
  })
}
