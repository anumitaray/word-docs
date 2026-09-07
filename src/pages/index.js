import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            Product Overview ??
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/getting-started">
            Getting Started ??
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/user-guide">
            User Guide ??
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/troubleshooting">
            Troubleshooting ??
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Official User Guide & Reference`}
      description="Comprehensive product documentation, user guide, getting started tutorial, and troubleshooting manual for Microsoft Word.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
