import styles from "./ProfileCard.module.css";
import minhaFoto from "../../assets/RODRIGO OLIVEIRA.png";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={minhaFoto} alt="Rodrigo Oliveira" />
      <h2 className={styles.name}>Rodrigo Oliveira</h2>
      <p className={styles.description}>
        Desenvolvedor Front-end apaixonado por React.
      </p>
    </div>
  );
};

export default ProfileCard;
