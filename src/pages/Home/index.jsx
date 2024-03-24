import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <figure>
          <img className={styles.img_home} src="https://www.bioseta.com.br/wp-content/uploads/2023/06/ewe.png" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />

    </>
  );
}

export default Home
