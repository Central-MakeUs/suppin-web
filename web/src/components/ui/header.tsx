interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header style={{ padding: '13px 0px 0px 20px' }}>
      <h3>{title}</h3>
    </header>
  );
};

export default Header;
