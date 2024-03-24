import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ODS.module.css'

function ODS() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <div className={styles.ods}>
          <div>
            <p>Objetivo de Desenvolvimento Sustentável</p>
            <div className='titulo'>
              
              <h1 className={styles.texto_titulo}>
              <span>13</span><br/>
                Ação contra a<br />
                mudança global do clima
              </h1>
            </div>
            <p>Tomar medidas urgentes para combater <br />
              a mudança do clima e seus imapactos </p>
          </div>
        </div>

        <div className={styles.objetivo}>
          <h2>Objetivos</h2>
          <ol>
            <li>
            Reforçar a resiliência e a capacidade de adaptação a riscos relacionados ao clima e às catástrofes naturais em todos os países
            </li>
            <li>
            Integrar medidas da mudança do clima nas políticas, estratégias e planejamentos nacionais
            </li>
            <li>
            Melhorar a educação, aumentar a conscientização e a capacidade humana e institucional sobre mitigação, adaptação, redução de impacto e alerta precoce da mudança do clima
            </li>
            <li>Implementar o compromisso assumido pelos países desenvolvidos partes da Convenção Quadro das Nações Unidas sobre Mudança do Clima [UNFCCC] para a meta de mobilizar conjuntamente US$ 100 bilhões por ano a partir de 2020, de todas as fontes, para atender às necessidades dos países em desenvolvimento, no contexto das ações de mitigação significativas e transparência na implementação; e operacionalizar plenamente o Fundo Verde para o Clima por meio de sua capitalização o mais cedo possível
            </li>
            <li>
            Promover mecanismos para a criação de capacidades para o planejamento relacionado à mudança do clima e à gestão eficaz, nos países menos desenvolvidos, inclusive com foco em mulheres, jovens, comunidades locais e marginalizadas
            </li>
          </ol>
        </div>




      </div>
      <Footer />
    </>
  );
}

export default ODS;
