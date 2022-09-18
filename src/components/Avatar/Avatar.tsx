import styles from "./Avatar.module.css";

interface IAvatarProps {
  haveBord: boolean;
}
export const Avatar = ({haveBord = true}: IAvatarProps) => {
  return (
    <>
      <img
        className={haveBord? styles.avatarWithBord:  styles.avatar }
        src="https://avatars.githubusercontent.com/u/26007230?v=4"
        alt="mendesswashington"
      />
    </>
  );
};
