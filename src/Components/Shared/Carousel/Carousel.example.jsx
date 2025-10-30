import Carousel from './Carousel';

// Example usage of the Carousel component
const CarouselExample = () => {
  // Example 1: Image slides with overlay content
  const imageSlides = [
    {
      type: 'image',
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      overlay: true,
      content: {
        title: 'Welcome to Our Platform',
        description: 'Discover amazing products from local farmers'
      }
    },
    {
      type: 'image',
      src: 'https://example.com/image2.jpg',
      alt: 'Image 2',
      overlay: true,
      content: {
        title: 'Fresh Produce',
        description: 'Get the freshest fruits and vegetables'
      }
    }
  ];

  // Example 2: Custom content slides
  const contentSlides = [
    {
      type: 'content',
      content: (
        <div className="text-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
          <p className="text-xl mb-6">Get 20% off on your first order</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full">
            Claim Now
          </button>
        </div>
      )
    },
    {
      type: 'content',
      content: (
        <div className="text-center p-10 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-xl mb-6">Check out our latest products</p>
          <button className="bg-white text-green-600 font-bold py-2 px-6 rounded-full">
            Shop Now
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center my-8">Carousel Component Examples</h1>
      
      {/* Image Carousel Example */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Image Carousel with Overlay</h2>
        <Carousel 
          slides={imageSlides}
          autoPlay={true}
          delay={3000}
        />
      </div>
      
      {/* Content Carousel Example */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Custom Content Carousel</h2>
        <Carousel 
          slides={contentSlides}
          autoPlay={true}
          delay={4000}
          showNavigation={false}
        />
      </div>
    </div>
  );
};

export default CarouselExample;