import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facturación Electrónica',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Emite facturas electrónicas de manera rápida y sencilla, cumpliendo con todas las normativas del SAT.
      </>
    ),
  },
  {
    title: 'API REST',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Integra Facturate.pro con tus sistemas mediante nuestra API REST. Automatiza procesos y sincroniza datos en tiempo real.
        <br />
        <a href="https://facturate.pro/documentacion" target="_blank" rel="noopener noreferrer">
          Ver documentación de la API →
        </a>
      </>
    ),
  },
  {
    title: 'Reportes y Análisis',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Obtén insights valiosos de tu facturación con reportes detallados y análisis en tiempo real.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
