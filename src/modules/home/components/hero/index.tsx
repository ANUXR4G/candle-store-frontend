import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e8e0]">
      {/* Hero Section */}
      <section className="container mx-auto px-16 py-16 md:py-24 flex flex-col md:flex-row items-center h-screen">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Custom Dried Flower Bouquets</h1>
          <Link href="/dk/store">
          <button className="bg-[#e8d1c5] px-8 py-2 rounded-full text-sm uppercase tracking-wider mt-6">Shop</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Dried flowers in vases"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-[#ecdfd7] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Custom Bouquets"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#e8d1c5] rounded-t-3xl pt-12 pb-8 px-6 -mt-8 text-center w-full max-w-xs">
                <h3 className="font-serif text-xl mb-3">Custom Bouquets</h3>
                <p className="text-sm mb-4">
                  We create the perfect blend of dried flowers to match your style and home decor. Custom orders are our
                  specialty.
                </p>
                <Link href="#" className="text-xs uppercase tracking-wider underline">
                  Read more
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Occasion Flowers"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#e8d1c5] rounded-t-3xl pt-12 pb-8 px-6 -mt-8 text-center w-full max-w-xs">
                <h3 className="font-serif text-xl mb-3">Occasion Flowers</h3>
                <p className="text-sm mb-4">
                  Special flowers for your special day. Our dried arrangements make perfect gifts and keepsakes for any
                  occasion.
                </p>
                <Link href="#" className="text-xs uppercase tracking-wider underline">
                  Read more
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Premade Bouquets"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#e8d1c5] rounded-t-3xl pt-12 pb-8 px-6 -mt-8 text-center w-full max-w-xs">
                <h3 className="font-serif text-xl mb-3">Premade Bouquets</h3>
                <p className="text-sm mb-4">
                  Our finest and most popular dried flower arrangements ready to ship directly to your home.
                </p>
                <Link href="#" className="text-xs uppercase tracking-wider underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Ideas Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">Gift Ideas That Last Longer</h2>
          <p className="text-sm">
            Our curated dried flower collections are perfect for birthdays, housewarmings, or just because. Unlike fresh
            flowers, our dried arrangements will bring joy and beauty to any space for months or even years. Each
            bouquet is carefully crafted with sustainably sourced botanicals and comes in eco-friendly packaging.
          </p>
          <button className="bg-[#e8d1c5] px-8 py-2 rounded-full text-sm uppercase tracking-wider mt-4">
            Shop gifts
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Dried palm leaves in a vase"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">See What's Popular</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-2">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Popular product ${item}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-sm">$45.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#ecdfd7] py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-[#e8d1c5] rounded-full p-12 max-w-lg text-center">
            <h2 className="text-3xl font-serif mb-4">Talk To Our Staff</h2>
            <p className="text-sm mb-6">
              Have questions about our products? Want to discuss custom arrangements? Our friendly team is here to help
              you find the perfect dried flowers for your space or occasion.
            </p>
            <button className="bg-[#f5e8e0] px-8 py-2 rounded-full text-sm uppercase tracking-wider">Let's talk</button>
          </div>
        </div>
      </section>
    </div>
  )
}
