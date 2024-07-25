function Footer()
{
    return(

        <>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t"
    }}
  />
  <footer className="bg-background text-foreground p-4">
    <div className="flex justify-center space-x-4 mb-4">
      <a href="#" className="text-muted-foreground hover:text-muted">
        <img
          aria-hidden="true"
          alt="facebook"
          src="https://openui.fly.dev/openui/24x24.svg?text=🔵"
        />
      </a>
      <a href="#" className="text-muted-foreground hover:text-muted">
        <img
          aria-hidden="true"
          alt="instagram"
          src="https://openui.fly.dev/openui/24x24.svg?text=📷"
        />
      </a>
      <a href="#" className="text-muted-foreground hover:text-muted">
        <img
          aria-hidden="true"
          alt="twitter"
          src="https://openui.fly.dev/openui/24x24.svg?text=🐦"
        />
      </a>
      <a href="#" className="text-muted-foreground hover:text-muted">
        <img
          aria-hidden="true"
          alt="google"
          src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
        />
      </a>
      <a href="#" className="text-muted-foreground hover:text-muted">
        <img
          aria-hidden="true"
          alt="youtube"
          src="https://openui.fly.dev/openui/24x24.svg?text=▶️"
        />
      </a>
    </div>
    <div className="text-center">
      <nav className="flex justify-center space-x-6 mb-2">
        <a href="#" className="text-muted-foreground hover:text-muted">
          Home
        </a>
        <a href="#" className="text-muted-foreground hover:text-muted">
          News
        </a>
        <a href="#" className="text-muted-foreground hover:text-muted">
          About
        </a>
        <a href="#" className="text-muted-foreground hover:text-muted">
          Contact Us
        </a>
        <a href="http://localhost:5173/ourteam" className="text-muted-foreground hover:text-muted">
          Our Team
        </a>
      </nav>
      <p className="text-muted-foreground text-sm">
        Copyright © 2024, Designed by Code Hunters
      </p>
    </div>
  </footer>
</>

    </>
    )
}
export default Footer