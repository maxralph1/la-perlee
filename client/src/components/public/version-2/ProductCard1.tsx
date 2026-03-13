import Img1 from '@/assets/images/img1.jpg';

export default function ProductCard1() {
  return (
    <div className="shrink-0">
      <a className="flex flex-col-reverse gap-0.5">
        <div className="pt-2">
          <h3 className="font-semibold my-0">Pink Candles</h3>
          <p className="my-0">$20.50</p>
        </div>
        <img
          src={Img1}
          className="h-90 w-75 object-cover"
          alt="Pink Candles"
        />
      </a>
    </div>
  )
}