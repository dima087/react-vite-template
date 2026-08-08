import styles from './HelloWorld.module.scss';
import reactLogo from '../../assets/react.svg';

function HelloWorld() {
    return (
        <section className={styles.hello}>
            <img
                src={reactLogo}
                alt="React logo"
                width={80}
                height={80}
            />

            <p className={styles.text}>
                Это стартовый шаблон на React + Vite + TypeScript. Здесь работают
                обычные CSS-файлы, SCSS-файлы, CSS-модули, SCSS-модули и импорт картинок.
            </p>

            <button className={styles.button} type="button">
                Кнопка для проверки
            </button>
        </section>
    );
}

export default HelloWorld;