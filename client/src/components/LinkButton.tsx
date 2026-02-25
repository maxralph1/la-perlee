export default function LinkButton({htmlId, text, additionalStyling}) {
  return (
    <>
    {/**
    <a href={`#${ htmlId }`} className={`relative block lowercase font-bold border border-2 px-3 md:px-4.5 py-1 md:py-1.5 bg-gray-100 opacity-30 ${ additionalStyling }`}>
        <span className="relative z-50">{ text }</span>
    </a>
    */}
    <a href={`#${ htmlId }`} className={`block lowercase font-bold border border-2 px-3 md:px-4.5 py-1 md:py-1.5 bg-gray-100 opacity-80 hover:opacity-30 focus:opacity-30 focus:scale-110 transition-all duration-700 ease-in-out text-black ${ additionalStyling }`}>
      <span className="relative z-50">{ text }</span>
    </a>
    </>
  )
}