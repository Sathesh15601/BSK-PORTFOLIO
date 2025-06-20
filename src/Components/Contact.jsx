import React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16"
      data-aos="fade-up"
    >
      <Title text1="CONTACT" text2="US" />

      <div
        className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl mx-auto mt-10"
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <div
          className="space-y-5 md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-fuchsia-500">Sathesh Kumar</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm eagerly looking forward to contributing to your organization
            with dedication and enthusiasm.
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:Sathesh15601@gmail.com"
                className="text-blue-400 hover:underline"
              >
                Sathesh15601@gmail.com
              </a>
            </p>
            <p>📍 Location: Villupuram, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="w-full md:w-1/2 border border-fuchsia-800 p-6 rounded-2xl shadow-lg bg-gray-800"
          data-aos="fade-left"
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                width: "100%",
                "& .MuiInputBase-input": {
                  color: "#fff",
                },
                "& .MuiInputLabel-root": {
                  color: "#ccc",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#aaa",
                  },
                  "&:hover fieldset": {
                    borderColor: "#f0abfc", // Light fuchsia on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d946ef", // Fuchsia focus
                  },
                },
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <TextField fullWidth label="First Name" variant="outlined" />
                <TextField fullWidth label="Last Name" variant="outlined" />
              </div>

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#a855f7", // Fuchsia-500
                  "&:hover": { bgcolor: "#9333ea" }, // Fuchsia-600
                  color: "#fff",
                  borderRadius: 2,
                  fontWeight: "bold",
                  py: 1.2,
                  mt: 1,
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
