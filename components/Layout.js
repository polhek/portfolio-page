import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #0c4a6e;
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
