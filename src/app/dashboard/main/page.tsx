export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Bienvenidos al contador con Next.js
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          Por la Navbar podes acceder al contador
        </div>
      </div>
    </div>
  );
}
