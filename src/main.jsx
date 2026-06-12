import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Compass,
  Globe2,
  Instagram,
  Linkedin,
  Menu,
  ShieldCheck,
  X,
  Target,
  Eye,
  Zap,
  Users,
  Search,
  FileText,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { Markets } from "./components/Markets";
import { ProductPage } from "./components/product/ProductPage";
import { getProductPage } from "./data/productPages";
import "./styles.css";
import "./components/product/product.css";

const solutionItems = ["Consultoria financeira", "Investimentos", "Crédito", "Seguros", "Internacional", "Wealth"];

const footerLinks = {
  voce: [
    ["Consultoria financeira", "/para-voce/consultoria-financeira"],
    ["Investimentos", "/para-voce/investimentos"],
    ["Crédito", "/para-voce/credito"],
    ["Seguros", "/para-voce/seguros"],
    ["Internacional", "/para-voce/internacional"],
    ["Wealth", "/para-voce/wealth"],
  ],
  empresa: [
    ["Investimentos", "/para-empresa/investimentos"],
    ["Crédito", "/para-empresa/credito"],
    ["Seguros", "/para-empresa/seguros"],
  ],
};

const logoDimensions = {
  width: 831,
  height: 213,
};

const socialLinks = [
  ["Instagram", "https://www.instagram.com/vivasi.wp/", Instagram],
  ["LinkedIn", "https://www.linkedin.com/company/vivasi-wp/", Linkedin],
  ["WhatsApp", "https://wa.me/5585920000155", WhatsAppIcon],
];

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1 4.9A9.8 9.8 0 0 0 3.7 16.7L3 21l4.4-.7A9.8 9.8 0 0 0 21 11.8a9.7 9.7 0 0 0-1.9-6.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.8 8.6c.2-.4.4-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.6-.5c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.6v.5c0 .4-.1.7-.5.9-.5.3-1.2.5-2 .4-2.9-.2-6.3-3.1-6.8-6.1-.1-.8.1-1.5.4-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const megaMenus = {
  voce: {
    title: "Para você",
    eyebrow: "Diagnóstico financeiro 360",
    description: "Entenda seus principais pontos fortes e estratégia para o futuro.",
    cta: "FAÇA SEU DIAGNÓSTICO",
    ctaHref: "#contato",
    items: [
      {
        label: "Consultoria financeira",
        description: "Plano financeiro completo",
        href: "/para-voce/consultoria-financeira",
        Icon: FileText,
      },
      {
        label: "Investimentos",
        description: "Estratégia de portfólio",
        href: "/para-voce/investimentos",
        Icon: BarChart3,
      },
      {
        label: "Crédito",
        description: "Liquidez planejada",
        href: "/para-voce/credito",
        Icon: CircleDollarSign,
      },
      {
        label: "Seguros",
        description: "Proteção patrimonial",
        href: "/para-voce/seguros",
        Icon: ShieldCheck,
      },
      {
        label: "Internacional",
        description: "Diversificação global",
        href: "/para-voce/internacional",
        Icon: Globe2,
      },
      {
        label: "Wealth",
        description: "Visão integrada",
        href: "/para-voce/wealth",
        Icon: Compass,
      },
    ],
  },
  empresa: {
    title: "Para sua empresa",
    eyebrow: "Soluções empresariais",
    description: "Conecte caixa, crédito e proteção em uma estratégia clara para crescer.",
    cta: "PLANEJAR ESTRUTURA DA EMPRESA",
    ctaHref: "#contato",
    items: [
      {
        label: "Investimentos",
        description: "Portfólio, caixa e câmbio",
        href: "/para-empresa/investimentos",
        Icon: BarChart3,
      },
      {
        label: "Crédito",
        description: "Liquidez planejada",
        href: "/para-empresa/credito",
        Icon: CircleDollarSign,
      },
      {
        label: "Seguros",
        description: "Proteção patrimonial",
        href: "/para-empresa/seguros",
        Icon: ShieldCheck,
      },
    ],
  },
};

const journey = [
  ["Diagnóstico patrimonial completo", "Análise 360° dos seus ativos, passivos, objetivos e perfil de risco.", Search],
  ["Construção do plano personalizado", "Estratégia desenhada sob medida para seu momento de vida e ambições.", FileText],
  ["Gestão contínua e relatórios transparentes", "Acompanhamento profissional com clareza absoluta em cada decisão.", TrendingUp],
];

const partners = [
  { file: "avenue.png", name: "Avenue", width: 565, height: 113 },
  { file: "awt.png", name: "AWT", width: 612, height: 132 },
  { file: "azos.png", name: "Azos", width: 699, height: 142 },
  { file: "bradesco.png", name: "Bradesco", width: 503, height: 113 },
  { file: "btg.png", name: "BTG Pactual", width: 283, height: 113 },
  { file: "icatu.png", name: "Icatu", width: 399, height: 142 },
  { file: "interactive-brokers.png", name: "Interactive Brokers", width: 851, height: 142 },
  { file: "lojacorr.png", name: "LojaCorr", width: 372, height: 142 },
  { file: "mag.png", name: "MAG Seguros", width: 294, height: 142 },
  { file: "mercado-btc.png", name: "Mercado Bitcoin", width: 382, height: 142 },
  { file: "porto.png", name: "Porto", width: 609, height: 142 },
  { file: "safra.png", name: "Safra", width: 386, height: 113 },
  { file: "santander.png", name: "Santander", width: 649, height: 113 },
  { file: "warren.png", name: "Warren", width: 636, height: 142 },
  { file: "xp.png", name: "XP", width: 519, height: 113 },
].map((partner) => ({
  ...partner,
  src: `/imgs/instituicoes-parceiras/${partner.file}`,
}));

const canUseHoverMenu = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const normalizePath = (path) => path.replace(/\/+$/, "") || "/";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = typeof window === "undefined" ? "/" : normalizePath(window.location.pathname);
  const page = getProductPage(currentPath);
  const isAboutPage = currentPath === "/sobre-nos";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />
      <main id="conteudo">
        {page ? (
          <ProductPage page={page}>
            <FinalCta />
          </ProductPage>
        ) : isAboutPage ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <Manifesto />
            <Model />
            <Pillars />
            <Journey />
            <Values />
            <Numbers />
            <Partners />
            <FinalCta />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

function Header({ mobileOpen, setMobileOpen, scrolled }) {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveMenu(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleMobileMenu = (menuName) => {
    setActiveMenu((current) => (current === menuName ? null : menuName));
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${activeMenu ? "is-mega-open" : ""}`}
      onMouseLeave={() => {
        if (canUseHoverMenu()) setActiveMenu(null);
      }}
    >
      <div className="container header-inner">
        <a className="brand" href="/" onClick={closeMenus}>
          <img
            src="/imgs/vivasi-white.png"
            alt="Vivasi Wealth"
            width={logoDimensions.width}
            height={logoDimensions.height}
            decoding="async"
          />
        </a>

        <nav className={`nav ${mobileOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <MegaMenuTrigger
            menuName="voce"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            toggleMobileMenu={toggleMobileMenu}
            closeMobileMenu={closeMenus}
          />
          <MegaMenuTrigger
            menuName="empresa"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            toggleMobileMenu={toggleMobileMenu}
            closeMobileMenu={closeMenus}
          />
          <a onClick={closeMenus} href="/sobre-nos">
            Sobre a Vivasi
          </a>
          <a onClick={closeMenus} className="nav-cta" href="#contato">
            Entrar em contato
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open);
            setActiveMenu(null);
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function MegaMenuTrigger({ menuName, activeMenu, setActiveMenu, toggleMobileMenu, closeMobileMenu }) {
  const menu = megaMenus[menuName];
  const isActive = activeMenu === menuName;

  return (
    <div
      className={`mega-menu-group ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => {
        if (canUseHoverMenu()) setActiveMenu(menuName);
      }}
    >
      <button
        type="button"
        className="mega-menu-trigger"
        aria-expanded={isActive}
        onClick={() => {
          if (canUseHoverMenu()) {
            setActiveMenu(menuName);
          } else {
            toggleMobileMenu(menuName);
          }
        }}
        onFocus={() => {
          if (canUseHoverMenu()) setActiveMenu(menuName);
        }}
      >
        {menu.title} {isActive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {isActive && <MegaMenuPanel menu={menu} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
}

function MegaMenuPanel({ menu, closeMobileMenu }) {
  return (
    <div className="mega-menu-panel" onMouseEnter={() => undefined}>
      <div className="container mega-menu-shell">
        <div className="mega-menu-feature">
          <h2>{menu.eyebrow}</h2>
          <p>{menu.description}</p>
          {menu.cta && (
            <a href={menu.ctaHref} onClick={closeMobileMenu}>
              {menu.cta}
            </a>
          )}
        </div>
        <span className="mega-menu-divider" aria-hidden="true" />
        <div className="mega-menu-options">
          {menu.items.map(({ label, description, href, Icon }) => (
            <a key={href} href={href} onClick={closeMobileMenu}>
              <Icon className="mega-menu-bg-icon" size={96} strokeWidth={1.45} aria-hidden="true" />
              <span>
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-backdrop" aria-hidden="true" />
      <Markets />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <h1>Decisões patrimoniais com clareza, método e independência.</h1>
          <p>
            A Vivasi integra investimentos, crédito, seguros, internacionalização e planejamento patrimonial para
            pessoas, famílias e empresas que buscam organizar, proteger e expandir seu patrimônio com visão de longo
            prazo.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#contato">
              Fale com um especialista <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="#caminhos">
              Conheça nossas soluções
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <Numbers />
      <Pillars />
      <Values />
      <Partners />
      <FinalCta />
    </>
  );
}

function AboutHero() {
  return (
    <section className="hero about-page-hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <Markets />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <h1>Uma casa para decisões patrimoniais relevantes.</h1>
          <p>
            A Vivasi Wealth nasceu para integrar estratégia, independência e relacionamento próximo na gestão de
            patrimônios que exigem clareza, proteção e visão de longo prazo.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#contato">
              Fale com a Vivasi <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="#sobre">
              Conheça nossa visão
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="section manifesto" id="sobre">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <span className="eyebrow">Sobre a Vivasi</span>
          <h2>Patrimônio é história, esforço, escolhas e futuro.</h2>
          <div className="about-text">
            <p>
              Na Vivasi, acreditamos que patrimônio não se resume a números em uma conta. Ele representa liberdade,
              segurança familiar, conquistas construídas ao longo do tempo e a responsabilidade de tomar boas decisões
              para o que vem depois.
            </p>
            <p>
              Não atuamos como uma prateleira de produtos. Nosso trabalho é entender a sua vida financeira com
              profundidade, respeitar seu momento e construir caminhos com método, transparência e visão de longo prazo.
            </p>
            <p>
              Antes de qualquer recomendação, olhamos para sua jornada: objetivos, família, empresas, liquidez,
              investimentos, crédito, proteções, sucessão e tudo aquilo que influencia a preservação e a expansão do
              patrimônio.
            </p>
            <p>
              A Vivasi existe para simplificar o complexo, proteger o que você construiu e transformar decisões
              patrimoniais importantes em planos claros, executáveis e acompanhados de perto.
            </p>
          </div>
          <div className="about-manifesto">
            <span>Manifesto</span>
            <p><i>
              Acreditamos que riqueza não é apenas dinheiro. É liberdade para viver com propósito, segurança para
              proteger quem se ama e legado para inspirar as próximas gerações.
            </i></p>
            <small>Vivasi Wealth</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Model() {
  return (
    <section className="section model">
      <div className="container editorial-grid">
        <Reveal>
          <span className="eyebrow">Nosso modelo</span>
          <h2>Gestão de carteira administrada.</h2>
        </Reveal>
        <Reveal className="editorial-text">
          <p>
            A carteira administrada é a forma mais inteligente de gerir seu patrimônio: entregamos eficiência, estratégia institucional e disciplina contínua.
          </p>
          <p>
            Nossa equipe especializada toma as decisões do dia a dia por você, executando rigorosamente um plano desenhado sob medida para o seu momento de vida, horizonte de investimentos e tolerância a risco.
          </p>
          <p>
            Trabalhamos exclusivamente a seu favor. Sem metas de venda de produtos, sem comissões ocultas e sem vínculo com bancos. Apenas transparência total e alinhamento de interesses.
          </p>
        </Reveal>
      </div>
    </section >
  );
}

function Pillars() {
  const pillars = [
    {
      Icon: Target,
      title: "Independência",
      text: "Sem vínculos com bancos ou instituições financeiras. Nosso único compromisso é com o cliente.",
    },
    {
      Icon: Users,
      title: "Personalização",
      text: "Cada família é única. Cada estratégia é desenhada sob medida, do zero.",
    },
    {
      Icon: Eye,
      title: "Visão Integrada",
      text: "Investimentos, tributos, proteção e sucessão funcionando como um sistema coeso.",
    },
    {
      Icon: Zap,
      title: "Disciplina",
      text: "Processos consistentes, regras claras e decisões baseadas em dados, não em emoção.",
    },
  ];

  return (
    <section className="section pillars-section" id="caminhos">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Diferenciais</span>
          <h2>Por que clientes escolhem a Vivasi.</h2>
        </Reveal>
        <Reveal className="pillars-grid">
          {pillars.map(({ Icon, title, text }) => (
            <article className="pillar-card" key={title}>
              <div className="pillar-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="numbers">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Credibilidade</span>
          <h2>Patrimônio exige números tratados com precisão.</h2>
        </Reveal>
        <Reveal className="number-grid">
          <Stat value="R$ 1,5 bi" label="sob custódia" />
          <Stat value="10 anos" label="de experiência no mercado financeiro" />
          <Stat value="600" label="famílias e empresas acompanhadas" />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label, note }) {
  return (
    <article className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
      {note && <small>{note}</small>}
    </article>
  );
}

function Journey() {
  return (
    <section className="section journey">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Como funciona</span>
          <h2>Três passos para a sua tranquilidade.</h2>
        </Reveal>
        <Reveal className="journey-grid">
          {journey.map(([title, text, Icon], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      Icon: ShieldCheck,
      title: "Transparência total",
      text: "Taxas claras, relatórios compreensíveis e decisões explicadas antes de qualquer movimento relevante.",
    },
    {
      Icon: Target,
      title: "Propósito acima de produto",
      text: "Nosso trabalho não é empurrar soluções prontas. É construir saúde financeira, liberdade e legado.",
    },
    {
      Icon: Eye,
      title: "Resultado com responsabilidade",
      text: "Crescer importa, mas preservar vem primeiro. Cada estratégia equilibra retorno, risco e proteção.",
    },
  ];

  return (
    <section className="section values-section">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Nossos valores</span>
          <h2>Princípios que não abrimos mão.</h2>
        </Reveal>
        <Reveal className="values-grid">
          {values.map(({ Icon, title, text }) => (
            <article key={title}>
              <span className="value-icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Ecossistema</span>
          <h2>Instituições que fazem parte do nosso ecossistema.</h2>
          <p>
            Conectamos nossos clientes às principais instituições financeiras para viabilizar soluções de investimento,
            crédito, proteções financeiras, câmbio e planejamento patrimonial.
          </p>
        </Reveal>
        <Reveal className="partner-marquee">
          <div className="partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <img
                key={`${partner.file}-${index}`}
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}



function FinalCta() {
  return (
    <section className="final-cta" id="contato">
      <div className="container">
        <Reveal className="cta-box">
          <span className="eyebrow">Próximo passo</span>
          <h2>Pronto para organizar as próximas decisões do seu patrimônio?</h2>
          <p>
            Converse com um Wealth Planner da Vivasi e descubra como uma visão integrada pode transformar a forma como
            você investe, protege e planeja o futuro.
          </p>
          <div className="actions">
            <a className="button button-primary" href="mailto:contato@vivasiwealth.com.br">
              Entrar em contato <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <a className="footer-brand-title" href="/">
            <img
              src="/imgs/vivasi-white.png"
              alt="Vivasi Wealth"
              width={logoDimensions.width}
              height={logoDimensions.height}
              decoding="async"
            />
          </a>
          <a href="/sobre-nos">Sobre nós</a>
          <a href="#contato">Contato</a>
          <a href="#">Seja Vivasi <span><small>(em construção)</small></span></a>
        </div>
        <div>
          <h3>Para você</h3>
          {footerLinks.voce.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <h3>Empresa</h3>
          {footerLinks.empresa.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <h3>Redes sociais</h3>
          <div className="social-icons">
            {socialLinks.map(([label, href, Icon]) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Vivasi Wealth é um escritório MFO Powered by AWT / Gestora CVM CNPJ 35.137.445/0001-00</p>
        <p>© 2026 Vivasi Wealth. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
