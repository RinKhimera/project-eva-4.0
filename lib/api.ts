export const sendContactForm = async (data) => {
  fetch("api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}
