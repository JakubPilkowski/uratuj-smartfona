import React from 'react';
import CookieConsent from 'react-cookie-consent';
import styles from './CookieConsent.module.css';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję wszystkie"
      declineButtonText="Odrzuć"
      cookieName="uratuj-smartfona-cookies"
      style={{
        background: 'var(--color-white)',
        color: 'var(--color-black)',
        borderTop: '1px solid var(--color-gray)',
        padding: '1rem',
        fontSize: '14px',
        zIndex: 9999,
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
      }}
      buttonStyle={{
        background: 'var(--color-accent)',
        color: 'var(--color-white)',
        border: 'none',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        marginLeft: '1rem',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: 'var(--color-gray)',
        border: '1px solid var(--color-gray)',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        marginLeft: '0.5rem',
      }}
      expires={365}
      onAccept={onAccept}
      onDecline={onDecline}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <strong>🍪 Używamy plików cookie</strong>
          <br />
          Używamy plików cookie, aby poprawić Twoje doświadczenie na naszej stronie, 
          analizować ruch i personalizować treści. Klikając "Akceptuję wszystkie", 
          wyrażasz zgodę na używanie wszystkich plików cookie.
        </div>
        <div className={styles.links}>
          <a href="/polityka-prywatnosci" className={styles.link}>
            Polityka prywatności
          </a>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
