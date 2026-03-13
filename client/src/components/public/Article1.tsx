import Img1 from '@/assets/images/img1.jpg';

export default function Article1() {
  return (
    <article className="flex flex-col-reverse gap-1.5">
        <div className="flex flex-col-reverse">
          <h3 className="">Bougie Rose</h3>
          <p className="font-bold">230 MUR</p>
        </div>
        <img src={Img1} className="w-screen h-[50vh] md:max-h-[30vh] md:max-w-[30vw]" />
      </article>
  )
}