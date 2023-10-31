import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo}/>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam, autem praesentium nulla nemo nam, eum deserunt neque assumenda obcaecati nisi, explicabo quae dolore est?
          </p>
          <p>© Evogym Tüm Hakları Saklıdır</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Bağlantılar</h4>
            <p className="mt-5">Kitlesel yaşlanmayı geciktirici klinik </p>
            <p className="mt-5">Hamilelere özel programlar</p>
            <p>Her yaş ve bedene özel programlar</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Bize Ulaşın</h4>
            <p className="mt-5">Korku diyarının kahkaha zamanına ihtiyaç var..</p>
            <p>(333)425-7384</p>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer