function Signin() {
    return (
     
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
  <div className="flex items-center justify-center min-h-screen bg-zinc-100">
    <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl">
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Urbee</h1>
        <h2 className="text-xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-zinc-600 mb-6">
          Sign in with your email address and Password.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-zinc-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                type="email"
                id="email"
                defaultValue="johndoe123@xyz.com"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              id="password"
              defaultValue="********"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-green-500" />
              <span className="ml-2 text-zinc-700">Remember me</span>
            </label>
            <a href="#" className="text-zinc-600 hover:text-primary">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200">
            Sign In
          </button>
        </form>
        <p className="mt-6 text-zinc-600">
          Don't have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://placehold.co/600x800"
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>


      </>
    )
  }
  
  export default Signin
  