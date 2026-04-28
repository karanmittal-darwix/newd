"use server";

export async function submitDemoRequest(formData: {
  name: string;
  company: string;
  email: string;
  phone: string;
  useCase: string;
}) {
  // Backend Validation
  if (!formData.name || formData.name.trim() === "") {
    return { success: false, error: "Full Name is required." };
  }
  if (!formData.company || formData.company.trim() === "") {
    return { success: false, error: "Company Name is required." };
  }
  if (!formData.email || formData.email.trim() === "") {
    return { success: false, error: "Business Email is required." };
  }
  
  // Basic Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!formData.phone || formData.phone.trim() === "") {
    return { success: false, error: "Phone Number is required." };
  }
  if (!formData.useCase || formData.useCase.trim() === "") {
    return { success: false, error: "Use Case is required." };
  }

  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would send an email or save to another database here
    console.log("Demo request received:", formData);
    
    return { success: true, id: "demo_" + Date.now() };
  } catch (error) {
    console.error("Error processing request:", error);
    return { success: false, error: "Failed to process request" };
  }
}
