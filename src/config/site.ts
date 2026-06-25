import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import logo from "@/assets/brand/logo-vivere-color.png";
import logoSymbol from "@/assets/brand/logo-vivere-symbol.png";
import studioSpace from "@/assets/studio-space.jpg";

export type BenefitIcon =
  | "activity"
  | "balance"
  | "brain"
  | "flexibility"
  | "heart"
  | "mobility"
  | "shield"
  | "smile";

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

/*
 * ============================================================================
 * DADOS DO CLIENTE — EDITE AQUI
 * ============================================================================
 *
 * Este é o principal ponto de edição do site.
 * Quando tiver os dados finais do cliente, comece por este bloco.
 *
 * Tudo aqui é dado público: WhatsApp, Instagram, endereço, textos e links.
 * Não coloque senhas, tokens ou chaves privadas neste arquivo.
 */

const client = {
  studioName: "Studio Pilates Vivere",
  shortName: "Pilates Vivere",

  // WhatsApp: use DDI + DDD + número, somente dígitos. Exemplo: 5511999999999
  whatsappNumber: "+5519991905195",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de saber mais sobre as aulas do Studio Pilates Vivere.",

  experimentalClassMessage:
    "Olá! Vim pelo site do Studio Pilates Vivere e gostaria de marcar uma aula experimental.",

  // Link completo do Instagram.
  instagramUrl: "https://www.instagram.com/studiopilatesvivere/",

  // Endereço e atendimento.
  address: "R. Ari Barroso, 496 - Antonio Zanaga I, Americana - SP, 13474-620",
  schedule: "Atendimento com horário agendado",

  // Textos institucionais curtos usados em SEO, rodapé e chamadas.
  seoTitle: "Studio Pilates Vivere — Aulas de pilates e bem-estar",
  seoDescription:
    "Aulas personalizadas de pilates para todas as idades, com movimento consciente, acolhimento e atenção ao seu ritmo.",
  footerTagline: "Movimento consciente e cuidado próximo para todas as idades.",

  // Link do desenvolvedor no rodapé. Deixe `null` se não quiser link clicável.
  developerUrl: null as string | null,
} as const;

/*
 * ============================================================================
 * LINKS GERADOS AUTOMATICAMENTE
 * ============================================================================
 *
 * Você normalmente não precisa editar este bloco.
 * Ele monta os links de WhatsApp e Google Maps a partir dos dados acima.
 */

const whatsappNumber = client.whatsappNumber.replace(/\D/g, "");
const whatsappBaseUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "https://wa.me/";
const mapQuery = client.address || client.studioName;

/*
 * ============================================================================
 * CONTEÚDO DO SITE
 * ============================================================================
 *
 * Os textos abaixo alimentam as seções da página.
 * Pode editar com segurança mantendo a mesma estrutura de chaves.
 */

export const siteConfig = {
  name: client.studioName,
  shortName: client.shortName,

  seo: {
    title: client.seoTitle,
    description: client.seoDescription,
  },

  brand: {
    logoUrl: logo,
    symbolUrl: logoSymbol,
  },

  links: {
    whatsapp: `${whatsappBaseUrl}?text=${encodeURIComponent(client.whatsappMessage)}`,
    whatsappExperimental: `${whatsappBaseUrl}?text=${encodeURIComponent(client.experimentalClassMessage)}`,
    instagram: client.instagramUrl,
  },

  contact: {
    whatsappNumber,
    whatsappMessage: client.whatsappMessage,
    address: client.address,
    schedule: client.schedule,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
  },

  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Equipe", href: "#equipe" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Galeria", href: "#galeria" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    eyebrow: "Pilates com atenção ao seu ritmo",
    title: "Movimento que acolhe.",
    titleHighlight: "Cuidado que transforma a rotina.",
    description:
      "Aulas personalizadas em um ambiente tranquilo, para você se movimentar com consciência, confiança e leveza.",
    cards: ["Aulas personalizadas", "Para todas as idades", "Agende pelo WhatsApp"],
  },

  about: {
    image: studioSpace,
    imageAlt: "Espaço claro e acolhedor com equipamentos de pilates",
    eyebrow: "Sobre o Studio",
    title: "Um cuidado próximo, seguro e feito para você",
    description:
      "O Studio Pilates Vivere nasceu para cuidar do corpo e da mente por meio do movimento consciente. Cada prática respeita suas necessidades, seus objetivos e o seu tempo.",
    highlights: [
      "Atendimento personalizado",
      "Ambiente acolhedor",
      "Movimento consciente",
      "Prática orientada",
    ],
  },

  team: {
    eyebrow: "Equipe",
    title: "Presença e atenção em cada movimento",
    description:
      "Uma experiência conduzida com escuta, proximidade e exercícios adaptados ao momento de cada aluno.",

    // Cadastre profissionais aqui quando tiver nome, cargo, texto e imagem autorizada.
    members: [] as readonly TeamMember[],

    values: ["Escuta e acolhimento", "Orientação individualizada", "Evolução no seu ritmo"],
    emptyTitle: "Acompanhamento que faz você se sentir à vontade",
    emptyDescription:
      "Nossa apresentação profissional está sendo preparada. Enquanto isso, o compromisso com um atendimento atento já está presente em cada aula.",
  },

  benefitsIntro: {
    eyebrow: "Benefícios",
    title: "Mais qualidade em cada movimento",
    description:
      "Uma prática completa, construída para trazer mais consciência corporal e bem-estar à rotina.",
  },

  benefits: [
    {
      icon: "activity",
      title: "Melhora da postura",
      description: "Mais consciência sobre o alinhamento do corpo nas atividades do dia a dia.",
    },
    {
      icon: "shield",
      title: "Fortalecimento muscular",
      description: "Força funcional desenvolvida de forma progressiva e orientada.",
    },
    {
      icon: "flexibility",
      title: "Mais flexibilidade",
      description: "Movimentos mais livres, leves e amplos, respeitando seus limites.",
    },
    {
      icon: "heart",
      title: "Conforto no movimento",
      description: "Exercícios guiados que ajudam a aliviar tensões da rotina.",
    },
    {
      icon: "balance",
      title: "Melhora do equilíbrio",
      description: "Mais estabilidade e confiança para se movimentar.",
    },
    {
      icon: "mobility",
      title: "Mais mobilidade",
      description: "Articulações mais ativas e movimentos mais fluidos.",
    },
    {
      icon: "brain",
      title: "Bem-estar integral",
      description: "Um momento para conectar corpo, respiração e atenção.",
    },
    {
      icon: "smile",
      title: "Qualidade de vida",
      description: "Mais disposição, autonomia e leveza para aproveitar o cotidiano.",
    },
  ] satisfies ReadonlyArray<{
    icon: BenefitIcon;
    title: string;
    description: string;
  }>,

  testimonialsIntro: {
    eyebrow: "Depoimentos",
    title: "O que nossos alunos dizem",
    description:
      "Experiências compartilhadas por quem encontrou no Studio um espaço de cuidado, presença e movimento consciente.",
  },

  // Depoimentos temporários de exemplo.
  // Substitua apenas com autorização dos alunos para publicação.
  testimonials: [
    {
      text: "As aulas são muito acolhedoras e respeitam meu ritmo. Me sinto mais confiante e disposta no dia a dia.",
      name: "Maria S.",
    },
    {
      text: "Encontrei no Studio Pilates Vivere um ambiente tranquilo, organizado e com muita atenção em cada detalhe.",
      name: "Ana P.",
    },
    {
      text: "Comecei buscando melhorar minha postura e hoje o pilates já faz parte da minha rotina de cuidado.",
      name: "Cláudia R.",
    },
  ],

  cta: {
    eyebrow: "Seu primeiro passo",
    title: "Quer começar com uma aula experimental?",
    description:
      "Converse com a equipe do Studio Pilates Vivere e descubra a melhor forma de incluir o pilates na sua rotina.",
    action: "Agendar pelo WhatsApp",
  },

  studio: {
    image: studioSpace,
    imageAlt: "Ambiente amplo e iluminado com equipamentos de pilates",
    eyebrow: "Nossa estrutura",
    title: "Um espaço pensado para o seu bem-estar",
    description:
      "Conforto, tranquilidade e equipamentos para apoiar uma experiência de movimento cuidadosa e acolhedora.",
    unitLabel: "Nossa unidade",
  },

  galleryIntro: {
    eyebrow: "Galeria",
    title: "Movimento em cada detalhe",
    description: "Um olhar sobre as aulas, os equipamentos e a atmosfera do Studio.",
  },

  gallery: [
    { src: gallery1, alt: "Aluna praticando exercício de pilates no solo" },
    { src: gallery2, alt: "Equipamento reformer preparado para aula de pilates" },
    { src: gallery3, alt: "Exercício orientado de pilates com bola" },
    { src: gallery4, alt: "Prática de pilates adaptada para diferentes idades" },
    { src: studioSpace, alt: "Espaço claro com equipamentos de pilates" },
    { src: gallery5, alt: "Ajuste cuidadoso das molas de um reformer de pilates" },
    { src: gallery6, alt: "Instrutora orientando aluno durante exercício no reformer" },
    { src: gallery7, alt: "Acessórios de pilates organizados em um ambiente claro" },
  ],

  instagram: {
    eyebrow: "Nosso dia a dia",
    title: "Acompanhe o Vivere no Instagram",
    description:
      "Bastidores, movimento e pequenas inspirações para cuidar de você também fora do Studio.",
    action: "Ver Instagram",
  },

  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Antes da primeira aula",
    description: "Respostas simples para você começar com mais tranquilidade.",
    items: [
      {
        question: "O pilates é indicado para iniciantes?",
        answer:
          "Sim. A prática pode começar do zero e os exercícios são apresentados de forma gradual, respeitando o ritmo de cada pessoa.",
      },
      {
        question: "Idosos podem praticar pilates?",
        answer:
          "Sim. As aulas podem ser adaptadas para diferentes idades e níveis de mobilidade, sempre com orientação individualizada.",
      },
      {
        question: "Preciso ter experiência antes de começar?",
        answer:
          "Não. Na primeira conversa, entendemos seu momento e explicamos cada etapa para que você se sinta confortável.",
      },
      {
        question: "As aulas são personalizadas?",
        answer:
          "Os exercícios são escolhidos e ajustados de acordo com as necessidades, os objetivos e a evolução de cada aluno.",
      },
      {
        question: "Como faço para agendar uma aula experimental?",
        answer:
          "Basta chamar a equipe pelo WhatsApp. Você recebe as orientações e combina o melhor horário para conhecer o Studio.",
      },
    ],
  },

  contactIntro: {
    eyebrow: "Contato",
    title: "Vamos encontrar o melhor começo para você?",
    description:
      "Fale com a equipe, tire suas dúvidas e agende uma conversa de forma rápida pelo WhatsApp.",
  },

  footer: {
    tagline: client.footerTagline,
  },

  developer: {
    name: "VINICIUS PASCHOAL",
    label: "Dev by VINICIUS PASCHOAL",
    url: client.developerUrl,
  },
} as const;
