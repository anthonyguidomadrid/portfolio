import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../molecules/Header';
import { About } from '../molecules/About';
import { ProjectSlider } from '../molecules/ProjectSlider';
import { Stack } from '../molecules/Stack';
import { Contact } from '../molecules/Contact';

export function Home({ pageContent, setLocale }) {
  const { locale } = useParams();
  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  return (
    <>
      <Header
        headerContent={pageContent?.headers.find(
          (header) => header.type === 'home'
        )}
        locale={locale}
      />
      {pageContent?.about && (
        <About aboutContent={pageContent?.about} locale={locale} />
      )}
      {pageContent?.project && (
        <ProjectSlider projectContent={pageContent?.project} />
      )}
      {pageContent?.stack && <Stack stackContent={pageContent?.stack} />}
      {pageContent?.contact && (
        <Contact
          contactContent={pageContent?.contact}
          translations={pageContent?.translations}
        />
      )}
    </>
  );
}
