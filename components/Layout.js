import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgba(55, 65, 81);
          opacity: 1;
          color: white;
        }
      `}</style>
      <Navbar />

      <main className="flex flex-col justify-around">{children}</main>
    </>
  );
};

export default Layout;
