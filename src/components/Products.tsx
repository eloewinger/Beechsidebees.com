import React from 'react';
import { Button } from '@/components/ui/button';
import honeyJar from '@/assets/honey-jar-product.jpg';
import wildflower12oz from '@/assets/honey-jar-v7.jpg';
import honeyJar16oz from '@/assets/honey-jar-v5.jpg';
import cinnamonHotHoney from '@/assets/honey-jar-v6.jpg';
import brazilianPepper from '@/assets/honey-jar-v8.jpg';
import miniHoneyBear from '@/assets/mini-honey-bear.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  size: string;
  image: string;
  badge?: string;
  soldOut?: boolean;
  imageClassName?: string;
}
const products: Product[] = [{
  id: 1,
  name: "Wildflower Honey",
  description: "Our signature blend featuring the diverse wildflowers of Ponce Inlet. Light, floral, and perfectly sweet.",
  price: "$15",
  size: "12 oz",
  image: wildflower12oz,
  badge: "Best Seller"
}, {
  id: 2,
  name: "Wildflower Honey",
  description: "Same amazing honey, bigger jar! Perfect for honey lovers and larger households.",
  price: "$20",
  size: "16 oz",
  image: honeyJar16oz
}, {
  id: 3,
  name: "Honey with Raw Honeycomb",
  description: "Experience honey in its purest form, straight from the comb. Chew it, spread it, or add it to your charcuterie board.",
  price: "$18",
  size: "12 oz",
  image: honeyJar,
  badge: "Sold Out",
  soldOut: true
}, {
  id: 4,
  name: "Cinnamon Hot Whipped Honey",
  description: "Try something different. This treat infuses our wildflower honey with spicy chili pepper and aromatic cinnamon, whipped together into a delightfully creamy blend.",
  price: "$15",
  size: "10 oz",
  image: cinnamonHotHoney
}, {
  id: 5,
  name: "Black Mangrove Honey",
  description: "Light and thin with hints of butterscotch, this honey is a local gem and sells fast during Mangrove Season (May-July).",
  price: "$15",
  size: "12 oz",
  image: honeyJar,
  badge: "Seasonal Item"
}, {
  id: 6,
  name: "Brazilian Pepper Honey",
  description: "Naturally bold, this honey has a distinct peppery kick. Not spicy, but warm. It's the perfect addition to homemade sauces or marinades.",
  price: "$15",
  size: "12 oz",
  image: brazilianPepper,
  badge: "Seasonal Item"
}, {
  id: 7,
  name: "Mini Honey Bear",
  description: "These mini honey bear are filled with seasonal honey and make the perfect little gift. They're equal parts delicious and adorable!",
  price: "$5",
  size: "2 oz",
  image: miniHoneyBear,
  imageClassName: "object-contain p-4"

}];
const Products: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary tracking-wider uppercase">
            Our Products
          </span>
          <div className="h-0.5 w-12 bg-gradient-honey mx-auto mt-2 mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nature's Sweetest Gift
          </h2>
          <p className="text-lg text-muted-foreground">Each jar of honey is carefully harvested and bottled by hand, preserving all the natural goodness.


        </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-muted">
                {product.badge && <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${product.soldOut || product.badge === 'Coming Soon' ? 'bg-muted text-muted-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {product.badge}
                  </span>}
                <img src={product.image} alt={product.name} className={`w-full h-full bg-muted transition-transform duration-500 group-hover:scale-105 ${product.imageClassName ?? 'object-cover'}`} />
                {product.soldOut && <div className="absolute inset-0 flex items-center justify-center bg-foreground/45">
                    <span className="rounded-full bg-background/95 px-5 py-3 font-display text-2xl font-semibold text-foreground shadow-soft">
                      Bee back soon
                    </span>
                  </div>}
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.size}</p>
                  </div>
                  <span className="font-display text-2xl font-bold text-secondary">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <Button variant={product.soldOut || product.badge === 'Coming Soon' ? 'outline' : 'honey'} className="w-full mt-4" onClick={scrollToContact} disabled={product.soldOut || product.badge === 'Coming Soon'}>
                  {product.soldOut ? 'Sold Out' : product.badge === 'Coming Soon' ? 'Coming Soon' : 'Request to Order'}
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Products;
