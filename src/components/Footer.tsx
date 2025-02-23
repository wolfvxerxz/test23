import Footer2 from "./Footer2"

export default function Footer() {
  return (
    <footer
      className="relative py-24"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-0x08TkvrueWKPSGKlY353SDOESulUe.png")',
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
      }}
    >
      <Footer2 />
    </footer>
  )
}

