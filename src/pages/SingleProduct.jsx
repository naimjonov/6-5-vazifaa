import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SingleProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios(`https://dummyjson.com/product/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error.message))
  }, [id])

  return (
    <>
      {product && (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-6">
          <div className="bg-white backdrop-blur-xl bg-opacity-80 shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl transition-transform duration-300 hover:scale-[1.01] border border-purple-200">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 bg-gradient-to-b from-pink-200 to-purple-200 p-8 flex items-center justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-white"
                />
              </div>

              {/* Content Section - centered */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-800">{product.title}</h1>
                <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold shadow-sm">
                    ${product.price}
                  </span>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold shadow-sm">
                    {product.category}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold shadow-sm">
                    ⭐ {product.rating}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200 w-full flex justify-between text-sm text-gray-600">
                  <span>Brand:</span>
                  <span className="font-semibold text-gray-800">{product.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProduct
