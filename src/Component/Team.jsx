function Team(){
    return(
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
  <section className="py-16 bg-background" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
      <p className="mt-4 text-muted-foreground">
        We strive to ensure that our customers and product provide the best
        experience possible.
      </p>
      <div className="flex justify-center mt-8 space-x-8">
        <div className="flex flex-col items-center ">
          <img
            src="https://img.freepik.com/premium-photo/young-chef-girl-white-outfit-holding-plate-indian-pakistani-model_561639-4661.jpg"
            alt="Edward Gilmore"
            className="rounded-full mb-2 border-4 border-gray-950"
          />
          <h3 className="text-lg font-semibold text-foreground font-sans f">
            Edward Gilmore
          </h3>
          <p className="text-muted-foreground font-sans ">Founder and CEO</p>
          <div className="flex space-x-2 mt-2">
      
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/William_Orpen_Le_Chef_de_l%27H%C3%B4tel_Chatham%2C_Paris.jpg"
            alt="Lucy Kim"
            className="rounded-full mb-2 border-4 border-gray-950"
          />
          <h3 className="text-lg font-semibold text-foreground font-sans ">Lucy Kim</h3>
          <p className="text-muted-foreground font-sans ">Senior Experience Manager</p>
          <div className="flex space-x-2 mt-2">
       
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/premium-photo/happy-male-chef-dressed-uniform-holding-pot-with-showing-thumbs-up_156779-540.jpg"
            alt="Dan Wilson"
            className="rounded-full mb-2 border-4 border-gray-950"
          />
          <h3 className="text-lg font-semibold text-foreground font-sans ">Dan Wilson</h3>
          <p className="text-muted-foreground font-sans " >Senior Content Manager</p>
          <div className="flex space-x-2 mt-2">
          
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Team