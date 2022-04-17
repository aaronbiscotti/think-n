import React from 'react'

const 404 = () => {
  return (
    <div class="container text-center py-12 mx-auto">
        <h1 class="text-4xl font-semibold mb-4">Pagina niet gevonden</h1>
        <p class="text-gray-700 mb-10">Sorry, de pagina die je zoekt kunnen we niet vinden. Misschien kun je de zoekfunctie proberen?</p>
        <a href="#" class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 tracking-wider uppercase text-sm">&larr; Terug naar home</a>
    </div>
  )
}

export default 404