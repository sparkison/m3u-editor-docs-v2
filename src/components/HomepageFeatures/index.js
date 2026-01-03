import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    image: '/img/logo.svg',
    description: (
      <>
        Designed to be easy to install and use so your website is up quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: '/img/logo.svg',
    description: (
      <>
        Focus on your content; put docs in the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    image: '/img/logo.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React components.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt="feature" />
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
