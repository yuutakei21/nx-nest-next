import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const LinkStyled = styled(Link)(() => ({
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = ({ img }: { img: string }) => {
  return (
    <LinkStyled href="/">
      <Image src={img} alt="logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
