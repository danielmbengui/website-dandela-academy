'use client'

import Image from 'next/image'
import { useLang } from '../lib/LangContext'
import styles from './Equipe.module.css'
// Fixed team members with pravatar IDs & initials as fallback
const MEMBERS = [
  {
    categoryIdx: 0,
    name: 'Daniel MBENGUI', initials: 'DM',
    roleKey: { fr: 'Parrain de Dandela Academy', pt: 'Padrinho da Dandela Academy', en: 'Patron of Dandela Academy' },
    descKey: { fr: "Figure de soutien et de vision, il accompagne la dynamique et les valeurs fondatrices de l'école.", pt: "Figura de apoio e visão, acompanha a dinâmica e os valores fundadores da escola.", en: "A figure of support and vision, he accompanies the school's founding values and dynamics." },
    //avatar: '/images/team/daniel-mbengui.jpeg', color: '#FF9F1C', bg: '#FFF4E0',
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/daniel-mbengui.jpeg`, color: '#FF9F1C', bg: '#FFF4E0',
    
  },
  {
    categoryIdx: 1,
    name: 'Daniel Slaver MBENGUI', initials: 'DSM',
    roleKey: { fr: 'Directeur', pt: 'Diretor', en: 'Director' },
    descKey: { fr: "Responsable de la vision, du développement et de l'orientation stratégique de l'établissement.", pt: "Responsável pela visão, desenvolvimento e orientação estratégica da instituição.", en: "Responsible for the vision, development and strategic direction of the institution." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/daniel-slaver-mbengui.jpeg`, color: '#1565D8', bg: '#EAF2FF',
  },
  {
    categoryIdx: 1,
    name: 'Willy KIWA', initials: 'WK',
    roleKey: { fr: 'Directeur adjoint', pt: 'Subdiretor', en: 'Deputy Director' },
    descKey: { fr: "Il assiste la direction dans la gestion quotidienne et l'organisation interne.", pt: "Assiste a direção na gestão diária e organização interna.", en: "He assists the director in daily management and internal organisation." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/willy-kiwa.jpeg`, color: '#0D47A1', bg: '#E3F2FD',
  },
  {
    categoryIdx: 1,
    name: 'Afonso NHANGA', initials: 'AN',
    roleKey: { fr: 'Membre de la direction et professeur', pt: 'Professor principal & associado', en: 'Head Teacher & Associate' },
    descKey: { fr: "Associé de Dandela Academy, il est le référent pédagogique principal, il encadre les enseignements en informatique et bureautique.", pt: "Referência pedagógica principal, coordena os ensinos de informática e escritório.", en: "Main pedagogical reference, he oversees computer and office software teaching." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/afonso-nhanga.jpeg`, color: '#1565D8', bg: '#EAF2FF',
  },
  {
    categoryIdx: 2,
    name: 'Luis ANDRÉ DE CARVALHO', initials: 'LADC',
    roleKey: { fr: 'Coordinateur de formation', pt: 'Coordenador de formação', en: 'Training Coordinator' },
    descKey: { fr: "Il organise les parcours de formation, le suivi des apprenants et la coordination des sessions.", pt: "Organiza os percursos de formação, o acompanhamento dos formandos e a coordenação das sessões.", en: "She organises training paths, learner follow-up and session coordination." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/luis-andre-de-carvalho.jpeg`, color: '#1565D8', bg: '#EAF2FF',
  },
  {
    categoryIdx: 2,
    name: 'Anacleta NGOLO ROBERTO', initials: 'ANR',
    roleKey: { fr: 'Assistante administrative', pt: 'Assistente administrativa', en: 'Administrative Assistant' },
    descKey: { fr: "Elle soutient l'administration, s'occupe des inscriptions des élèves, l'accueil et le suivi organisationnel.", pt: "Apoia a administração, a receção e o acompanhamento organizacional.", en: "She supports administration, reception and organisational follow-up." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/anacleta-ngolo-roberto.jpeg`, color: '#1565D8', bg: '#EAF2FF',
  },
  {
    categoryIdx: 3,
    name: 'Edna', initials: 'E',
    roleKey: { fr: 'Formatrice service client', pt: 'Formadora atendimento ao cliente', en: 'Customer Service Trainer' },
    descKey: { fr: "Elle anime la formation en bases du service client et accompagne les apprenants sur les compétences relationnelles.", pt: "Conduz a formação em bases de atendimento ao cliente e acompanha os formandos.", en: "She leads the customer service basics training and supports learners in relational skills." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/edna.jpeg`, color: '#1565D8', bg: '#EAF2FF',
  },
  {
    categoryIdx: 4,
    name: 'Abelardo PANZO MOISÈS', initials: 'APM',
    roleKey: { fr: 'Responsable cafétéria', pt: 'Responsável pela cantina', en: 'Cafeteria Manager' },
    descKey: { fr: "Il assure le bon fonctionnement de l'espace cafétéria, la gestionde la caisse et contribue à l'accueil quotidien.", pt: "Assegura o bom funcionamento da cantina e contribui para a receção diária.", en: "He ensures the smooth running of the cafeteria and contributes to daily reception." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/abelardo-panzo-moises.jpeg`, color: '#4CAF50', bg: '#E8F5E9',
  },
  {
    categoryIdx: 4,
    name: 'Filipe NSIANGANI', initials: 'FN',
    roleKey: { fr: 'Agent de sécurité', pt: 'Agente de segurança', en: 'Security Officer' },
    descKey: { fr: "Veille à la sécurité des lieux et des personnes au quotidien.", pt: "Garante a segurança das instalações e das pessoas diariamente.", en: "Ensures the daily safety of the premises and people." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/filipe-nsiangani.jpeg`, color: '#4CAF50', bg: '#E8F5E9',
  },
  {
    categoryIdx: 4,
    name: 'Jordao JOSÉ', initials: 'JJ',
    roleKey: { fr: 'Agent de sécurité', pt: 'Agente de segurança', en: 'Security Officer' },
    descKey: { fr: "Veille à la sécurité des lieux et des personnes au quotidien.", pt: "Garante a segurança das instalações e das pessoas diariamente.", en: "Ensures the daily safety of the premises and people." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/jordao-jose.jpeg`, color: '#4CAF50', bg: '#E8F5E9',
  },
  {
    categoryIdx: 4,
    name: 'Amelia Antonica PEDRO GOMES', initials: 'AAPG',
    roleKey: { fr: 'Responsable du nettoyage', pt: 'Responsável pela limpeza', en: 'Cleaning Supervisor' },
    descKey: { fr: "Elle veille à la propreté et à la qualité de l'environnement de travail et d'apprentissage.", pt: "Garante a limpeza e qualidade do ambiente de trabalho e aprendizagem.", en: "She ensures cleanliness and quality of the working and learning environment." },
    avatar: `${process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_URL}/team/amelia-antonica-pedro-gomes.jpeg`, color: '#4CAF50', bg: '#E8F5E9',
  },
]

const CATEGORY_KEYS = [
  { fr: 'Parrain', pt: 'Padrinho', en: 'Patron' },
  { fr: 'Direction', pt: 'Direção', en: 'Management' },
  { fr: 'Pédagogie & Formation', pt: 'Pedagogia & Formação', en: 'Pedagogy & Training' },
  { fr: 'Formateurs externes', pt: 'Formadores externos', en: 'External Instructors' },
  { fr: 'Services généraux', pt: 'Serviços Gerais', en: 'General Services' },
]

export default function Equipe() {
  const { lang, t } = useLang()
  const e = t.equipe

  const categories = CATEGORY_KEYS.map((ck, idx) => ({
    label: ck[lang],
    members: MEMBERS.filter(m => m.categoryIdx === idx),
  }))

  return (
    <section className={styles.section} id="equipe">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">{e.label}</div>
          <h2 className="section-title">
            {e.title[0]}<br /><span>{e.title[1]}</span>
          </h2>
          <p className={`section-subtitle ${styles.subtitle}`}>{e.subtitle}</p>
        </div>

        <div className={styles.groups}>
          {categories.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupLabel}>{group.label}</span>
                <div className={styles.groupLine} />
              </div>
              <div className={`${styles.grid} ${group.members.length === 1 ? styles.gridOne : ''}`}>
                {group.members.map((m, mi) => (
                  <div key={mi} className={styles.card}>
                    {/* Avatar photo */}
                    <div className={styles.avatarWrap} style={{ borderColor: m.color + '30', background: m.bg }}>
                      <Image
                        src={m.avatar}
                        alt={m.name}
                        fill
                        sizes="80px"
                        className={styles.avatarImg}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.info}>
                      <h4 className={styles.name}>{m.name}</h4>
                      <span className={styles.role} style={{ color: m.color }}>{m.roleKey[lang]}</span>
                      <p className={styles.desc}>{m.descKey[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
