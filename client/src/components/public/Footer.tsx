export default function Footer() {
  return (
    <div className="fixed right-0 bottom-0 left-0 pt-3 pb-5 px-3 md:px-6 lg:px-8">
      <p className="text-xs">&copy; { new Date().getFullYear() }. <span className="font-semibold">La Perlée.</span></p>
    </div>
  )
}