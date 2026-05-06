export interface NavCopy {
  practice: string;
  team: string;
  process: string;
  stories: string;
  contact: string;
  cta: string;
  skip: string;
  home: string;
  lang_label: string;
  open_menu: string;
  close_menu: string;
}

export interface HeroCopy {
  eyebrow: string;
  title_a: string;
  title_b: string;
  title_c: string;
  sub: string;
  cta_primary: string;
  cta_secondary: string;
  stat1_n: string;
  stat1_l: string;
  stat2_n: string;
  stat2_l: string;
  stat3_n: string;
  stat3_l: string;
}

export interface TrustCopy {
  label: string;
  countries: string;
  langs: string;
  member: string;
  since: string;
}

export interface PracticeArea {
  n: string;
  t: string;
  d: string;
  tags: string[];
}

export interface PracticeCopy {
  eyebrow: string;
  title: string;
  sub: string;
  areas: PracticeArea[];
}

export interface PromiseCopy {
  eyebrow: string;
  title: string;
  body: string;
  sign: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export interface ProcessCopy {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  lang: string;
}

export interface TeamCopy {
  eyebrow: string;
  title: string;
  members: TeamMember[];
}

export interface StoryItem {
  quote: string;
  who: string;
  country: string;
}

export interface StoriesCopy {
  eyebrow: string;
  title: string;
  prev: string;
  next: string;
  story: string;
  items: StoryItem[];
}

export interface EvalCopy {
  title: string;
  sub: string;
  step_of: string;
  of: string;
  q1: string;
  q1_opts: string[];
  q2: string;
  q2_country: string;
  q2_state: string;
  q3: string;
  q3_name: string;
  q3_email: string;
  q3_phone: string;
  q3_note: string;
  back: string;
  next: string;
  submit: string;
  done_t: string;
  done_d: string;
  close: string;
  err_email: string;
}

export interface ContactCopy {
  eyebrow: string;
  title: string;
  sub: string;
  addr_t: string;
  addr: string;
  hours_t: string;
  hours: string;
  tel_t: string;
  tel: string;
  wa_t: string;
  wa: string;
  mail_t: string;
  mail: string;
}

export interface FooterCol {
  h: string;
  l: string[];
}

export interface FooterCopy {
  tag: string;
  cols: FooterCol[];
  bar: string;
}

export interface WaCopy {
  label: string;
  tip: string;
}

export interface LangCopy {
  nav: NavCopy;
  hero: HeroCopy;
  trust: TrustCopy;
  practice: PracticeCopy;
  promise: PromiseCopy;
  process: ProcessCopy;
  team: TeamCopy;
  stories: StoriesCopy;
  eval: EvalCopy;
  contact: ContactCopy;
  footer: FooterCopy;
  wa: WaCopy;
}

export type CopyData = { en: LangCopy; es: LangCopy };
