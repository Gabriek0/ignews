import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: JSX.Element;
}

export function Input({ label, icon, ...props }: Props) {
  return (
    <div className={styles.mainContainer}>
      <label htmlFor="">{label}</label>

      <div className={styles.inputContainer}>
        {icon}
        <div className={styles.bar} />
        <input type="text" {...props} />
      </div>
    </div>
  );
}
