import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useCookieConsent } from "../../contexts/CookieConsentContext";
import { useGoogleAnalytics } from "../../hooks/useGoogleAnalytics";
import styles from "./SpringDialog.module.css";

/** Overlay “air” effect — no 💮 (user preference) */
const AIR_FLOWER_EMOJIS = ["🌸", "🌼"] as const;
const AIR_FLOWERS_COUNT = 20;

/** Only tulips on the grass strip (4× size in CSS; few placements so they do not overlap) */
const GRASS_FLOWER_EMOJI = "🌷";
const MEADOW_FLOWER_COUNT = 4;
const GRASS_MIN_CENTER_GAP_PCT = 22;
/** Must match .springFooterGrow --spring-footer-wave-h in CSS */
const WAVE_SVG_HEIGHT_REM = 2.1;
const WAVE_VIEWBOX_W = 1200;
const WAVE_VIEWBOX_H = 32;
/**
 * Key samples along the path’s wavy top edge (viewBox coords: x, y, y ↓ in SVG)
 * D="M0,32 L0,18 Q150,0 300,12 T600,8 T900,14 T1200,6 L1200,32 Z"
 */
const WAVE_Y_SAMPLES: { x: number; y: number }[] = [
  { x: 0, y: 18 },
  { x: 300, y: 12 },
  { x: 600, y: 8 },
  { x: 900, y: 14 },
  { x: 1200, y: 6 },
];

function getWaveYInViewBox(x: number): number {
  const clampedX = Math.max(0, Math.min(WAVE_VIEWBOX_W, x));
  for (let i = 0; i < WAVE_Y_SAMPLES.length - 1; i += 1) {
    const a = WAVE_Y_SAMPLES[i]!;
    const b = WAVE_Y_SAMPLES[i + 1]!;
    if (clampedX <= b.x) {
      const t = (clampedX - a.x) / (b.x - a.x);
      return a.y + t * (b.y - a.y);
    }
  }
  return WAVE_Y_SAMPLES[WAVE_Y_SAMPLES.length - 1]!.y;
}

const GRASS_LEFT_MIN = 3;
const GRASS_LEFT_MAX = 97;

function buildEquallySpacedLeftPercents(n: number): number[] {
  const span = GRASS_LEFT_MAX - GRASS_LEFT_MIN;
  if (n <= 1) {
    return [GRASS_LEFT_MIN + span / 2];
  }
  return Array.from({ length: n }, (_, i) => {
    return GRASS_LEFT_MIN + (i * span) / (n - 1);
  });
}

/**
 * Random `left` % with minimum distance between centers; falls back to even spacing.
 */
function buildRandomNonOverlappingLeftPercents(
  n: number,
  minCenterGapPct: number
): number[] {
  const span = GRASS_LEFT_MAX - GRASS_LEFT_MIN;
  for (let pass = 0; pass < 600; pass += 1) {
    const lefts: number[] = [];
    for (let i = 0; i < n; i += 1) {
      let added = false;
      for (let t = 0; t < 120; t += 1) {
        const left = GRASS_LEFT_MIN + Math.random() * span;
        if (lefts.every((L) => Math.abs(L - left) >= minCenterGapPct)) {
          lefts.push(left);
          added = true;
          break;
        }
      }
      if (!added) {
        break;
      }
    }
    if (lefts.length === n) {
      return lefts;
    }
  }
  return buildEquallySpacedLeftPercents(n);
}

const PHONE_TEL = "tel:604-436-345";
const PHONE_DISPLAY = "604-436-345";

type IGrassMeadowFlower = {
  id: number;
  left: number;
  /** Distance from top of the wave strip; follows the wavy line at this `left` */
  topRem: number;
};

export default function SpringDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [meadowFlowers, setMeadowFlowers] = useState<IGrassMeadowFlower[]>([]);
  const { hasUserInteracted, analyticsEnabled, timeToAccept } =
    useCookieConsent();
  const { trackSpringDialogDisplayed, trackSpringDialogPhoneClicked } =
    useGoogleAnalytics();

  useEffect(() => {
    if (hasUserInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        trackSpringDialogDisplayed(timeToAccept);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [
    analyticsEnabled,
    hasUserInteracted,
    timeToAccept,
    trackSpringDialogDisplayed,
  ]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const lefts = buildRandomNonOverlappingLeftPercents(
      MEADOW_FLOWER_COUNT,
      GRASS_MIN_CENTER_GAP_PCT
    );
    setMeadowFlowers(
      lefts.map((left, i) => {
        const xView = (left / 100) * WAVE_VIEWBOX_W;
        const yView = getWaveYInViewBox(xView);
        const topRem = (yView / WAVE_VIEWBOX_H) * WAVE_SVG_HEIGHT_REM;
        return {
          id: i,
          left,
          topRem,
        };
      })
    );
  }, [isOpen]);

  const airFlowers = useMemo(
    () =>
      Array.from({ length: AIR_FLOWERS_COUNT }).map((_, i) => {
        const duration = 6 + Math.random() * 5;
        const delay = -(Math.random() * duration);
        return {
          id: i,
          emoji: AIR_FLOWER_EMOJIS[i % AIR_FLOWER_EMOJIS.length]!,
          left: Math.random() * 100,
          delay,
          duration,
          size: 1.05 + Math.random() * 1.15,
          sway: 20 + Math.random() * 30,
        };
      }),
    []
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePhoneClick = () => {
    trackSpringDialogPhoneClicked();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className={styles.flowersContainer} aria-hidden="true">
                {airFlowers.map((flower) => (
                  <span
                    key={flower.id}
                    className={styles.flower}
                    style={{
                      left: `${flower.left}%`,
                      animationDelay: `${flower.delay}s`,
                      animationDuration: `${flower.duration}s`,
                      fontSize: `${flower.size}rem`,
                      ["--sway" as any]: `${flower.sway}px`,
                    }}
                  >
                    {flower.emoji}
                  </span>
                ))}
              </div>
            </Dialog.Overlay>
            <Dialog.Content>
              <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className={styles.header}>
                  <Dialog.Close asChild>
                    <button
                      className={styles.closeButton}
                      onClick={handleClose}
                      aria-label="Zamknij"
                    >
                      <Icon icon="mdi:close" className={styles.icon} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className={styles.body}>
                  <Dialog.Title className={styles.title}>
                    Promocje Wiosenne!
                  </Dialog.Title>

                  <Dialog.Description className={styles.description}>
                    Wybrane produkty w niższych cenach!
                  </Dialog.Description>

                  <Dialog.Description className={styles.descriptionSecondary}>
                    Folie ochronne 3mk, etui, szybkie ładowarki USB-C i
                    Lightning, słuchawki, kable oraz powerbanki – wybrane
                    akcesoria w wiosennych cenach.
                  </Dialog.Description>

                  <Dialog.Description className={styles.descriptionTertiary}>
                    Po szczegóły i aktualne ceny zapraszamy do salonu –
                    Plac Pułaskiego 7, lok. 62, Olsztyn.
                  </Dialog.Description>

                  <div className={styles.buttonRow}>
                    <a
                      className={styles.contactButton}
                      href={PHONE_TEL}
                      onClick={handlePhoneClick}
                    >
                      <Icon
                        icon="mdi:phone"
                        className={styles.contactButtonIcon}
                      />
                      {PHONE_DISPLAY}
                    </a>
                    <button
                      type="button"
                      className={styles.ctaButton}
                      onClick={handleClose}
                    >
                      Zapraszamy do salonu
                    </button>
                  </div>
                </div>

                <div className={styles.springFooter} aria-hidden="true">
                  <div className={styles.springFooterGrow}>
                    <svg
                      className={styles.springFooterWave}
                      viewBox="0 0 1200 32"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        fill="#4ade80"
                        d="M0,32 L0,18 Q150,0 300,12 T600,8 T900,14 T1200,6 L1200,32 Z"
                      />
                    </svg>
                    {meadowFlowers.map((f) => (
                      <span
                        key={f.id}
                        className={styles.springFooterBloom}
                        style={{
                          left: `${f.left}%`,
                          top: `${f.topRem}rem`,
                        }}
                      >
                        {GRASS_FLOWER_EMOJI}
                      </span>
                    ))}
                    <div className={styles.springFooterMeadow} />
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
