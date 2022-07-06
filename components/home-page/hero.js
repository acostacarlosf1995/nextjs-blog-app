import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/carlos.png'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Carlos</h1>
      <p>
        I blog about web development - especially frontend technologies like React or Next.js.
      </p>
    </section>
  );
}

export default Hero;
