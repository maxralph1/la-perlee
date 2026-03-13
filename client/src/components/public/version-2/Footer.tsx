export default function Footer() {
  return (
    <div className="pt-9 pb-5 px-3 md:px-6 lg:px-8 bg-gray-400">
      
      <section className="pb-5 flex flex-col md:flex-row md:items-center max-md:text-center gap-3">
        <p className="order-2 md:order-1 flex-1 text-xl font-semibold">Our commitment to Green.</p>
        
        <section className="order-1 md:order-2 flex-2 flex flex-col md:flex-row md:justify-end gap-3">
          <ul className="md:flex-1 flex flex-col md:items-end gap-3 md:gap-y-1.5">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <ul className="md:flex-1 flex flex-col md:items-end gap-3 md:gap-y-1.5">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </section>
      </section>
      
      <section className="flex flex-col md:flex-row items-center md:justify-between gap-3 border-t border-black pt-3">
        <p className="text-sm">&copy; { new Date().getFullYear() }. <span className="font-semibold">La Perlée.</span></p>
        <p className="text-end text-xs">A&nbsp;<a href="mailto:maxralph01@gmail.com" className="font-semibold underline">Nukliolọjik</a>&nbsp;creation.</p>
      </section>
    </div>
  )
}