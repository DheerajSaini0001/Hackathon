import { useEffect, useState } from "react";

function Fooditem() {

  let [foodDetailsData, setfoodDetailsData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("http://localhost:8000/FoodDetails");
      const jsonresponse = await response.json();
    
      setfoodDetailsData(jsonresponse);
    };
    fetchData();
  },[]);
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
  <div className="bg-[var(--background)] text-[var(--foreground)] p-4 overflow-x-hidden">
    <div className="container mx-auto ">
 
       <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
   
           {foodDetailsData.map((item, index)=>(  
           <div className="text-center">
            <img
              src={`http://localhost:8000/image/${item.dishimage}`}
              alt="food"
              className="mx-auto mb-4 rounded-full h-40 w-40  border-gray-900 border-4 "
            />
            <h3 className="text-xl font-semibold">{item.dishname}</h3>
            <p className="text-lg">₹{item.dishprice}</p>
            <button className="shadow-4xl shadow-green-400 from-neutral-50 border-2 border-cyan-700 rounded-xl bg-slate-300 " ><div className="mx-4">Buy</div> </button>
            </div>
        
          ))}
         
 </div>
        <div className="text-center mt-8">
        </div>
      
      <section className="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src=""
              alt="Restaurant Interior"
              className="rounded-lg"
            />
          </div>
         
        </div>
         <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Delicious Burgers Made from the Freshest Ingredients
            </h2>
            <p className="text-lg mb-6">
              Since 1995, we have been serving the best burgers and steaks in
              town. Our commitment to quality and taste is unmatched.
            </p>
            <p className="text-lg">
              Join us for a meal and experience the difference.
            </p>
          </div>
      </section>
    </div>
  </div>


      </>
    )
  }
  
  export default Fooditem;