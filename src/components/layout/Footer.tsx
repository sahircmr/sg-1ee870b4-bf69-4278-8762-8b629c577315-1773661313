import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
              IntPurple Technologies
            </h3>
            <p className="text-sm text-muted-foreground">
              Building intelligent software that empowers businesses to grow and serve their users better.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#healthcare" className="text-muted-foreground hover:text-foreground transition-colors">Healthcare Software</Link></li>
              <li><Link href="/services#web" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="/services#mobile" className="text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#ai" className="text-muted-foreground hover:text-foreground transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bangalore, Bahrain, UAE</li>
              <li>UK, Malta, Kozhikode</li>
              <li><a href="mailto:Contact@intpurple.com" className="hover:text-foreground transition-colors">Contact@intpurple.com</a></li>
              <li><a href="tel:+917561057363" className="hover:text-foreground transition-colors">+91-7561057363</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IntPurple Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}