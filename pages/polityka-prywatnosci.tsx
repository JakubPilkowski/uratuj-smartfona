import React from "react";
import Head from "next/head";
import styles from "../styles/PrivacyPolicy.module.css";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Polityka Prywatności - Uratuj Smartfona</title>
        <meta
          name="description"
          content="Polityka prywatności serwisu Uratuj Smartfona w Olsztynie. Dowiedz się, jak chronimy Twoje dane osobowe."
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Polityka prywatności</h1>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Administrator danych</h2>
            <p className={styles.text}>Administratorem danych jest:</p>
            <div className={styles.companyInfo}>
              <p>
                <strong>Jakub Piłkowski</strong>
              </p>
              <p>Adres: Lazurowa 17/42, 10-687 Jaroty</p>
              <p>Email kontaktowy: pilkowskijakub@gmail.com</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Cel i podstawa prawna przetwarzania danych
            </h2>
            <p className={styles.text}>
              Na naszej stronie używamy Google Analytics w celu:
            </p>
            <ul className={styles.list}>
              <li>analizowania ruchu na stronie,</li>
              <li>poprawy jakości i funkcjonalności serwisu,</li>
              <li>monitorowania statystyk odwiedzin.</li>
            </ul>
            <p className={styles.text}>
              Podstawą prawną przetwarzania danych jest zgoda użytkownika
              udzielona poprzez akceptację plików cookies (RODO art. 6 ust. 1
              lit. a).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Jakie dane są zbierane</h2>
            <p className={styles.text}>
              Google Analytics zbiera anonimowe informacje o użytkownikach,
              takie jak:
            </p>
            <ul className={styles.list}>
              <li>typ przeglądarki i systemu operacyjnego,</li>
              <li>język przeglądarki,</li>
              <li>czas i data wizyty,</li>
              <li>odwiedzone strony i czas spędzony na stronie,</li>
              <li>lokalizacja geograficzna na poziomie miasta/kraju.</li>
            </ul>
            <p className={styles.text}>
              Nie zbieramy danych pozwalających na identyfikację osoby ani
              pełnego adresu IP (dane są anonimizowane).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Przekazywanie danych</h2>
            <p className={styles.text}>
              Dane są przetwarzane przez Google LLC w Stanach Zjednoczonych.
              Google stosuje mechanizmy zabezpieczeń i standardowe klauzule
              umowne zgodne z RODO.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Pliki cookies</h2>
            <p className={styles.text}>
              Google Analytics wykorzystuje pliki cookies w celu zbierania
              anonimowych danych statystycznych. Możesz zarządzać zgodą na
              ciasteczka lub całkowicie je wyłączyć w ustawieniach przeglądarki.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Prawa użytkownika</h2>
            <p className={styles.text}>Użytkownik ma prawo do:</p>
            <ul className={styles.list}>
              <li>
                sprzeciwu wobec przetwarzania anonimowych danych w celach
                analitycznych,
              </li>
              <li>
                zarządzania zgodą na pliki cookies poprzez ustawienia
                przeglądarki lub baner cookies.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Kontakt</h2>
            <p className={styles.text}>
              W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:
            </p>
            <p className={styles.contactInfo}>
              <a href="mailto:pilkowskijakub@gmail.com">
                pilkowskijakub@gmail.com
              </a>
            </p>
          </section>

          <div className={styles.backLink}>
            <Link href="/" className={styles.link}>
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
