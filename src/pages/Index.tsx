import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Globe,
  Mail,
  HeadphonesIcon,
  Rocket,
  Lock,
  Code,
  Star,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              {/* Logo para telas maiores */}
              <img
                src="/HospedaShopLogo.svg"
                alt="Logo HospedaShop"
                className="hidden md:block h-8 md:h-10 w-auto"
              />
              {/* Favicon para telas menores */}
              <img
                src="/favicon.png"
                alt="Favicon HospedaShop"
                className="block md:hidden h-8 w-8"
              />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Começar Agora
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Benefícios
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Planos
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  FAQ
                </button>
                <Button
                  onClick={() => scrollToSection("cta")}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen  pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center flex items-center justify-center">
        <div
          className="absolute inset-0 transform scale-y-[-1] bg-cover bg-center"
          style={{
            backgroundImage: "url('/top2.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-800/70 via-pink-600/70 to-indigo-900/90"></div>{" "}
        {/* Overlay with transparency */}
        <div className="relative max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="my-8 bg-blue-500/70 text-sky-200 hover:bg-blue-400/70">
              <Rocket className="mr-2 w-4 text-blue-400" /> Websites
              profissionais, com email corporativo!
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-10">
              Seu Site Profissional
              <span className="block text-sky-200 mt-2 font-extrabold">
                a partir de R$19,90/mês
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto md:text-2xl">
              A solução completa na nuvem com e-mail corporativo e suporte
              dedicado, para que você foque no que realmente importa: seu
              negócio.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a HospedaShop?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossos planos garantem a qualidade e a segurança de ponta que sua
              empresa precisa para uma presença digital profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Rocket className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Alta Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Garanta uma experiência impecável para seus visitantes. Nossos
                  sites são otimizados para carregar rapidamente em qualquer
                  dispositivo — seja no celular, tablet ou computador —
                  proporcionando agilidade e profissionalismo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Globe className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Hospedagem Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Conte com a potência da nuvem. Nossa hospedagem é rápida,
                  escalável e segura, usando a mesma tecnologia de ponta das
                  maiores empresas para garantir que seu site esteja sempre
                  online e pronto para atender seus clientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Lock className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Segurança SSL Inclusa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Proteja sua marca e os dados de seus clientes desde o início.
                  O certificado SSL garante que a comunicação com seu site seja
                  totalmente criptografada, construindo a confiança necessária
                  para que seus visitantes se sintam seguros ao navegar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Code className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Tecnologia Moderna</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Desfrute de inovação desde o primeiro clique. Utilizamos as
                  mesmas soluções de tecnologia que grandes players do mercado
                  para entregar um site moderno, seguro e sempre atualizado,
                  pronto para os desafios do mundo digital.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">
                  E-mail Corporativo Confiável
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Construa uma imagem profissional com um e-mail personalizado.
                  Crie endereços com o nome da sua empresa (ex:
                  contato@suaempresa.com.br), painel e aplicativo próprios para
                  gerenciar sua conta e fortalecer a credibilidade da sua marca.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                  <HeadphonesIcon className="w-8 h-8 text-orange-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">
                  Suporte Humano Dedicado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Conte com um suporte que realmente se importa. Nada de robôs
                  ou respostas automáticas: nossa equipe de especialistas está
                  pronta para te ouvir, entender sua demanda e resolver qualquer
                  questão com atenção e dedicação.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Middle CTA Section */}
      <section id="cta" className="py-20 bg-indigo-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            “Tudo isso já incluso em qualquer plano, sem taxas extras ou
            pegadinhas.”
          </h2>

          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Quero Meu Site Agora
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos os planos vêm com
              hospedagem e e-mail corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$19,90
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Perfeito para começar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Design básico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 email profissional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 atualização mensal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte técnico</span>
                </div>
                <Button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    const plano = "Básico";
                    const preco = "R$19,90";
                    const mensagem = `Oi! Vi seu site e me interessei no plano "${plano}" por ${preco}/mês. Você pode me passar mais detalhes sobre ele?`;

                    // Número do WhatsApp no formato internacional (exemplo: 55 para Brasil)
                    const numero = "5521987968794";

                    // Monta a URL
                    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                      mensagem
                    )}`;

                    // Redireciona para o WhatsApp
                    window.open(url, "_blank");
                  }}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300 border-2 border-blue-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$29,90
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Para negócios em crescimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Design Aprimorado</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>3 emails profissionais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 atualização mensal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Alterações de design sob demanda</span>
                </div>

                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte extra</span>
                </div>
                <Button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    const plano = "Profissional";
                    const preco = "R$29,90";
                    const mensagem = `Oi! Vi seu site e me interessei no plano "${plano}" por ${preco}/mês. Você pode me passar mais detalhes sobre ele?`;

                    // Número do WhatsApp no formato internacional (exemplo: 55 para Brasil)
                    const numero = "5521987968794";

                    // Monta a URL
                    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                      mensagem
                    )}`;

                    // Redireciona para o WhatsApp
                    window.open(url, "_blank");
                  }}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$59,90
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Para empresas estabelecidas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Design exclusivo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>5 emails profissionais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 atualizações mensais </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte prioritário</span>
                </div>
                <Button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    const plano = "Empresarial";
                    const preco = "R$59,90";
                    const mensagem = `Oi! Vi seu site e me interessei no plano "${plano}" por ${preco}/mês. Você pode me passar mais detalhes sobre ele?`;

                    // Número do WhatsApp no formato internacional (exemplo: 55 para Brasil)
                    const numero = "5521987968794";

                    // Monta a URL
                    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                      mensagem
                    )}`;

                    // Redireciona para o WhatsApp
                    window.open(url, "_blank");
                  }}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Nota sobre taxa de setup */}
          <p className="text-sm text-gray-500 text-center mt-8 max-w-2xl mx-auto">
            * Todos os planos possuem uma taxa única de configuração de{" "}
            <span className="font-semibold text-gray-700">R$250</span>. Essa
            taxa cobre a criação inicial do site, configuração da hospedagem e
            integração do e-mail profissional, garantindo que você já comece com
            tudo pronto e funcionando.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essas empresas confiam na HospedaShop para construir uma presença
              digital profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Tá super aprovado! Você é muito bom no que faz. Tá top.
                  Gostei demais, estou super satisfeito!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full overflow-hidden">
                    <img
                      src="/sxenglish.jpg" // Substitua pelo caminho da imagem do avatar
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>{" "}
                  <div className="ml-3">
                    <p className="font-semibold">
                      Rafael Carloto
                      <span className="text-sm text-gray-500 ml-2">
                        || CEO,
                        <a
                          href="https://smartxenglish.com.br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline ml-2"
                        >
                          SmartXEnglish
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Boa tarde, Daniel! Gostaria de agradecer pela atualização do
                  nosso site. Ficou ótimo. Muito obrigado pela atenção de
                  sempre. Super recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full overflow-hidden">
                    <img
                      src="/lliz.jpg" // Substitua pelo caminho da imagem do avatar
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>{" "}
                  <div className="ml-3">
                    <p className="font-semibold">
                      Dariney Braga{" "}
                      <span className="text-sm text-gray-500 ml-2">
                        || CEO,
                        <a
                          href="https://lliz.com.br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline ml-2"
                        >
                          Lliz Ambiental
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como funciona o processo de criação do site?
              </AccordionTrigger>
              <AccordionContent>
                Após a contratação, nossa equipe entrará em contato em até 24h
                para entender suas necessidades. Você poderá escolher um dos
                modelos de template disponíveis, que será personalizado com as
                informações e identidade do seu negócio. O site é criado em até
                7 dias úteis, com possibilidade de solicitar ajustes durante o
                processo. Após a aprovação, seu site fica online imediatamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                O que eu recebo ao contratar um dos planos?
              </AccordionTrigger>
              <AccordionContent>
                Todos os planos incluem: 1 site moderno, que funciona em
                qualquer celular ou computador, seguro com cadeado SSL,
                hospedagem gratuita, e-mail profissional, além de suporte para
                esclarecimento de dúvidas, ajuda com os serviços e todas as
                atualizações de segurança. O domínio é pago separadamente pelo
                cliente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Posso cancelar meu plano a qualquer momento?
              </AccordionTrigger>
              <AccordionContent>
                Nossos contratos têm duração mínima de 1 ano. Após este período,
                você pode cancelar a qualquer momento com 30 dias de
                antecedência. Durante o período de contrato, oferecemos 99,9% de
                uptime (seu site no ar).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Como funciona o email profissional?
              </AccordionTrigger>
              <AccordionContent>
                Configuramos seu e-mail profissional (ex:
                seu-nome@seudominio.com.br), que você pode acessar pelo webmail
                da Zoho ou configurar em programas como Outlook, Gmail ou no
                celular. Os planos inclui de 1 a 5 emails com 5GB de espaço.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Diferença entre o suporte básico, extra e prioritário?
              </AccordionTrigger>
              <AccordionContent>
                O suporte básico inclui ajuda para dúvidas gerais e orientações
                sobre o site. O suporte extra oferece respostas mais rápidas e
                ajuda com pequenas alterações. O suporte prioritário garante
                atendimento imediato para problemas críticos e alterações
                urgentes, com prioridade máxima na fila de atendimento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Preciso comprar o domínio separadamente?
              </AccordionTrigger>
              <AccordionContent>
                Sim, o domínio é pago separadamente pelo cliente. Podemos ajudar
                na escolha e registro do domínio, que custa em média R$40/ano
                para .com.br. Isso garante que o domínio seja de sua propriedade
                total.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              As dúvidas que mais recebemos — respondidas de forma clara e
              direta
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Quanto tempo leva para meu site ficar pronto?
              </AccordionTrigger>
              <AccordionContent>
                Em até 24h após a contratação entramos em contato para alinhar
                tudo. O site é entregue em até <strong>7 dias úteis</strong>, já
                com sua identidade visual e informações. Ajustes podem ser
                solicitados antes da publicação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                O que está incluído no plano?
              </AccordionTrigger>
              <AccordionContent>
                Você recebe um site moderno que funciona em qualquer celular ou
                computador, hospedagem, certificado de segurança (SSL), e-mail
                profissional, suporte e todas as atualizações necessárias. O
                domínio é registrado à parte (cerca de R$40/ano).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Preciso comprar o domínio separado?
              </AccordionTrigger>
              <AccordionContent>
                Sim, mas é simples e barato: custa em média R$40/ano no .com.br.
                Nós ajudamos a registrar e o domínio fica em seu nome — ou seja,
                é 100% seu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Posso atualizar o site depois?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Você pode pedir alterações a qualquer momento de acordo com
                seu plano. Temos uma equipe dedicada para fazer ajustes e
                melhorias sempre que precisar. O suporte é humano, sem robôs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Como funciona o e-mail profissional?
              </AccordionTrigger>
              <AccordionContent>
                Criamos endereços como <em>seunome@seudominio.com.br</em>. Eles
                funcionam em qualquer celular ou programa como Gmail e Outlook.
                Cada conta tem até 5GB de espaço, suficiente para milhares de
                mensagens.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                E se eu quiser cancelar?
              </AccordionTrigger>
              <AccordionContent>
                O contrato inicial é de 12 meses. Depois disso, você pode
                cancelar a qualquer momento sem burocracia. Durante o período,
                garantimos que seu site ficará sempre no ar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                O site vai aparecer no Google?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Todos os sites já são entregues com SEO básico, o que ajuda
                sua empresa a ser encontrada no Google.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                O site funciona em celular e tablet?
              </AccordionTrigger>
              <AccordionContent>
                Com certeza. Todos os sites são <strong>responsivos</strong>, ou
                seja, se adaptam a qualquer tela — celular, tablet ou
                computador.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 bg-indigo-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a outras empresas que já transformaram sua presença online
            conosco. Comece hoje mesmo e veja a diferença!
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Quero Meu Site Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center">
                  <img
                    src="/HospedaShopLogoLight.svg"
                    alt="Logo HospedaShop"
                    className=" w-full max-h-10"
                  />
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                A Hospedashop cria sites profissionais completos, com hospedagem
                em nuvem, e-mail personalizado e suporte dedicado. Sua presença
                online de alto nível começa aqui, com tudo que sua empresa
                precisa.
              </p>
              <div className="text-gray-400">
                <p>📧 atendimento@hospeda.shop</p>
                <p>📱 (21) 98796-8794</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="hover:text-white transition-colors"
                  >
                    Benefícios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-white transition-colors"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white transition-colors"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Criação de Sites</li>
                <li>Hospedagem em Nuvem</li>
                <li>Email Corporativo</li>
                <li>Suporte Técnico Humano</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HospedaShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
