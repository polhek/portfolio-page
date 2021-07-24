import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgba(3, 105, 161);
          opacity: 1;
          color: white;
        }
      `}</style>
      <Navbar />
      <main className="min-h-screen font-oxanium">{children}</main>
    </>
  );
};

export default Layout;
