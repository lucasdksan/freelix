import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen md:flex md:items-center md:justify-center">
      <div className="container mx-auto flex flex-col p-3 gap-6 md:flex-row md:items-center md:justify-center md:gap-9">
        <div className="gap-6 flex flex-col md:gap-4">
          <h1 className="font-roboto not-italic font-bold text-4xl md:text-5xl text-white">Seu valor de hora, calculado de forma rápida.</h1>
          <p className="font-roboto not-italic font-normal text-base text-white">
            Descubra quanto vale o seu trabalho de forma rápida, precisa e sem complicações. <br />
            Ajuste como preferir e gere propostas comerciais e contratos profissionais poucos minutos - Tudo gratuito, sem cadastros e ponto para usar.
          </p>
          <div className="w-full flex gap-3 items-center">
            <span className="font-roboto not-italic font-normal text-base text-white">Vamos iniciar?</span>
          </div>
        </div>
        <div className="w-full h-auto lg:max-w-[520px]">
          <Image
            src="/tab-banner.svg"
            width={420}
            height={308}
            alt="Main banner in first screen"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
}
