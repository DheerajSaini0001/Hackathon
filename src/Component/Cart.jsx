function Cart() {  
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
  <div className="max-w-4xl mx-auto p-6 bg-card">
    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
    <div className="border border-border rounded-lg mb-6">
      <div className="grid grid-cols-3 p-4 bg-muted">
        <span className="font-semibold">Products</span>
        <span className="font-semibold">Price</span>
        <span className="font-semibold">Quantity</span>
        <span className="font-semibold">Total</span>
      </div>
      <div className="border-b border-border">
        <div className="grid grid-cols-3 items-center p-4">
          <img
            className="w-10 h-10"
            src="https://placehold.co/40x40?text=💅"
            alt="Fairy Dust Nail Polish"
          />
          <div>
            <span>Fairy Dust</span>
            <br />
            <small>Magical Violet Holographic Jelly Nail Polish</small>
          </div>
          <span>$10.00</span>
          <div className="flex items-center">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 rounded">
              
            </button>
            <span className="mx-2">2</span>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 rounded">
              +
            </button>
          </div>
          <span>$20.00</span>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="grid grid-cols-3 items-center p-4">
          <img
            className="w-10 h-10"
            src="https://placehold.co/40x40?text=🍏"
            alt="Clover Nail Polish"
          />
          <div>
            <span>Clover</span>
            <br />
            <small>Juicy Pear Green Jelly Nail Polish</small>
          </div>
          <span>$10.00</span>
          <div className="flex items-center">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 rounded">
              –
            </button>
            <span className="mx-2">5</span>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 rounded">
              +
            </button>
          </div>
          <span>$50.00</span>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="grid grid-cols-3 items-center p-4">
          <img
            className="w-10 h-10"
            src="https://placehold.co/40x40?text=🌲"
            alt="Fairy Forest Collection"
          />
          <div>
            <span>Fairy Forest Collection</span>
            <br />
          </div>
          <span>$65.00</span>
          <div className="flex items-center">
         input
          </div>
          <span>$65.00</span>
        </div>
      </div>
      <div className="p-4">
        <button className="text-blue-500">&lt; BACK TO SHOPPING</button>
      </div>
    </div>
    <div className="border border-border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
      <div className="flex justify-between py-1">
        <span>Free Shipping Progress:</span>
        <span>$135.00/$300</span>
      </div>
      <p className="text-sm text-muted-foreground">
        You're so close! Spend another $16.00 and let us pay for your shipping
        charges!
      </p>
      <div className="flex justify-between py-1">
        <span>Cart subtotal:</span>
        <span>$135.00</span>
      </div>
      <div className="flex justify-between py-1">
        <span>Shipping &amp; Handling:</span>
        <span>$46.15</span>
      </div>
      <div className="flex justify-between py-1">
        <span>Select a shipping type:</span>
        <span>
          <input
            type="radio"
            name="shipping"
            id="first-class"
            defaultChecked=""
          />
          <label htmlFor="first-class">First Class Mail™ International:</label>
          <span>$46.15</span>
          <br />
          <input type="radio" name="shipping" id="priority-mail" />
          <label htmlFor="priority-mail">Priority Mail International™:</label>
          <span>$70.70</span>
        </span>
      </div>
      <div className="flex justify-between font-semibold border-t border-border pt-2">
        <span>Grand Total:</span>
        <span>$181.15</span>
      </div>
    </div>
  </div>
</>

      
  )
}

export default Cart
