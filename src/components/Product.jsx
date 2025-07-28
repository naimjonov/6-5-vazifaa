import { Link } from "react-router-dom"

function Product({ prod }) {
  const { title, description, category, price, rating, brand, thumbnail } = prod

  return (
    <Link
      to={`/SingleProduct/${prod.id}`}
      className="relative group bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 max-w-md mx-auto"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{category}</span>
          <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">{description}</p>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-xl font-semibold text-emerald-600">${price}</span>
          <span className="text-sm text-gray-400">{brand}</span>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
    </Link>
  )
}

export default Product
