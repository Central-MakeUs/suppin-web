interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header style={{ padding: '13px 0px 0px 20px' }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
