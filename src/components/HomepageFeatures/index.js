import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '?? Professional Document Authoring',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build publication-grade manuscripts, technical reports, and resumes with
        sophisticated typography, hierarchical style sheets, and automated referencing.
      </>
    ),
  },
  {
    title: '?? Real-Time Cloud Co-Authoring',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Collaborate seamlessly with team members anywhere in the world using OneDrive,
        granular version snapshots, inline comments, and Track Changes.
      </>
    ),
  },
  {
    title: '?? Intelligent AI Assistance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Supercharge your writing with Microsoft Editor and Copilot. Draft outlines,
        refine tone, fix complex grammar, and structure tables with natural language.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
