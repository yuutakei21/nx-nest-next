import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface Props {
  pathname: string;
  menuLang: any;
}

function UIBreadcrumbs({ pathname, menuLang }: Props) {
  const breadcrumbs = generateBreadcrumbs({ pathname, menuLang });

  return (
    <Breadcrumbs>
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}

function generateBreadcrumbs({ pathname, menuLang }: Props) {
  // Remove query & split paths
  const pathList = pathname
    .split('?')[0]
    .split('/')
    .filter((v) => v.length > 0);

  const crumbList = pathList.map((path, idx) => {
    const href = '/' + pathList.slice(0, idx + 1).join('/');
    const text = menuLang[path] ? menuLang[path].name : path;
    return { href, text };
  });

  return [{ href: menuLang['home'].href, text: menuLang['home'].name }, ...crumbList];
}

interface CrumbProps {
  text: string;
  href: string;
  last: boolean;
}

function Crumb({ text, href, last = false }: CrumbProps) {
  if (last) {
    return <Typography color="text.primary">{text}</Typography>;
  }

  return (
    <Link underline="hover" href={href}>
      {text}
    </Link>
  );
}

export default UIBreadcrumbs;
