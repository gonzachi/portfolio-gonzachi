import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.greeting}>
                            <h1 className={styles.hello}>Hello,</h1>
                            <h1 className={styles.welcome}>welcome!</h1>
                        </div>

                        <div className={styles.roles}>
                            {personalInfo.roles.map((role) => (
                                <span key={role} className={styles.role}>{role}</span>
                            ))}
                        </div>

                        <div className={styles.bio}>
                            {personalInfo.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.animationContainer}>
                        <div className={styles.animationWrapper}>
                            <HeroAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
