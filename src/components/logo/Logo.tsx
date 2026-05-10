import { Icon } from "../icon/Icon";

type LogoPropstype = {
  logoIconId: string;
};

export const Logo = (props: LogoPropstype) => {
  return (
    <a href="#">
      <Icon
        iconId={props.logoIconId}
        width={"97"}
        height={"59"}
        viewBox={"0 0 97 59"}
      />
    </a>
  );
};
