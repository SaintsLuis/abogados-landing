import { useState, useEffect, useRef, type FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface Props {
  open: boolean;
  onClose: () => void;
  t: LangCopy;
}

const EvalModal: FC<Props> = ({ open, onClose, t }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ help: "", country: "", state: "", name: "", email: "", phone: "", note: "" });
  const [emailErr, setEmailErr] = useState("");
  const sheetRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLElement>(null);

  const set = (k: string, v: string) => setData(d => ({ ...d, [k]: v }));

  useEffect(() => {
    if (open) {
      setStep(0);
      setData({ help: "", country: "", state: "", name: "", email: "", phone: "", note: "" });
      setEmailErr("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab" && sheetRef.current) {
        const f = sheetRef.current.querySelectorAll<HTMLElement>('button:not([disabled]),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const tid = setTimeout(() => {
      if (firstFieldRef.current) firstFieldRef.current.focus();
    }, 100);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(tid);
    };
  }, [open, step, onClose]);

  if (!open) return null;

  const total = 3;
  const validEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((s || "").trim());
  const canNext = step === 0 ? !!data.help : step === 1 ? !!data.country.trim() : !!data.name.trim() && validEmail(data.email);
  const goNext = () => {
    if (step === 2) {
      if (!validEmail(data.email)) {
        setEmailErr(t.eval.err_email);
        return;
      }
      setStep(3);
    } else if (canNext) {
      setStep(step + 1);
    }
  };

  const titleId = "sera-eval-title";
  const descId = "sera-eval-desc";

  return (
    <div className="sera-modal" onClick={onClose} role="presentation">
      <div
        ref={sheetRef}
        className="sera-modal__sheet"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal={true}
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button type="button" className="sera-modal__close" onClick={onClose} aria-label={t.eval.close}>
          <span aria-hidden={true}>×</span>
        </button>
        {step < 3 ? (
          <form onSubmit={e => { e.preventDefault(); goNext(); }} noValidate>
            <div className="sera-modal__head">
              <Eyebrow>{`${t.eval.step_of} ${step + 1} ${t.eval.of} ${total}`}</Eyebrow>
              <h3 id={titleId} className="sera-modal__t">{t.eval.title}</h3>
              <p id={descId} className="sera-modal__s">{t.eval.sub}</p>
              <div className="sera-modal__progress" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={total}>
                {[0, 1, 2].map(i => (
                  <span key={i} className={`sera-modal__pbar ${i <= step ? "is-on" : ""}`} aria-hidden={true} />
                ))}
              </div>
            </div>
            <div className="sera-modal__body">
              {step === 0 && (
                <fieldset className="sera-q">
                  <legend className="sera-q__l">{t.eval.q1}</legend>
                  <div className="sera-q__opts" role="radiogroup">
                    {t.eval.q1_opts.map((o, idx) => (
                      <button
                        key={o}
                        ref={idx === 0 ? (firstFieldRef as React.RefObject<HTMLButtonElement>) : null}
                        type="button"
                        role="radio"
                        aria-checked={data.help === o}
                        className={`sera-q__opt ${data.help === o ? "is-on" : ""}`}
                        onClick={() => set("help", o)}
                      >
                        <span className="sera-q__radio" aria-hidden={true} />
                        <span>{o}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}
              {step === 1 && (
                <fieldset className="sera-q">
                  <legend className="sera-q__l">{t.eval.q2}</legend>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q2_country}<span aria-hidden={true} className="sera-req">*</span></span>
                    <input
                      ref={firstFieldRef as React.RefObject<HTMLInputElement>}
                      className="sera-input"
                      type="text"
                      placeholder={t.eval.q2_country}
                      value={data.country}
                      onChange={e => set("country", e.target.value)}
                      required
                      autoComplete="country-name"
                      aria-required={true}
                    />
                  </label>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q2_state}</span>
                    <input
                      className="sera-input"
                      type="text"
                      placeholder={t.eval.q2_state}
                      value={data.state}
                      onChange={e => set("state", e.target.value)}
                      autoComplete="address-level1"
                    />
                  </label>
                </fieldset>
              )}
              {step === 2 && (
                <fieldset className="sera-q">
                  <legend className="sera-q__l">{t.eval.q3}</legend>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q3_name}<span aria-hidden={true} className="sera-req">*</span></span>
                    <input
                      ref={firstFieldRef as React.RefObject<HTMLInputElement>}
                      className="sera-input"
                      type="text"
                      placeholder={t.eval.q3_name}
                      value={data.name}
                      onChange={e => set("name", e.target.value)}
                      required
                      autoComplete="name"
                      aria-required={true}
                    />
                  </label>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q3_email}<span aria-hidden={true} className="sera-req">*</span></span>
                    <input
                      className="sera-input"
                      type="email"
                      placeholder={t.eval.q3_email}
                      value={data.email}
                      onChange={e => { set("email", e.target.value); if (emailErr) setEmailErr(""); }}
                      required
                      autoComplete="email"
                      aria-required={true}
                      aria-invalid={!!emailErr}
                      aria-describedby={emailErr ? "sera-eval-email-err" : undefined}
                    />
                    {emailErr && <span id="sera-eval-email-err" className="sera-input-err" role="alert">{emailErr}</span>}
                  </label>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q3_phone}</span>
                    <input
                      className="sera-input"
                      type="tel"
                      placeholder={t.eval.q3_phone}
                      value={data.phone}
                      onChange={e => set("phone", e.target.value)}
                      autoComplete="tel"
                    />
                  </label>
                  <label className="sera-input-wrap">
                    <span className="sera-input-lbl">{t.eval.q3_note}</span>
                    <textarea
                      className="sera-input sera-input--ta"
                      placeholder={t.eval.q3_note}
                      value={data.note}
                      onChange={e => set("note", e.target.value)}
                      rows={3}
                    />
                  </label>
                </fieldset>
              )}
            </div>
            <div className="sera-modal__foot">
              <button
                type="button"
                className="sera-btn sera-btn--ghost"
                onClick={() => step === 0 ? onClose() : setStep(step - 1)}
              >
                {step === 0 ? t.eval.close : t.eval.back}
              </button>
              <button type="submit" className="sera-btn sera-btn--gold" disabled={!canNext}>
                {step < 2 ? t.eval.next : t.eval.submit}
                <span className="sera-btn__arrow" aria-hidden={true}>→</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="sera-modal__done" role="status" aria-live="polite">
            <div className="sera-modal__seal" aria-hidden={true}>
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="24" r="20" />
                <path d="M14 24 L21 31 L34 17" />
              </svg>
            </div>
            <h3 id={titleId} className="sera-modal__t">{t.eval.done_t}</h3>
            <p className="sera-modal__s">{t.eval.done_d}</p>
            <button type="button" className="sera-btn sera-btn--ghost" onClick={onClose}>{t.eval.close}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvalModal;
